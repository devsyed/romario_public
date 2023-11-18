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
import { useAtom } from "jotai";
import { clearCheckoutAtom } from "@store/checkout";
import { useCreateOrder } from '@framework/orders';
import { HttpClient } from '@framework/utils/request';
export { getStaticProps } from '@framework/common.ssr';

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

export default function Thankyou() {
const { resetCart } = useCart();
  const { me, loading } = useUser();
  const [, resetCheckout] = useAtom(clearCheckoutAtom);
  const { t } = useTranslation();
  const { createOrder, isLoading } = useCreateOrder();

  useEffect(() => {
    setLastOrderToProcessing()
    localStorage.removeItem('cartItemsSession');
    resetCart();
    resetCheckout();
  },[])
  

  async function setLastOrderToProcessing()
  {
    if(!localStorage.getItem('cartItemsSession')) return;
    const response = await HttpClient.get('/orders/mark_order_as_pending');
    console.log(response);
  }

  return (
    <>
      {!loading ? (
        <>
          <Divider className="mb-0" />
          <Container>
            <div className="py-8 lg:py-10 xl:py-14 max-w-[1280px] mx-auto">
              <div className="flex flex-col items-center w-full m-auto lg:flex-row lg:items-start lg:space-x-7 xl:space-x-12 rtl:space-x-reverse">
                <div className="w-full space-y-6">
                  
                    <h3 className='lg:text-[60px] text-center text-black'>Thank You!</h3>
                    <p className='text-center lg:text-[20px]'>Your Order was successfull. Please Click here to view and manage your orders. <a className='underline text-[#013bd9]' href="/my-account/orders">Orders</a></p>
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


Thankyou.authenticate = true;
Thankyou.getLayout = getLayout;
