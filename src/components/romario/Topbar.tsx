
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';
import { useSettings } from '@framework/settings';
import { siteSettings } from '@settings/site.settings';

interface TopbarProps {
    data: React.ReactNode[];
}

export default function Topbar({data} : TopbarProps){
    const {data:siteSettings} = useSettings();
    return (
        
        <div className="romario-topbar-wrapper bg-primary text-white align-center justify-center text-center py-2">
            <Swiper slidesPerView={1}>
                {data.map((slide,index) => (
                    <SwiperSlide key={index}>{siteSettings?.options?.announcementBarText}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}