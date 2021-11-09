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
import { ButtonGroup, Buttons } from '../components/Button.stories';

const getOptionText = (option, currentAmount) => {
  let label = `${option}%`;
  if (currentAmount > 0) {
    label += ` ($${((currentAmount * option) / 100).toFixed(2)})`;
  }
  return label;
};

const tipOptions = [0, 5, 10, 15, 20, 25];

const PaymentScreen = () => {
  const [tipCents, setTipCents] = useState(15);
  const [showLoader, setShowLoader] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasLoadedParams, setHasLoadedParams] = useState(false);
  const [lastOrderId, setLastOrderId] = useState(false);
  const [showTipOptions, setShowTipOptions] = useState(false);
  const ref = useRef(null);
  useHandleClickOutside(ref, () => {
    setShowTipOptions(false);
  });

  const router = useRouter();
  const params = router.query;

  const [currentAmount, setCurrentAmount] = useState(0);
  const [tips, setTips] = useState(0);
  const [isShareChecked, setIsShareChecked] = useState(false);
  const [nonprofitName, setNonProfitName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [anonymousData, setAnonymousData] = useState({
    displayName: '',
    comment: '',
  });
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const { campaignId, nonprofitId, nonprofitName } = params;
    logEvent('View Payment Page', { campaignId, nonprofitId, nonprofitName });
  }, []);

  const handleAmountChanged = (newAmount) => {
    setSelected(newAmount)
    if (newAmount.includes('.')) return;
    if (newAmount && !Number(newAmount)) return;
    if (newAmount && Number(newAmount) >= 50000) newAmount = '49999';
    setCurrentAmount(Number(newAmount));

    console.debug("@@@ 1", router)
    router.replace({
      pathname: router.pathname,
      query: {
        ...router.query,
        amount: Number(newAmount) + '',
      },
    }, undefined, {
      shallow: true,
    }).then(r => {
      console.debug("@@@ 2", router, r)
    });
  };

  const handleTipsChanged = (newTips) => {
    setTips(Number(newTips));
  };

  const handleShareChange = (newShareChecked) => {
    setIsShareChecked(newShareChecked);

    console.debug("@@@ 3", router)
    router.replace({
      pathname: router.pathname,
      query: {
        ...router.query,
        checked: newShareChecked,
      },
    }, undefined, {
      shallow: true,
    }).then(() => {
      console.debug("@@@ 4", router)
    });
  };

  const callCaptureEndpoint = (orderId) => {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/payment`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        orderId,
        userId: userId,
        displayName: anonymousData.displayName,
        comment: anonymousData.comment,
        postId: params.postId,
        originalPostId: params.originalPostId,
        challengeId: params.challengeId || null,
        campaignId: params.campaignId || null,
        tip: tipCents || null,
      }),
    }).then((res) => res.json());
  };

  const redirect = () => {
    if (params.redirectUrl) {
      // @ts-ignore
      router.push(params.redirectUrl).catch();
    }
  };

  const handleCreateOrder = (data, actions) => {
    if (currentAmount < 1) {
      alert('You need to donate at least $ 1.00');
      return;
    }

    const totalAmount = currentAmount * (1 + tipCents / 100);

    //we need to multiply by 0.978 so the non profit doesn't pay part of the tip.
    const platformFee = (totalAmount - currentAmount) * 0.978;

    //when using the tipping model the fee is the tip in cents.
    const fee = Math.round(tipCents / 100 * currentAmount * 100);

    //custom id:
    //nonprofitid|isdonorsharingcontact|reference|feesamount|fees(or)tip model|giftaidflag|programid
    const customId = `${params.nonprofitId}|${params.checked}|${params.challengeName || '0'
      }|${fee}|1|0|121`;

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
    setLastOrderId(orderId);
    setShowLoader(true);
    setShowError(false);
    setShowSuccess(false);

    try {
      await callCaptureEndpoint(orderId);
      setShowLoader(false);
      setShowSuccess(true);
      if (params.redirectThanksPage) {
        redirect();
      } else {
        setTimeout(() => {
          redirect();
        }, 3000);
      }
    } catch (e) {
      setShowLoader(false);
      setShowError(true);
    }
  };

  useEffect(() => {
    if (params.nonprofitName) {
      // @ts-ignore
      setNonProfitName(params.nonprofitName.split(';and;').join('&'));
    }

    if (params.amount) {
      setCurrentAmount(Number(params.amount));
    }

    if (params.userId) {
      setUserId(params.userId);
    }

    handleShareChange(1);

    if (params.nonprofitName || params.amount || params.userId) {
      setHasLoadedParams(true);
    }
  }, [params]);

  if (!hasLoadedParams) {
    return <Loader />;
  }

  if (showLoader || (showSuccess && params.redirectThanksPage)) {
    return <Loader />;
  }

  if (userId) {
    if (showSuccess) {
      return <Loader />;
    }
  }

  const totalNumber = tips != 0 ? (currentAmount + tips).toFixed(2) : (currentAmount * ((100 + tipCents) / 100)).toFixed(2);
  const total = `$${totalNumber}`

  return (
    <div className="w-full min-w-320px">
      <TopNav />
      <div id="payment"
        className="pt-50px t:pt-134px">

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
          {showSuccess && !params.redirectThanksPage ? (
            <div onClick={redirect}>
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
                        <div className="flex flex-col t:flex-row  pb-31px pt-32px gap-5px">
                          <div className="text-14px leading-21px font-bold text-left">
                            I want to setup a recurring monthly donation ❤️
                          </div>
                          {/* boton toggle */}
                        </div>

                        <div className="flex flex-col t:flex-row items-center justify-center gap-14px">
                          <div className="flex-1 w-210px">
                            <Input
                              placeholder={'Your name'}
                              onChange={(displayName) =>
                                setAnonymousData({ ...anonymousData, displayName })
                              }
                              value={anonymousData.displayName}
                              maxLength={30}
                              className="h-46px"
                            />

                          </div>
                          <div className="flex-1 w-210px">
                            <Input
                              onChange={(comment) =>
                                setAnonymousData({ ...anonymousData, comment })
                              }
                              value={anonymousData.comment}
                              placeholder={'Leave a comment'}
                              multiline
                              rows={1}
                              maxLength={250}
                              className="h-46px rounded-10px"
                            />
                          </div>

                        </div>

                      </>
                    ) : null}

                    <div className="flex flex-col t:flex-row items-center justify-center pt-15px  pb-20px">
                      <div className="flex-1 w-210px max-w-434px max-h-93px">
                        <Input
                          className="h-93px text-center text-28px"
                          onChange={handleAmountChanged}
                          value={currentAmount.toString()}
                          prefix={
                            <img className="w-18px h-18px"
                              src="/images/payment/icon-money.svg"
                            />
                          }
                        />
                      </div>
                    </div>
                    <div className="box-buttons flex flex-col t:flex-row items-center justify-center gap-20px pb-11px">
                      <div className="flex flex-col t:flex-row gap-20px">
                        {['20', '50', '100'].map(n => (
                          <Button key={n}
                            variant="white"
                            className={`
                                w-131px
                                text-28px
                                font-light
                                border
                                border-green-500
                                ring-green-500
                                focus-green-500
                                ${selected === n ?
                                "bg-green-500 text-white" :
                                "bg-white text-green-500"}
                            `}
                            onClick={() => handleAmountChanged(n)}
                          >
                            ${n}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="hidden t:block max-w-434px">
                      <div className={`flex flex-col ${currentAmount == 100 ? 'items-end': currentAmount == 50 ? 'items-center' : 'items-start'}`}>
                        <img className="w-10px h-7px" src={'/images/payment/icon-poligon.svg'} />
                      </div>
                      <hr className="text-center border-1px bg-green-600" />
                      <div className=" flex h-65px text-center items-center justify-center 
                                      text-12px leading-18px bg-green-100 text-green-600
                                      rounded-b-10px">
                        <span className="max-w-389px">Lorem Ipsum is simply dummy text of the orm something more longer to this ipsum. </span>
                      </div>

                    </div>


                    <div className="max-w-435px text-12px font-light leading-16px text-left pt-32px pb-10px">
                      <span className="font-bold"> Move the Chain tip.</span> 🙌 Thank you for getting involved and supporting important our organization’s causes every month.
                    </div>

                    <div className="flex flex-col t:flex-row items-center justify-center gap-15px">
                      <div className="rounded-10px border-1px w-210px t:h-46px justify-center bg-white">
                        <div
                          className={`bg-white h-46px  ${showTipOptions ? 'rounded-t-10px' : 'rounded-10px'}  border-1px`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowTipOptions(true);
                          }}>
                          <div className="flex flex-row h-46px items-center justify-center gap-5px">
                            <span className={'text-14px font-bold'}>
                              {getOptionText(tipCents, currentAmount)}{' '}
                            </span>
                            <img className="h-7px" src={'/images/payment/shape.svg'} />
                          </div>

                          {showTipOptions && (
                            <div className={'bg-white rounded-b-10px border-1px'} style={{ marginTop: -1 }} ref={ref}>
                              {tipOptions.map((option) => {
                                let label = getOptionText(option, currentAmount);
                                return (
                                  <div
                                    className={`tip-option ${tipCents === option ? '' : ''
                                      } hover:bg-gray-100`}
                                    key={option}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setTipCents(option);
                                      setTips(0);
                                      setShowTipOptions(false);
                                    }}>
                                    {label}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex-1 w-210px">
                        <Input
                          placeholder={'Enter custom amount here'}
                          className="h-46px rounded-10px"
                          value={tips.toString()}
                          onChange={handleTipsChanged}
                          prefix={
                            <img className="w-18px h-18px"
                              src="/images/payment/icon-money.svg"
                            />
                          }
                        />
                      </div>

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

                  <div className="max-w-240px rounded-30px shadow-0-3-16">
                    <div className="px-17px">
                      <div className="pt-28px pb-14px text-16px leading-19px text-left font-bold">
                        Summary
                      </div>
                      <div className="flex flex-row pb-5px gap-10px items-start max-w-207px">
                        <div className="text-left text-12px leading-15px ">
                          Your donation
                        </div>
                        <div className="flex-1 text-12px leading-15px text-right">${currentAmount.toFixed(2)}</div>

                      </div>
                      <div className="flex flex-row  gap-10px pb-22px items-start max-w-207px">
                        <div className="text-12px leading-15px text-left">
                          Move the Chain tip
                        </div>
                        <div className="flex-1 text-12px leading-15px text-right">${(Number(totalNumber) - currentAmount).toFixed(2)}</div>

                      </div>


                      <hr className="w-197px border-1px bg-secondary-gray-1 text-center justify-center"></hr>
                      <div className="pt-19px flex flex-row pb-34px gap-30px">
                        <div className="text-left text-secondary-green-1 text-14px leading-21px font-bold">
                          Total amount
                        </div>
                        <div className="flex-1 text-right text-secondary-green-1 text-14px leading-21px font-light">
                          <span className={'option-text'}>{total}</span>
                        </div>
                      </div>

                      <div>
                        <div className="font-bold text-12px leading-21px text-justify pb-20px">
                          Choose your payment method
                        </div>
                        <PayPalButtons
                          // upgradeLSAT={true}
                          createOrder={handleCreateOrder}
                          onApprove={(data, actions) => capture(data.orderID)}
                          // shippingPreference="NO_SHIPPING"
                          style={{
                            color: 'gold',
                          }}
                        />
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

export default function PaymentScreenPage() {
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

