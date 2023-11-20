import { useTranslation } from 'next-i18next';
import { billingAddressAtom, shippingAddressAtom } from '@store/checkout';
import dynamic from 'next/dynamic';
import { useUser } from '@framework/auth';
import { AddressType } from '@framework/utils/constants';
import { getLayout } from '@components/layout/layout';
import { Address } from '@type/index';
import Divider from '@components/ui/divider';
import Container from '@components/ui/container';
import Subscription from '@components/common/subscription';
import { useCart } from "@store/quick-cart/cart.context";
import { useEffect } from 'react';

import { HttpClient } from '@framework/utils/request';
export { getStaticProps } from '@framework/common.ssr';
import { useRouter } from 'next/router';
import CryptoJS from 'crypto-js';
import { redirect } from 'next/navigation'

const ScheduleGrid = dynamic(
  () => import('@components/checkout/schedule/schedule-grid')
);
const AddressGrid = dynamic(() => import('@components/checkout/address-grid'));
const ContactGrid = dynamic(
  () => import('@components/checkout/contact/contact-grid')
);
const RightSideView = dynamic(
  () => import('@components/checkout/right-side-view')
);

export default function PaymentDeclined() {
  const { me, loading } = useUser();
  const router = useRouter();

  const { orderToken } = router.query;

  async function deleteLastOrder(){
    const response = await HttpClient.get('/orders/remove_last_order');
    router.push('/checkout')
  }

  function verifyToken(token, secretKey) {
    if(!token) return false;
    const [encodedPayload, receivedSignature] = token.split(".");
    const payload = JSON.parse(CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(encodedPayload)));
    const recreatedSignature = CryptoJS.HmacSHA256(JSON.stringify(payload), secretKey).toString(CryptoJS.enc.Base64);
    return recreatedSignature === receivedSignature;
  }


  useEffect(() => {
    if(!orderToken) router.push('/');
    const isTokenVerified = verifyToken(orderToken,'romario_devsyed')
    if(isTokenVerified){
        deleteLastOrder();
    }
  }, []);
  return (
    <>
      {!loading ? (
        <>
          <Divider className="mb-0" />
          <Container>
            <div className="py-8 lg:py-10 xl:py-14 max-w-[1280px] mx-auto">
              <div className="flex flex-col items-center w-full m-auto lg:flex-row lg:items-start lg:space-x-7 xl:space-x-12 rtl:space-x-reverse">
                <div className="w-full space-y-6">
                  
                    <h3 className='lg:text-[60px] text-center text-black'>{process.env.NEXT_PUBLIC_PAYMENT_DECLINED_TITLE}</h3>
                    <p className='text-center lg:text-[20px]'>{process.env.NEXT_PUBLIC_PAYMENT_DECLINED_TEXT} </p>
                </div>
                
              </div>
            </div>
            <Subscription />
          </Container>
        </>
      ) : (
        ''
      )}
    </>
  );
}


PaymentDeclined.authenticate = true;
PaymentDeclined.getLayout = getLayout;

