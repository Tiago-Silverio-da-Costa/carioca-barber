"use client";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "@/styles/swiperText.css";
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
            text: "Melhor barbearia de todas!! Profissionais altamente capacitados.Trabalham com amor! Corto meu cabelo com o carioca a 20 anos",
            clientName: "Xuxa vieira"
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
            className="mySwiper"
        >
            {servicesList.map((serv) => (
                <Fragment key={serv.id}>
                    <SwiperSlide className="select-none">
                        <p className="text-2xl tracking-tight max-w-96 text-start text-balck">&quot;{serv.text}&quot;</p>
                        <span className="text-start w-full mt-8">{serv.clientName}</span>
                    </SwiperSlide>
                </Fragment>
            ))}
        </Swiper>
    );
}