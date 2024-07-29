"use client";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "@/styles/swiper.css";
import Image from "next/image";
import { Fragment } from "react";


interface ServicesProps {
    image: string;
    id: number;
}

export default function ServiceSlider() {


    const servicesList: ServicesProps[] = [
        {
            id: 2,
            image: "/services/2.webp",
        },
        {
            id: 10,
            image: "/services/10.webp",
        },
        {
            id: 11,
            image: "/services/11.webp",
        },
        {
            id: 12,
            image: "/services/12.webp",
        },
        {
            id: 14,
            image: "/services/14.webp",
        },

        {
            id: 17,
            image: "/services/17.webp",
        }
        ,
        {
            id: 18,
            image: "/services/18.webp",
        }
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            loop={true}
            keyboard={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                1000: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
             }}
            className="mySwiper"
        >
            {servicesList.map((serv) => (
                <Fragment key={serv.id}>
                    <SwiperSlide className="select-none">
                        <Image className="bg-white shadow-sm rounded-xl" src={serv.image} alt="haircuts" width={250} height={400} />
                    </SwiperSlide>
                </Fragment>
            ))}
        </Swiper>
    );
}