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

export default function ServiceHappyClientsSlider() {


    const servicesList: ServicesProps[] = [
        {
            id: 2,
            image: "/services/happyClients/1.jpeg",
        },
        {
            id: 10,
            image: "/services/happyClients/2.jpeg",
        },
        {
            id: 11,
            image: "/services/happyClients/3.jpeg",
        },
        {
            id: 14,
            image: "/services/happyClients/4.jpeg",
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
                960: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
             }}
        >
            {servicesList.map((serv) => (
                <Fragment key={serv.id}>
                    <SwiperSlide className="select-none">
                        <Image className="bg-white shadow-sm rounded-xl" src={serv.image} alt="Happy clients" width={250} height={400} />
                    </SwiperSlide>
                </Fragment>
            ))}
        </Swiper>
    );
}