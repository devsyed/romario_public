
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';

interface TopbarProps {
    data: React.ReactNode[];
}

export default function Topbar({data} : TopbarProps){
    return (
        <div className="romario-topbar-wrapper bg-primary text-white align-center justify-center text-center py-2">
            <Swiper slidesPerView={1}>
                {data.map((slide,index) => (
                    <SwiperSlide key={index}>{slide}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}