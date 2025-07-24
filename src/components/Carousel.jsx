import React from 'react'
import { carouselImage } from '../constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const Carousel = () => {
    return (
        <div className='w-full h-[700px] mt-10'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={5}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="h-1/2 w-1/3"
                effect='fade'
            >
                {
                    carouselImage.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img} alt="" className='w-full h-full rounded-2xl' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Carousel
