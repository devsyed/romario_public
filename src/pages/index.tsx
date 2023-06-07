import SaleBannerGrid from '@containers/sale-banner-grid';
import HeroBlock from '@containers/hero-block';
import Container from '@components/ui/container';
import BrandGridBlock from '@containers/brand-grid-block';
import CategoryBlock from '@containers/category-block';
import { getLayout } from '@components/layout/layout';
import BannerWithProducts from '@containers/banner-with-products';
import { useProducts } from '@framework/products';

import BannerBlock from '@containers/banner-block';
import Divider from '@components/ui/divider';
import DownloadApps from '@components/common/download-apps';
import Support from '@components/common/support';
import Instagram from '@components/common/instagram';
import ProductsFlashSaleBlock from '@containers/product-flash-sale-block';
import ProductsFeatured from '@containers/products-featured';
import BannerSliderBlock from '@containers/banner-slider-block';
import ExclusiveBlock from '@containers/exclusive-block';
import Subscription from '@components/common/subscription';
import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
import { ROUTES } from '@lib/routes';
// import {
//   masonryBanner,
//   promotionBanner,
//   modernDemoBanner as banner,
//   modernDemoProductBanner as productBanner,
// } from '@data/static/banners';
import { siteSettings } from '@settings/site.settings';

import {
  standardDemoBanner as banner,
  standardDemoHeroBanner as heroBanner,
} from '@data/static/banners';
import { homeTrendyProductWithBanner as productWithBanner } from '@data/static/banners';
import Script from 'next/script';
import HomeFeatured from '@containers/home-featured';
import HomeFlashSaleBlock from '@containers/home-flash-sale';
import ProductsTopBlock from '@containers/products-top-block';
import HomeProductsTopBlock from '@containers/home-top-products';
import CollectionBlock from '@containers/collection-block';
import Products from './products';
import AllProductsBlock from '@containers/home-all-collection';
import ProductSearchBlock from '@components/product/product-search-block';

export { getStaticProps } from '@framework/homepage/modern';

export default function Home() {
  return (
    <>
      <HeroBlock data={heroBanner} />
      <Container>
        <CategoryBlock
          sectionHeading="text-shop-by-category"
          variant="rounded"
        />
        <BannerWithProducts
          sectionHeading="text-on-selling-products"
          categorySlug="/search"
          data={productWithBanner}
          variant="modern"
          limit={4}
        />

        <BrandGridBlock sectionHeading="text-top-brands" />
        <SaleBannerGrid />

        <div className="products-sec rounded mx-auto mt-4">
          <div className="container m-auto">
            <div className="product-heading">
              <h2>Trending Products</h2>
            </div>
            <ul id="tabs">
              <li className="bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-b -mb-px inline-block">
                <a id="default-tab" href="#first">
                  All Collections
                </a>
              </li>
              <li className="px-4 text-gray-800 font-semibold py-2 rounded-t inline-block">
                <a href="#second">Flash Sale</a>
              </li>
              <li className="px-4 text-gray-800 font-semibold py-2 rounded-t inline-block">
                <a href="#third">Popular Products</a>
              </li>
              <li className="px-4 text-gray-800 font-semibold py-2 rounded-t inline-block">
                <a href="#fourth">Featured</a>
              </li>
            </ul>
            <div id="tab-contents">
              <div id="first" className="p-4">
                {/* <div className="single-product-box-main flex">
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-1.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                        <a href="#" className="top-sales">
                          Top Sales
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                          <p className="out-of-stock">Out of stock</p>
                        </div>
                        <div className="single-product-heading mb-1">
                          <h3>Nike Air Force 1 '07</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$60.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-2.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading">
                          <h3>NikeCourt Legacy</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$12.99</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-3.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading">
                          <h3>Nike Kiger 9</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$13.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-4.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                        <a href="#" className="top-sales">
                          Top Sales
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading">
                          <h3>Nike Run Swift 3</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$17.99</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-1.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading">
                          <h3>Nike Dri-FIT Rise 365</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$30.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <AllProductsBlock />
              </div>
              <div id="second" className="hidden p-4">
                {/* <div className="single-product-box-main flex">
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-1.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                        <a href="#" className="top-sales">
                          Top Sales
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading mb-1">
                          <h3>Nike Air Force 1 '07</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$60.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-3.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading">
                          <h3>Nike Kiger 9</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$13.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-1.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading">
                          <h3>Nike Dri-FIT Rise 365</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$30.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-4.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                        <a href="#" className="top-sales">
                          Top Sales
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading">
                          <h3>Nike Run Swift 3</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$17.99</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-2.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading">
                          <h3>NikeCourt Legacy</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$12.99</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <HomeFlashSaleBlock />
              </div>
              <div id="third" className="hidden p-4">
                {/* <div className="single-product-box-main flex">
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-2.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading">
                          <h3>NikeCourt Legacy</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$12.99</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-4.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                        <a href="#" className="top-sales">
                          Top Sales
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading">
                          <h3>Nike Run Swift 3</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$17.99</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-1.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                        <a href="#" className="top-sales">
                          Top Sales
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading mb-1">
                          <h3>Nike Air Force 1 '07</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$60.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-3.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading">
                          <h3>Nike Kiger 9</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$13.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-1.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading">
                          <h3>Nike Dri-FIT Rise 365</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$30.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <HomeProductsTopBlock />
              </div>
              <div id="fourth" className="hidden p-4">
                {/* <div className="single-product-box-main flex">
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-3.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading">
                          <h3>Nike Kiger 9</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$13.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-1.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading">
                          <h3>Nike Dri-FIT Rise 365</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$30.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-4.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                        <a href="#" className="top-sales">
                          Top Sales
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading">
                          <h3>Nike Run Swift 3</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$17.99</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-1.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                        <a href="#" className="top-sales">
                          Top Sales
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading mb-1">
                          <h3>Nike Air Force 1 '07</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$60.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-product-inner p-3 w-1/5">
                    <div className="single-product-box">
                      <div className="product-img relative mb-3">
                        <img
                          src="images/produt-2.jpg"
                          width="100%"
                          height="250px"
                        />
                        <a href="#" className="off-prize">
                          25% OFF
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="rating flex mb-1">
                          <img
                            src="images/star.png"
                            width="24px"
                            height="auto"
                          />
                          <p className="mr-2 ml-2">4.5</p>
                        </div>
                        <div className="single-product-heading">
                          <h3>NikeCourt Legacy</h3>
                        </div>
                        <div className="product-description mb-1">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className="product-prize">
                          <h5>$12.99</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <HomeFeatured />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Script src="/section.js"></Script>
    </>
  );
}

Home.getLayout = getLayout;
