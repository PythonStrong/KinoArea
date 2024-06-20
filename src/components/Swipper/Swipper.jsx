import React, {} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import './Swipper.css'
import { Typography } from 'antd';
import { forsaj } from '../../assets';

export default function Swipper() {
    return (
        <div className='swipper'>
            <div className="title">
                <Typography className='text'>Trailer</Typography>
            </div>

            <div className="swip">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={forsaj} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={forsaj} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={forsaj} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={forsaj} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
