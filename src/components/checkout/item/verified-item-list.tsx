import Coupon from '@components/checkout/coupon/coupon';
import usePrice from '@lib/use-price';
import EmptyCartIcon from '@components/icons/empty-cart';
import { CloseIcon } from '@components/icons/close-icon';
import { useTranslation } from 'next-i18next';
import { useCart } from '@store/quick-cart/cart.context';
import {
  calculatePaidTotal,
  calculateTotal,
} from "@store/quick-cart/cart.utils";
import { useAtom } from "jotai";
import {
  couponAtom,
  verifiedResponseAtom,
} from '@store/checkout';
import ItemCard from '@components/checkout/item/item-card';
import { ItemInfoRow } from '@components/checkout/item/item-info-row';
import PaymentGrid from '@components/checkout/payment/payment-grid';
import { PlaceOrderAction } from '@components/checkout/action/place-order-action';
import CryptoJS from 'crypto-js';
import { useState } from 'react';
import moment from 'moment-timezone';
import { useEffect } from 'react';
import { checkoutAtom, discountAtom, walletAtom } from '@store/checkout';
import { useCreateOrder } from '@framework/orders';
import { formatOrderedProduct } from '@lib/format-ordered-product';
import { HttpClient } from '@framework/utils/request';

interface Props {
  className?: string;
}

const VerifiedItemList: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation("common");
  const { items, isEmpty: isEmptyCart } = useCart();
  const [verifiedResponse] = useAtom(verifiedResponseAtom);
  const [coupon, setCoupon] = useAtom(couponAtom);
  const [discount] = useAtom(discountAtom);
  const { createOrder, isLoading } = useCreateOrder();

  const sharedsecret = process.env.NEXT_PUBLIC_ADCB_SHARED_SECRET;
  const [hash_algorithm] = useState('HMACSHA256');
  const [language] = useState('en_US');
  const [timezone, setTimezone] = useState('Asia/Dubai');
  const [oid,setOid] = useState('818');
  const [ipgTransactionId] = useState(1);
  const [currency] = useState('784');
  const [mobileMode] = useState('false');
  const [checkoutoption] = useState('combinedpage');
  const [authenticateTransaction] = useState('true');
  const responseFailURL = process.env.NEXT_PUBLIC_ADCB_RESPONSE_FAIL_URL;
  const responseSuccessURL = process.env.NEXT_PUBLIC_ADCB_RESPONSE_SUCCESS_URL;
  const [transactionNotificationURL] = useState('');

  const storename = process.env.NEXT_PUBLIC_ADCB_STORE_NAME ;
  const [txntype] = useState('sale');
  const [txnDateTime,setTxnDateTime] = useState('');
  const [extendedHash,setExtendedHash] = useState('');
  const [trackingId, setTrackingId] = useState('')

  const calculateExtendedHash = () => {
    const stringToHash = `${base_amount + verifiedResponse?.shipping_charge + verifiedResponse?.total_tax}|${checkoutoption}|${currency}|${hash_algorithm}|${oid}|${responseFailURL}|${responseSuccessURL}|${storename}|${timezone}|${txnDateTime}|${txntype}`;

    const hashHMACSHA256 = CryptoJS.HmacSHA256(stringToHash, sharedsecret);
    const extendedhash = CryptoJS.enc.Base64.stringify(hashHMACSHA256);
    console.log(extendedHash)
    setExtendedHash(extendedhash);
  };

  const available_items = items?.filter(
    (item) => !verifiedResponse?.unavailable_products?.includes(item.id)
  );

  const { price: tax } = usePrice(
    verifiedResponse && {
      amount: verifiedResponse.total_tax ?? 0,
    }
  );

  const { price: shipping } = usePrice(
    verifiedResponse && {
      amount: verifiedResponse.shipping_charge ?? 0,
    }
  );

  const base_amount = calculateTotal(available_items);
  const { price: sub_total } = usePrice(
    verifiedResponse && {
      amount: base_amount,
    }
  );

  const { price: discountPrice } = usePrice(
    //@ts-ignore
    discount && {
      amount: Number(discount),
    }
  );

  const { price: total } = usePrice(
    verifiedResponse && {
      amount: calculatePaidTotal(
        {
          totalAmount: base_amount,
          tax: verifiedResponse?.total_tax,
          shipping_charge: verifiedResponse?.shipping_charge,
        },
        Number(discount)
      ),
    }
  );

  
  
  useEffect(() => {
    setTxnDateTime(moment().tz(timezone).format('YYYY:MM:DD-HH:mm:ss'))
  }, []); 

  
  const [
    {
      billing_address,
      shipping_address,
      delivery_time,
      ncoupon,
      verified_response,
      customer_contact,
      customer_name,
      payment_gateway,
      token,
    },
  ] = useAtom(checkoutAtom);
  const [ndiscount] = useAtom(discountAtom);
  const [use_wallet_points] = useAtom(walletAtom);
  const subtotal = calculateTotal(available_items);


  const ntotal = calculatePaidTotal(
    {
      totalAmount: subtotal,
      tax: verified_response?.total_tax!,
      shipping_charge: verified_response?.shipping_charge!,
    },
    Number(discount)
  );


  const submitHandler = async(e) =>{
    let input = {
      products: available_items?.map((item) => formatOrderedProduct(item)),
      amount: subtotal,
      coupon_id: Number(ncoupon?.id),
      discount: ndiscount ?? 0,
      paid_total: ntotal,
      sales_tax: verified_response?.total_tax,
      delivery_fee: verified_response?.shipping_charge,
      total: ntotal,
      delivery_time: delivery_time?.title,
      customer_contact,
      customer_name,
      use_wallet_points,
      payment_gateway:'CASH_ON_DELIVERY',
      payment_status: 'paid-online',
      billing_address: {
        ...(billing_address?.address && billing_address.address),
      },
      shipping_address: {
        ...(shipping_address?.address && shipping_address.address),
      },
    };
    delete input.billing_address.__typename;
    delete input.shipping_address.__typename;
    localStorage.setItem('cartItemsSession', JSON.stringify(input));

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

    localStorage.setItem(`paymentProcessedOn${formattedDate}`,'true');
  
    createOrder(input);
    calculateExtendedHash();
  }
  console.log(process.env);

  return (
    <div className={className}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between text-heading text-base font-semibold bg-gray-200 px-6 py-3.5 border-b border-gray-300">
          <span>{t('text-product')}</span>
          <span>{t('text-sub-total')}</span>
        </div>
        {!isEmptyCart ? (
          <div className="px-6 py-2.5">
            {items?.map((item) => {
              const notAvailable = verifiedResponse?.unavailable_products?.find(
                (d: any) => d === item.id
              );
              return (
                <ItemCard
                  item={item}
                  key={item.id}
                  notAvailable={!!notAvailable}
                />
              );
            })}
          </div>
        ) : (
          <EmptyCartIcon />
        )}
      </div>

      <div className="">
        <ItemInfoRow title={t('text-sub-total')} value={sub_total} />
        <ItemInfoRow title={t('text-tax')} value={tax} />
        <ItemInfoRow title={t('text-shipping')} value={shipping} />
        {discount && coupon ? (
          <div className="flex justify-between px-6 py-5 border-t border-gray-100">
            <p className="text-sm text-body ltr:mr-4 rtl:ml-4">
              {t('text-discount')}
            </p>
            <span className="text-xs font-semibold text-red-500 flex items-center ltr:mr-auto rtl:ml-auto">
              ({coupon?.code})
              <button onClick={() => setCoupon(null)}>
                <CloseIcon className="w-3 h-3 ltr:ml-2 rtl:mr-2" />
              </button>
            </span>
            <span className="text-sm text-body">{discountPrice}</span>
          </div>
        ) : (
          <div className="flex justify-between py-4 px-6 border-t border-gray-100">
            <Coupon subtotal={base_amount} />
          </div>
        )}
        <div className="flex justify-between border-t-4 border-double border-gray-100 py-4 px-6">
          <p className="text-base font-semibold text-heading">
            {t('text-total')}
          </p>
          <span className="text-base font-semibold text-heading">{total}</span>
        </div>
      </div>
      {/* <PaymentGrid className="px-6 py-5 border border-gray-100" /> */}
      <p className='px-7'>We use <strong>ADCB</strong> Payment Gateway, You will be redirected to <strong>ADCB Payment Page</strong>.</p>

      
      <form onSubmit={submitHandler} className='px-5' action={process.env.NEXT_PUBLIC_ADCB_PAYMENT_URL} method="post" id="payment-intent-romario">
        <input type="hidden" name="hash_algorithm" value={hash_algorithm}/>
        <input type="hidden" name="hashExtended" value={extendedHash}/>
        <input type="hidden" name="txntype" value={txntype} />
        <input type="hidden" name="timezone" value={timezone}/>
        <input type="hidden" name="txndatetime" value={txnDateTime}/>
        <input type="hidden" name="oid" value={oid}/>
        <input type="hidden" name="storename" value={storename} />
        <input type="hidden" name="chargetotal" value={base_amount + verifiedResponse?.shipping_charge + verifiedResponse?.total_tax}/>
        <input type="hidden" name="currency" value={currency}/>
        <input type="hidden" name="checkoutoption" value={checkoutoption}/>
        <input type="hidden" name="responseFailURL" value={responseFailURL}/>
        <input type="hidden" name="responseSuccessURL" value={responseSuccessURL}/>
        <input type="hidden" name="transactionNotificationURL" value={transactionNotificationURL}/>
        

        <button className='bg-primary my-5 w-[400px] px-5 py-3 mr-5 text-white rounded all-categories-button flex items-center justify-center'>Pay Now</button>
      </form>
       
    </div>
  );
};

export default VerifiedItemList;