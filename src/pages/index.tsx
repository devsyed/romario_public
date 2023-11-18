import { getLayout } from '@components/layout/layout';
import Container from '@components/ui/container';
export { getStaticProps } from '@framework/homepage/modern';
import Slider from '@components/romario/Slider';
import { Slide1 } from "../components/romario/data/HomePageSlides";
import CategoriesSlider from '@components/romario/CategorySlider';
import BannerWithProducts from '@containers/banner-with-products';
import { homeTrendyProductWithBanner as productWithBanner } from '@data/static/banners';
import Newsletter from '@components/romario/Newsletter';
import Support from '@components/common/support';
import CategoryGrids from '@components/romario/CategoryGrids';
import CTA from '@components/romario/CTA';
import Brands from '@components/romario/Brands';
import ProductsFeatured from '@containers/products-featured';
import HomeProductsTopBlock from '@containers/home-top-products';
import ProductsTopBlock from '@containers/products-top-block';
import HomeFeatured from '@containers/home-featured';
import ProductsWithFlashSale from '@containers/products-with-flash-sale';
import ProductsBlock from '@containers/products-block';

const topbarData = [
  <p className="text-md font-light m-0">Free Delivery over AED 500 worth of Shopping</p>
]
const sliderData = [
  {
    "id":1,
    "backgroundImage":"/slide-1.png",
    "content": <Slide1/>
  },
  {
    "id":2,
    "backgroundImage":"/slide-1.png",
    "content": <Slide1/>
  }
]
const categories = [
  {
    "id":1,
    "image":"/categories/cat-1.png",
    "label":"Football",
    "link":"/football"
  },
  {
    "id":2,
    "image":"/categories/cat-2.png",
    "label":"Bags",
    "link":"/football"
  },
  {
    "id":3,
    "image":"/categories/cat-3.png",
    "label":"Kits",
    "link":"/football"
  },
  {
    "id":4,
    "image":"/categories/cat-4.png",
    "label":"Gloves",
    "link":"/football"
  },
  {
    "id":5,
    "image":"/categories/cat-5.png",
    "label":"Jerseys",
    "link":"/football"
  },
  {
    "id":6,
    "image":"/categories/cat-6.png",
    "label":"Mens",
    "link":"/football"
  },
  {
    "id":7,
    "image":"/categories/cat-7.png",
    "label":"Sale",
    "link":"/football"
  },
]

const categoriesBlockData = [
  {
    backgroundImage: "/categories/track.png",
    title: "Track",
    buttonText:"Shop Now",
    buttonLink:"/tennis"
  },
  {
    backgroundImage: "/categories/basketball.png",
    title: "Basketball",
    buttonText:"Shop Now",
    buttonLink:"/tennis"
  },
  {
    backgroundImage: "/categories/football.png",
    title: "Football",
    buttonText:"Shop Now",
    buttonLink:"/tennis"
  },
  {
    backgroundImage: "/categories/tennis.png",
    title: "Tennis",
    buttonText:"Shop Now",
    buttonLink:"/tennis"
  }
]

const CTAData = {
  backgroundImage: "/categories/cta.png",
  height:300,
  backgroundPosition:"right",
  content: <div className="flex flex-col h-full items-start justify-center px-[300px] pb-4">
      <h3 className="text-[56px] text-black">"ROMARIO15"</h3>
      <p>USE THIS PROMO CODE TO AVAIL 15% DISCOUNT.</p>
    </div>
}


export default function Home() {
  return (
    <div className="romario-homepage-wrapper">
      <Slider className="romario-homepage-slider" height={600} sliderData={sliderData}/>
      <Container>
        <CategoriesSlider categories={categories}/>
        <Brands/>
        <CTA backgroundImage={CTAData.backgroundImage} height={CTAData.height} backgroundPosition={CTAData.backgroundPosition} content={CTAData.content}/>
        <HomeProductsTopBlock sectionHeading='Products' className='my-[75px]'/>
        <CategoryGrids data={categoriesBlockData} />
        <Newsletter/>
      </Container>
    </div>
  );
}

Home.getLayout = getLayout;
