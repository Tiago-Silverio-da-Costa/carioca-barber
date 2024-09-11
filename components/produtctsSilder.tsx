"use client";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "@/styles/swiper.css";
import Image from "next/image";
import { Fragment } from "react";


interface ProductsProps {
    image: string;
    id: number;
}

export default function ProductsSlider() {

    const prodList: ProductsProps[] = [

        {
            id: 5,
            image: "/products/1.jpeg",
        },
        {
            id: 6,
            image: "/products/2.jpeg",
        },
        {
            id: 7,
            image: "/products/3.jpeg",
        },
        {
            id: 8,
            image: "/products/4.jpeg",
        },
        {
            id: 9,
            image: "/products/5.jpeg",
        },
        {
            id: 2,
            image: "/products/6.jpeg",
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
            {prodList.map((prod) => (
                <Fragment key={prod.id}>
                    <SwiperSlide className="select-none">
                        <Image className="bg-white shadow-sm rounded-xl" src={prod.image} alt="Produtos para o cuidado do cabelo e barba na Barbearia Carioca Camboriú" width={250} height={400} />
                    </SwiperSlide>
                </Fragment>
            ))}
        </Swiper>
    );
}