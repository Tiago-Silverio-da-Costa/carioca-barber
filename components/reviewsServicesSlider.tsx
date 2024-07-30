"use client";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "@/styles/swiper.css";
import { Fragment } from "react";


interface ServicesProps {
    text: string;
    clientName: string;
    id: number;
}

export default function ReviewsSlider() {


    const servicesList: ServicesProps[] = [
        {
            id: 1,
            text: "Recepção foi incrível, lugar muito divertido para cortar o cabelo e passar um tempo conversando",
            clientName: "Enzo Quadros"
        },
        {
            id: 2,
            text: "Barbearia muito boa, com profissionais capacitados. O valor está na média das demais.",
            clientName: "Bruno Passos"
        },
        {
            id: 3,
            text: "Profissionais de alta qualidade e resultado incrível em cada corte de cabelo e barba. Recomendação sem erro!",
            clientName: "Henrique de Cól"
        },
        {
            id: 4,
            text: "Melhor de Camboriú. Ótimos profissionais, ambiente de qualidade e serviços excelentes.",
            clientName: "Douglas Rigueira"
        }
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            keyboard={true}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false,
            }}
        >
            {servicesList.map((serv) => (
                <Fragment key={serv.id}>
                    <SwiperSlide className="select-none">
                        <p className="text-xl tracking-tight text-start text-balck w-full">&quot;{serv.text}&quot;</p>
                        <span className="text-start w-full mt-8 font-bold">{serv.clientName}</span>
                    </SwiperSlide>
                </Fragment>
            ))}
        </Swiper>
    );
}