import React, { useState } from 'react';
import { useRouter } from 'next/router';
import isEmpty from 'lodash/isEmpty';
import { ROUTES } from '@lib/routes';
import { useUI } from '@contexts/ui.context';
import Button from '@components/ui/button';
import Image from 'next/image';
import Counter from '@components/common/counter';
import { ProductAttributes } from '@components/product/product-attributes';
import { generateCartItem } from '@utils/generate-cart-item';
import usePrice from '@lib/use-price';
import { getVariations } from '@framework/utils/get-variations';
import { useTranslation } from 'next-i18next';
import { useProduct } from '@framework/products';
import isEqual from 'lodash/isEqual';
import Spinner from '@components/ui/loaders/spinner/spinner';
import VariationPrice from '@components/product/product-variant-price';
import { useCart } from '@store/quick-cart/cart.context';
import { toast } from 'react-toastify';
import isMatch from 'lodash/isMatch';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ProductPopup({ productSlug }: { productSlug: string }) {
  const { t } = useTranslation('common');
  const { closeModal, openCart } = useUI();
  const { data: product, isLoading: loading }: any = useProduct({
    slug: productSlug,
  });
  const router = useRouter();
  const { addItemToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
  const [viewCartBtn, setViewCartBtn] = useState<boolean>(false);
  const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);

  const { price, basePrice } = usePrice({
    amount: product?.sale_price ? product?.sale_price : product?.price!,
    baseAmount: product?.price,
  });

  const variations = getVariations(product?.variations!);

  const isSelected = !isEmpty(variations)
    ? !isEmpty(attributes) &&
      Object.keys(variations).every((variation) =>
        attributes.hasOwnProperty(variation)
      )
    : true;

  let selectedVariation: any = {};
  if (isSelected) {
    selectedVariation = product?.variation_options?.find((o: any) =>
      isEqual(
        o.options.map((v: any) => v.value).sort(),
        Object.values(attributes).sort()
      )
    );
  }

  function addToCart() {
    if (!isSelected) return;
    // to show btn feedback while product carting
    setAddToCartLoader(true);
    setTimeout(() => {
      setAddToCartLoader(false);
      setViewCartBtn(true);
    }, 600);
    const item = generateCartItem(product!, selectedVariation);
    addItemToCart(item, quantity);

    toast(t('add-to-cart'), {
      type: 'dark',
      progressClassName: 'fancy-progress-bar',
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  function navigateToProductPage() {
    closeModal();
    router.push(`${ROUTES.PRODUCT}/${productSlug}`, undefined, {
      locale: router.locale,
    });
  }

  function handleAttribute(attribute: any) {
    // Reset Quantity
    if (!isMatch(attributes, attribute)) {
      setQuantity(1);
    }

    setAttributes((prev) => ({
      ...prev,
      ...attribute,
    }));
  }

  function handleClearAttribute() {
    setAttributes(() => ({}));
  }

  function navigateToCartPage() {
    closeModal();
    setTimeout(() => {
      openCart();
    }, 300);
  }

  if (loading) {
    return (
      <div className="relative flex items-center justify-center overflow-hidden bg-white w-96 h-96">
        <Spinner />
      </div>
    );
  }
  const productImage = !isEmpty(selectedVariation)
    ? isEmpty(selectedVariation?.image)
      ? product?.image
      : selectedVariation?.image
    : product?.image;
  return (
    <div className="bg-white rounded-lg">
      <div className="flex flex-col lg:flex-row w-full md:w-[650px] lg:w-[960px] mx-auto overflow-hidden">
        <div className="relative flex items-center justify-center flex-shrink-0 w-full overflow-hidden bg-gray-300 lg:w-430px aspect-[1/1.3] max-h-430px lg:max-h-full">
        <Swiper
          slidesPerView={1}
        >
          <SwiperSlide>
            <img
              src={
                productImage?.original ??
                '/assets/placeholder/products/product-thumbnail.svg'
              }
              alt={product.name}
              className="object-cover"
              sizes="(max-width: 768px) 100vw"
            />
          </SwiperSlide>
          {product?.gallery?.map(image => (
            <SwiperSlide>
              <img
              src={
                image.original ??
                '/assets/placeholder/products/product-thumbnail.svg'
              }
              alt={product.name}
              className="object-cover"
              sizes="(max-width: 768px) 100vw"
            />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

        <div className="flex flex-col w-full p-5 md:p-8">
          <div className="pb-5">
            <div
              className="mb-2 md:mb-2.5 block -mt-1.5"
              onClick={navigateToProductPage}
              role="button"
            >
              <h2 className="text-lg font-semibold text-heading md:text-xl lg:text-2xl hover:text-black">
                {product.name}
              </h2>
            </div>

            {product.unit && isEmpty(variations) && (
              <span className="block mt-2 text-sm font-normal text-body md:mt-3">
                {product.unit}
              </span>
            )}

            <p className="text-sm leading-6 md:text-body md:leading-7">
              {product.description}
            </p>

            <div className="flex items-center mt-3">
              {!isEmpty(variations) ? (
                <VariationPrice
                  selectedVariation={selectedVariation}
                  minPrice={product.min_price}
                  maxPrice={product.max_price}
                />
              ) : (
                <>
                  <div className="text-base font-semibold text-heading md:text-xl lg:text-2xl">
                    {price}
                  </div>

                  {basePrice && (
                    <del className="font-segoe text-gray-400 text-base lg:text-xl ltr:pl-2.5 rtl:pr-2.5 -mt-0.5 md:mt-0">
                      {basePrice}
                    </del>
                  )}
                </>
              )}
            </div>
          </div>

          {Object.keys(variations).map((variation) => {
            return (
              <ProductAttributes
                key={`popup-attribute-key${variation}`}
                title={variation}
                attributes={variations[variation]}
                active={attributes[variation]}
                onClick={handleAttribute}
                clearAttribute={handleClearAttribute}
              />
            );
          })}

          <div className="pt-2 md:pt-4">
            <div className="flex items-center justify-between mb-4 space-x-3 sm:space-x-4 rtl:space-x-reverse">
              {isEmpty(variations) && (
                <>
                  {Number(product.quantity) > 0 ? (
                    <Counter
                      quantity={quantity}
                      onIncrement={() => setQuantity((prev) => prev + 1)}
                      onDecrement={() =>
                        setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                      }
                      disableDecrement={quantity === 1}
                      disableIncrement={Number(product.quantity) === quantity}
                    />
                  ) : (
                    <div className="text-base text-red-500 whitespace-nowrap ltr:lg:ml-7 rtl:first:-mr-4">
                      {t('text-out-stock')}
                    </div>
                  )}
                </>
              )}

              {!isEmpty(selectedVariation) && (
                <>
                  {selectedVariation?.is_disable ||
                  selectedVariation.quantity === 0 ? (
                    <div className="text-base text-red-500 whitespace-nowrap ltr:lg:ml-7 rtl:first:-mr-4">
                      {t('text-out-stock')}
                    </div>
                  ) : (
                    <Counter
                      quantity={quantity}
                      onIncrement={() => setQuantity((prev) => prev + 1)}
                      onDecrement={() =>
                        setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                      }
                      disableDecrement={quantity === 1}
                      disableIncrement={
                        Number(selectedVariation.quantity) === quantity
                      }
                    />
                  )}
                </>
              )}

              <Button
                onClick={addToCart}
                variant="slim"
                className={`w-full lg:w-6/12 xl:w-full ${
                  !isSelected && 'bg-gray-400 hover:bg-gray-400'
                }`}
                disabled={
                  !isSelected ||
                  !product?.quantity ||
                  (!isEmpty(selectedVariation) &&
                    !selectedVariation?.quantity) ||
                  (!isEmpty(selectedVariation) && selectedVariation?.is_disable)
                }
                loading={addToCartLoader}
              >
                <span className="py-2 3xl:px-8">
                  {product?.quantity ||
                  (!isEmpty(selectedVariation) && selectedVariation?.quantity)
                    ? t('text-add-to-cart')
                    : t('text-out-stock')}
                </span>
              </Button>
            </div>

            {viewCartBtn && (
              <button
                onClick={navigateToCartPage}
                className="w-full mb-4 text-sm transition-colors bg-gray-100 border border-gray-300 rounded h-11 md:h-12 text-heading focus:outline-none hover:bg-gray-50 focus:bg-gray-50 xl:text-base"
              >
                {t('text-view-cart')}
              </button>
            )}

            <Button
              onClick={navigateToProductPage}
              variant="flat"
              className="w-full h-11 md:h-12"
            >
              {t('text-view-details')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
