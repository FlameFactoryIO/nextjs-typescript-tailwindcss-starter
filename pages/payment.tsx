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
  const [isShareChecked, setIsShareChecked] = useState(false);
  const [nonprofitName, setNonProfitName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [anonymousData, setAnonymousData] = useState({
    displayName: '',
    comment: '',
  });

  useEffect(() => {
    const { campaignId, nonprofitId, nonprofitName } = params;
    logEvent('View Payment Page', { campaignId, nonprofitId, nonprofitName });
  }, []);

  const handleAmountChanged = (newAmount) => {
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
    const customId = `${params.nonprofitId}|${params.checked}|${
      params.challengeName || '0'
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

  const total = `$${(currentAmount * ((100 + tipCents) / 100)).toFixed(2)}`;

  return (
    <div className="w-full min-w-320px">
      <TopNav />
      <div>
        {showError ? (
          <div>
            <div>Whoops, something went wrong!</div>
            <div onClick={() => {lastOrderId && capture(lastOrderId)}}>
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
            <div className="header-container">
              <span className="enter-your-donation">Your donation to</span>
              <span className="charity-heart">{nonprofitName}</span>
            </div>
            {!userId ? (
              <>
                <Input
                  placeholder={'Your name'}
                  onChange={(displayName) =>
                    setAnonymousData({ ...anonymousData, displayName })
                  }
                  value={anonymousData.displayName}
                  maxLength={30}
                />
                <Input
                  onChange={(comment) =>
                    setAnonymousData({ ...anonymousData, comment })
                  }
                  value={anonymousData.comment}
                  placeholder={'Leave a comment'}
                  multiline
                  rows={4}
                  maxLength={250}
                />
              </>
            ) : null}

            <Input onChange={handleAmountChanged} value={currentAmount.toString()} />

            <div className="box-buttons">
              <Button onClick={() => handleAmountChanged('20')}>$20</Button>
              <Button onClick={() => handleAmountChanged('50')}>$50</Button>
              <Button onClick={() => handleAmountChanged('100')}>$100</Button>
            </div>
            <div>Tip Move the Chain Services</div>
            <div>
              Move the Chain offers a free platform to nonprofits. We rely on
              our donors&apos; generosity to operate our platform and continue to
              help organizations.
            </div>
            <div
              className={'small-rectangle rectangle tip-select'}
              onClick={(e) => {
                e.stopPropagation();
                setShowTipOptions(true);
              }}>
              <span className={'option-text'}>
                {getOptionText(tipCents, currentAmount)}{' '}
                <img src={'/arrow-down.svg'} height={7} />
              </span>
              {showTipOptions && (
                <div className={'tip-options-container'} ref={ref}>
                  {tipOptions.map((option) => {
                    let label = getOptionText(option, currentAmount);
                    return (
                      <div
                        className={`tip-option ${
                          tipCents === option ? 'tip-option-selected' : ''
                        }`}
                        key={option}
                        onClick={(e) => {
                          e.stopPropagation();
                          setTipCents(option);
                          setShowTipOptions(false);
                        }}>
                        {label}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className={'subtitle'}>Total:</div>
            <div className={'small-rectangle rectangle'}>
              <span className={'option-text'}>{total}</span>
            </div>

            <CheckBox
              value={isShareChecked}
              onChange={handleShareChange}
            >
              Share my name and email with this charity.
            </CheckBox>

            <PayPalButtons
              // upgradeLSAT={true}
              createOrder={handleCreateOrder}
              onApprove={(data, actions) => capture(data.orderID)}
              // shippingPreference="NO_SHIPPING"
              style={{
                color: 'gold',
              }}
            />

            <p className="footer-text">
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
        ) : null}
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

