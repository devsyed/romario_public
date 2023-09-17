import Container from "@components/ui/container"
import NotFoundItem from '@components/404/not-found-item';
import isEmpty from 'lodash/isEmpty';
import BrandsData from '../romario/data/BrandsData';
import { useBrands } from '@framework/brands';
import { useTranslation } from 'next-i18next';
import BrandSingle from "./BrandSingle";

export default function Brands({}){
    const { data: brands, isLoading: loading, error} = useBrands({ limit: 9 });
    return (
        <div className="romario-brands-wrapper my-5">
                <h3 className='text-[24px] mb-5 text-black font-semibold'>Top Brands</h3>
                <div className="brand-grid grid grid-cols-5 gap-1">
                    {brands?.data?.map(brand => {
                        if(brand.slug !== 'uncategorized'){
                            return (<BrandSingle brand={brand}/>)
                        }
                    })}
                </div>
        </div>
    )
}