
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';
import CategorySingle from './CategorySingle';
import { useCategories } from '@framework/categories';
interface CategoriesProps{
    categories:CategoryObject[],
}

interface CategoryObject{
    id:number,
    image: string,
    label:string,
    link: string,
}

export default function CategoriesSlider({categories} : CategoriesProps){
    const {data: newCategories} = useCategories({limit: 8});
    return (
        <div className="romario-categories-slider mt-[50px] mb-[50px]">
            <h3 className='text-[24px] mb-5 text-black font-semibold'>Shop By Category</h3>
            <Swiper
                 slidesPerView={6}
                 spaceBetween={50}
            >
                {newCategories?.data?.map((category: CategoryObject, index) => (
                    <SwiperSlide key={index}>
                        <CategorySingle category={category}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}