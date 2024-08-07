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
            image: "/services/1.jpeg",
        },
        {
            id: 10,
            image: "/services/2.jpeg",
        },
        {
            id: 11,
            image: "/services/3.jpeg",
        },
        {
            id: 12,
            image: "/services/4.jpeg",
        },
        {
            id: 14,
            image: "/services/5.jpeg",
        },

        {
            id: 17,
            image: "/services/6.jpeg",
        },
        {
            id: 18,
            image: "/services/7.jpeg",
        },
        {
            id: 19,
            image: "/services/8.jpeg",
        },
        {
            id: 20,
            image: "/services/9.jpeg",
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
                650: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
             }}
            className="mySwiper"
        >
            {servicesList.map((serv) => (
                <Fragment key={serv.id}>
                    <SwiperSlide className="select-none">
                        <Image className="bg-white shadow-sm rounded-xl" src={serv.image} alt="Cortes de Clientes na Barbearia Carioca Camboriú" width={250} height={400} />
                    </SwiperSlide>
                </Fragment>
            ))}
        </Swiper>
    );
}