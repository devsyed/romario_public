'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';

interface SliderProps{
    height: number,
    className: string
    sliderData: SliderData[]
}

interface SliderData{
    backgroundImage: string,
    content: React.ReactNode
}

export default function Slider({height,sliderData} : SliderProps){
    return (
        <div className="romario-slider-main" style={{height: height}}>
            <Swiper className='h-full'
                
            >
                {sliderData.map((slide : SliderData, index) => (
                    <SwiperSlide>
                        <div className="slide-single h-full" style={{backgroundImage:`url(${slide.backgroundImage})`}}>{slide.content}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}