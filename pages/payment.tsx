import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PayPalButtons, PayPalScriptProvider, FUNDING } from "@paypal/react-paypal-js";

import { useRouter } from 'next/router';
import Input from "../components/Input";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Loader from '../components/Loader';
import useHandleClickOutside from '../components/useHandleClickOutside';
import { logEvent } from '../utils/analytics';
import TopNav from '../components/TopNav';
import { FaUndo } from "react-icons/fa";
import { CheckmarkCircleOutline } from "../components/svg/CheckmarkCircleOutline";
import { Money } from "../components/svg/Money";

const buildOptionText = (option, currentAmount) => {
  let label = `${option}%`;
  if (currentAmount > 0) {
    label += ` ($${((currentAmount * option) / 100).toFixed(2)})`;
  }
  return label;
};

const PaymentScreen = () => {
  const [tipCents, setTipCents] = useState(15);
  const [showLoader, setShowLoader] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastOrderId, setLastOrderId] = useState(false);
  const [showTipOptions, setShowTipOptions] = useState(false);
  const ref = useRef(null);
  useHandleClickOutside(ref, () => {
    setShowTipOptions(false);
  });

  const router = useRouter();
  const params = router.query;

  const [amount, setAmount] = useState(0);
  const [tips, setTips] = useState(0);

  const [redirectThanksPage, setRedirectThanksPage] = useState(null);
  const [isShareChecked, setIsShareChecked] = useState(null);
  const [nonprofitId, setNonProfitId] = useState(null);
  const [nonprofitName, setNonProfitName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [postId, setPostId] = useState(null);
  const [originalPostId, setOriginalPostId] = useState(null);
  const [challengeId, setChallengeId] = useState(null);
  const [challengeName, setChallengeName] = useState(null);
  const [campaignId, setCampaignId] = useState(null);
  const [redirectUrl, setRedirectUrl] = useState(null);

  const [anonymousData, setAnonymousData] = useState({
    displayName: '',
    comment: '',
  });

  useEffect(() => {
    const { campaignId, nonprofitId, nonprofitName } = params;
    logEvent('View Payment Page', { campaignId, nonprofitId, nonprofitName });

    setAmount(isNaN(Number(params.amount)) ? 0 : Number(params.amount));
    setTips(0);

    setRedirectThanksPage(params.redirectThanksPage);
    setIsShareChecked(params.checked === "1");
    setNonProfitId(params.nonprofitId);
    // @ts-ignore
    setNonProfitName(params.nonprofitName?.split(';and;').join('&'));
    setUserId(params.userId);
    setPostId(params.postId);
    setOriginalPostId(params.originalPostId);
    setChallengeId(params.challengeId);
    setChallengeName(params.challengeName);
    setCampaignId(params.campaignId);
    setRedirectUrl(params.redirectUrl);
  }, [params]);

  const handleAmountChange = (value: string) => {
    if (value.indexOf('.') > -1) return;

    const n = parseInt(value, 10);
    if (isNaN(n)) return;
    if (n < 0) return;

    setAmount(Math.min(n, 49999));
  };

  const handleTipsChanged = (newTips) => {
    setTips(Number(newTips));
  };

  const handleShareChange = (newShareChecked) => {
    setIsShareChecked(newShareChecked);
  };

  const handleCreateOrder = async (data: any, actions: any) => {
    if (amount < 1) {
      alert(`${amount} You need to donate at least $ 1.00`);
      return;
    }

    const totalAmount = amount * (1 + tipCents / 100);

    //we need to multiply by 0.978 so the non profit doesn't pay part of the tip.
    const platformFee = (totalAmount - amount) * 0.978;

    //when using the tipping model the fee is the tip in cents.
    const fee = Math.round(tipCents / 100 * amount * 100);

    //custom id:
    //nonprofitid|isdonorsharingcontact|reference|feesamount|fees(or)tip model|giftaidflag|programid
    const customId = `${nonprofitId}|${isShareChecked}|${challengeName || '0'}|${fee}|1|0|121`;

    return actions.order.create({
      purchase_units: [
        {
          description: `Move the Chain donation to support ${nonprofitName}`,
          amount: {
            value: totalAmount.toFixed(2),
          },
          custom_id: customId,
          payment_instruction: {
            disbursement_mode: 'INSTANT',
            platform_fees: [
              {
                amount: {
                  currency_code: 'USD',
                  value: platformFee.toFixed(2),
                },
                payee: {
                  email_address: process.env.NEXT_PUBLIC_PAYPAL_MERCHANT_EMAIL,
                },
              },
            ],
          },
        },
      ],
      application_context: {
        shipping_preference: 'NO_SHIPPING',
      },
    });
  };

  const capture = async (orderId) => {
    console.debug("capture", { orderId });

    setLastOrderId(orderId);
    setShowLoader(true);
    setShowError(false);
    setShowSuccess(false);

    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/payment`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          orderId,
          userId,
          displayName: anonymousData.displayName,
          comment: anonymousData.comment,
          postId,
          originalPostId,
          challengeId,
          campaignId,
          tip: tipCents || null,
        }),
      });

      setShowSuccess(true);
      if (redirectUrl) {
        if (redirectThanksPage) {
          router.push(redirectUrl).catch();
        } else {
          setTimeout(() => {
            router.push(redirectUrl).catch();
          }, 3000);
        }
      }
    } catch (e) {
      console.error("capture", e);
      setShowError(true);
    } finally {
      setShowLoader(false);
    }
  };

  if (!(nonprofitName || amount || userId)) {
    return <Loader />;
  }

  if (showLoader || (showSuccess && redirectThanksPage)) {
    return (
      <>
        Operation successful (thank you), redirecting...
        <Loader />
      </>
    );
  }

  if (userId) {
    if (showSuccess) {
      return (
        <>
          Operation successful, redirecting...
          <Loader />
        </>
      );
    }
  }

  const total = tips != 0 ? (amount + tips).toFixed(2) : (amount * ((100 + tipCents) / 100)).toFixed(2);

  return (
    <div className="w-full min-w-320px">
      <TopNav />
      <div id="payment"
        className="pt-77px t:pt-134px">

        <div>
          {showError ? (
            <div>
              <div>Whoops, something went wrong!</div>
              <div onClick={() => { lastOrderId && capture(lastOrderId) }}>
                <div title={`Retry`} />
                <FaUndo />
              </div>
            </div>
          ) : null}
        </div>

        <div>
          {showSuccess && !redirectThanksPage ? (
            <div onClick={() => redirectUrl && router.push(redirectUrl).catch()}>
              <CheckmarkCircleOutline />
              <div>Thank you for donating!</div>
            </div>
          ) : null}
          {!showSuccess ? (
            <div className="main-container">
              <div className="header-container flex flex-col items-center text-center">
                <span className="enter-your-donation flex-1 text-18px leading-27px font-light ">Your donation to</span>
                <span className="charity-heart flex-1 text-28px leading-33-6px font-bold">{nonprofitName}</span>

                <div className="flex flex-col t:flex-row justify-center  items-center t:items-start gap-22px  pt-42px pb-42px px-10px">


                  <div className="max-w-474px rounded-30px shadow-0-3-16 px-20px pb-17px">

                    {!userId ? (
                      <>
                        {/*<div className="flex flex-col t:flex-row  pb-31px pt-32px gap-5px">
                          <div className="text-14px leading-21px font-bold text-left">
                            I want to setup a recurring monthly donation ❤️
                          </div>
                    </div>*/}

                        <div className="flex flex-col t:flex-row items-center justify-center gap-14px pt-32px">
                          <Input
                            className="flex-1 w-full t:w-210px"
                            placeholder={'Your name'}
                            onChange={(displayName) =>
                              setAnonymousData({ ...anonymousData, displayName })
                            }
                            value={anonymousData.displayName}
                            maxLength={30}
                          />
                          <Input
                            className="flex-1 w-full t:w-210px"
                            onChange={(comment) =>
                              setAnonymousData({ ...anonymousData, comment })
                            }
                            value={anonymousData.comment}
                            placeholder={'Leave a comment'}
                            maxLength={250}
                          />
                        </div>

                      </>
                    ) : null}

                    <Input
                      className="mt-15px flex-1 text-center text-48px pr-30px"
                      inputClassName={"text-center"}
                      prefix={<Money className="w-18px h-18px ml-30px" />}
                      onChange={handleAmountChange}
                      value={amount.toString()}
                    />

                    <div className="mt-20px flex flex-col t:flex-row items-center justify-center gap-20px">
                      {[20, 50, 100].map(n => (
                        <Button key={n}
                          variant="white"
                          className={`
                              w-full t:w-131px
                              text-28px
                              leading-33px
                              font-light
                              border
                              border-green-500
                              ring-green-500
                              focus-green-500
                              ${amount === n ?
                              "bg-green-500 text-white" :
                              "bg-white text-green-500"}
                          `}
                          onClick={() => setAmount(n)}
                        >
                          ${n}
                        </Button>
                      ))}
                    </div>

                    {/*<div className="hidden t:block max-w-434px">
                      <div className={`flex flex-col ${amount == 100 ? 'items-end': amount == 50 ? 'items-center' : 'items-start'}`}>
                        <img className="w-10px h-7px" src={'/images/payment/icon-poligon.svg'} />
                      </div>
                      <hr className="text-center border-1px bg-green-600" />
                      <div className="flex h-65px text-center items-center justify-center
                                      text-12px leading-18px bg-green-100 text-green-600
                                      rounded-b-10px">
                        <span className="max-w-389px">Lorem Ipsum is simply dummy text of the orm something more longer to this ipsum.</span>
                      </div>
                                </div>*/}


                    <div className="max-w-435px text-12px font-light leading-16px text-left pt-36px pb-10px">
                      <span className="font-bold"> Move the Chain tip.</span>{" "}🙌 Thank you for getting involved and supporting important our organization’s causes every month.
                    </div>

                    <div className="flex flex-col t:flex-row items-center justify-center gap-15px">
                      <div className="rounded-10px border-1px w-full t:w-210px t:h-46px justify-center overflow-visible z-50">
                        <div
                          className={`bg-white h-46px ${showTipOptions ? 'rounded-t-10px' : 'rounded-10px'}  border-1px select-none cursor-pointer`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowTipOptions(true);
                          }}
                        >
                          <div className="flex flex-row h-46px items-center justify-center gap-5px">
                            <span className={'text-14px font-bold'}>
                              {buildOptionText(tipCents, amount)}{' '}
                            </span>
                            <img className="h-7px" src={'/images/payment/shape.svg'} />
                          </div>

                          {showTipOptions && (
                            <div className="rounded-b-10px border-1px -mt-1px bg-white" ref={ref}>
                              {[0, 5, 10, 15, 20, 25].map((option) => {
                                return (
                                  <div
                                    className={`${tipCents === option ? 'bg-green-200 hover:bg-green-300' : 'hover:bg-gray-100'} cursor-pointer`}
                                    key={option}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setTipCents(option);
                                      setTips(0);
                                      setShowTipOptions(false);
                                    }}>
                                    {buildOptionText(option, amount)}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>

                      <Input
                        placeholder={'Enter custom amount here'}
                        inputClassName={"text-center"}
                        className="flex-1 h-46px"
                        value={tips.toString()}
                        onChange={handleTipsChanged}
                        prefix={<Money className="w-18px h-18px" />}
                      />

                      {/*<div className={'subtitle'}>Total:</div>
                      <div className={'small-rectangle rectangle'}>
                        <span className={'option-text'}>{total}</span>
                            </div>*/}
                    </div>

                    <div className="pt-8px text-left text-10px leading-12px font-light text-secondary-gray-3 ">
                      *Move the Chain charges recipients a 3% platform fee for standard basic operating expenses.
                    </div>

                    <div className="text-left pt-20px">
                      <CheckBox
                        value={isShareChecked}
                        onChange={handleShareChange}
                        variant="green"
                      >
                        <span className="text-12px leading-18px font-light">Share my name and email with this charity.</span>
                      </CheckBox>
                    </div>


                  </div>

                  <div className="max-w-474px t:max-w-240px rounded-30px shadow-0-3-16">
                    <div className="px-17px ">
                      <div className="pt-28px pb-20px text-16px leading-19px text-center t:text-left font-bold">
                        Summary
                      </div>
                      <div className="flex flex-row pb-5px gap-10px items-center t:items-start t:max-w-207px mx-auto t:mr-0">
                        <div className="text-center t:text-left text-12px leading-18px ">
                          Your donation
                        </div>
                        <div className="flex-1 text-12px leading-18px text-right">${amount.toFixed(2)}</div>

                      </div>
                      <div className="flex flex-row  gap-20px t:gap-10px pb-22px items-center t:items-start t:max-w-207px">
                        <div className="text-12px leading-18px text-center t:text-left">
                          Move the Chain tip
                        </div>
                        <div className="flex-1 text-12px leading-18px text-right">${(Number(total) - amount).toFixed(2)}</div>
                      </div>


                      <hr className="border-1px bg-secondary-gray-1 text-center justify-center" />
                      <div className="pt-19px flex flex-row pb-34px gap-30px items-center t:items-start t:max-w-207px">
                        <div className="text-center t:text-left text-green-500 text-14px leading-21px font-bold">
                          Total amount
                        </div>
                        <div className="flex-1 text-right text-green-500 text-16px leading-24px font-light">
                          <span className={'option-text'}>{`$${total}`}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-items-center">
                        <div className="font-bold text-14px leading-21px text-justify pb-20px">
                          Choose your payment method
                        </div>
                        <div className="max-w-210px justify-center">
                          <PayPalButtons
                            forceReRender={[amount, challengeName, isShareChecked, nonprofitId, nonprofitName, tipCents]}
                            // upgradeLSAT={true}
                            createOrder={handleCreateOrder}
                            onApprove={(data, actions) => capture(data.orderID)}
                            // shippingPreference="NO_SHIPPING"
                            style={{
                              color: 'gold',
                            }}
                          />
                        </div>

                      </div>

                      <p className="footer-text text-9px leading-11px text-justify pb-10px  text-secondary-gray-5">
                        PayPal charges recipients a processing fee of 2.2% + $0.30 per
                        transaction. Your donation, which is typically tax deductible,
                        will be made to PayPal Giving Fund, a 501(c)(3) charity, subject
                        to its{' '}
                        <a
                          className="hyperlink"
                          rel="noopener noreferrer"
                          target="_blank"
                          href={
                            'https://www.paypal.com/us/webapps/mpp/givingfund/policies/donor-terms-of-service'
                          }>
                          terms
                        </a>
                        . The charity you recommend typically will receive the funds
                        within{' '}
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={
                            'https://www.paypal.com/us/webapps/mpp/givingfund/policies/donation-delivery-policy#statement-2'
                          }>
                          15-45 days
                        </a>{' '}
                        of your original donation. This doesn&apos;t happen often, but if
                        PayPal Giving Fund{' '}
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={
                            'https://www.paypal.com/us/webapps/mpp/givingfund/policies/donation-delivery-policy#statement-5'
                          }>
                          cannot fund the charity you recommend
                        </a>
                        , it will reassign the funds to a similar charity and whenever
                        possible will consult with you on the reassignment.
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default function PaymentScreenWrapper() {
  return (
    <PayPalScriptProvider
      options={{
        'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        components: 'buttons',
        'disable-funding': FUNDING.PAYLATER,
        'merchant-id': process.env.NEXT_PUBLIC_MERCHANT_ID,
        'data-partner-attribution-id': process.env.NEXT_PUBLIC_ATTRIBUTION_ID,
      }}>
      <PaymentScreen />
    </PayPalScriptProvider>
  );
}

