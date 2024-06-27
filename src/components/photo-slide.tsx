'use client';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from 'swiper/modules';
import Image from "next/image";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function PhotoSlide() {
    return(
        <div className="flex items-center w-full border-2 border-black p-3">
            <Swiper slidesPerView={1} spaceBetween={30} loop={true} autoplay={{delay: 3000,disableOnInteraction: false}} pagination={{clickable: true}} modules={[Pagination, Autoplay]} className="mySwiper">
            <SwiperSlide>
                <Image src={"/food-1.jpg"} alt={"food-header"}
                width={1920}
                height={1080}
                className="w-full h-full"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={"/food-2.webp"} alt={"food-header"}
                    width={1920}
                    height={1080}
                    className="w-full h-full"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={"/food-3.jpg"} alt={"food-header"}
                    width={1920}
                    height={1080}
                    className="w-full h-full"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={"/food-4.jpg"} alt={"food-header"}
                    width={1920}
                    height={1080}
                    className="w-full h-full"
                />
            </SwiperSlide>
            </Swiper>
        </div>
    )
}