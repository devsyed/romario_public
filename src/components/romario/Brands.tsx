import Container from "@components/ui/container";
import NotFoundItem from '@components/404/not-found-item';
import isEmpty from 'lodash/isEmpty';
import BrandsData from '../romario/data/BrandsData';
import { useBrands } from '@framework/brands';
import { useTranslation } from 'next-i18next';
import BrandSingle from "./BrandSingle";
export default function Brands({}) {
    const { data: brands, isLoading: loading, error } = useBrands({ limit: 9 });
    const favoriteBrandSlug = 'uhlsports';

    // Separate the 'uhlsports' brand
    const favoriteBrand = brands?.data?.find((brand) => brand.slug === favoriteBrandSlug);

    // Filter out brands with the slug "not-applicable"
    const otherBrands = brands?.data?.filter((brand) => brand.slug !== 'not-applicable' && brand.slug !== favoriteBrandSlug);

    // Sort the brands here if needed

    return (
        <div className="romario-brands-wrapper my-5">
            <h3 className='text-[24px] mb-5 text-black font-semibold'>Top Brands</h3>
            <div className="brand-grid grid grid-cols-5 gap-1">
                {/* Render the 'uhlsports' brand first */}
                {favoriteBrand && <BrandSingle key={favoriteBrand.slug} brand={favoriteBrand} />}
                
                {/* Render other brands */}
                {otherBrands?.map((brand) => (
                    <BrandSingle key={brand.slug} brand={brand} />
                ))}
            </div>
        </div>
    );
}
