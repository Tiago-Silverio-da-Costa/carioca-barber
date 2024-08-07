"use client";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "@/styles/swiper.css";
import { Fragment } from "react";
import Image from "next/image";


interface ServicesProps {
    text: string;
    clientName: string;
    clientImage: string;
    id: number;
}

export default function ReviewsSlider() {


    const servicesList: ServicesProps[] = [
        {
            id: 1,
            text: "Recepção foi incrível, lugar muito divertido para cortar o cabelo e passar um tempo conversando",
            clientName: "Enzo Quadros",
            clientImage: "https://lh3.googleusercontent.com/a-/ALV-UjWU7YCpYAceRFs6ldE7c1JWvAnHOxW0oxxHlrIKpkkrhXcPYZ1lgw=w45-h45-p-rp-mo-ba2-br100"
        },
        {
            id: 2,
            text: "Barbearia muito boa, com profissionais capacitados. O valor está na média das demais.",
            clientName: "Bruno Passos",
            clientImage: "https://lh3.googleusercontent.com/a-/ALV-UjViHj65vbSmeS4mBFsNCnQG-faDVjcy_AeghGjEapTY0u24UsQ=w45-h45-p-rp-mo-ba3-br100"
        },
        {
            id: 3,
            text: "Profissionais de alta qualidade e resultado incrível em cada corte de cabelo e barba. Recomendação sem erro!",
            clientName: "Henrique de Cól",
            clientImage: "https://lh3.googleusercontent.com/a/ACg8ocL5d_KuDW_y8k6grThCw3JMajhgS4gdxYCgFYDQ0Dt1Kvxp=w45-h45-p-rp-mo-br100"
        },
        {
            id: 4,
            text: "Melhor de Camboriú. Ótimos profissionais, ambiente de qualidade e serviços excelentes.",
            clientName: "Douglas Rigueira",
            clientImage: "https://lh3.googleusercontent.com/a-/ALV-UjX8eW0m-7O7IN5gT9tKyFNGvK1HDYWmij0gXuDMQSIAVmcb9SFoyA=w45-h45-p-rp-mo-br100"
        },
        {
            id: 5,
            text: "Top de mais, 15 anos cortando com eles e está cada vez melhor.",
            clientName: "Nathan da Silva",
            clientImage: "https://lh3.googleusercontent.com/a-/ALV-UjWGbIB7NW58z7eB9SiRYIdHt7ONfYzslzVLJJ4GZkwhXIc8uoIK=w45-h45-p-rp-mo-br100"
        },
        {
            id: 6,
            text: "Atendimento show de bola, o pessoal super receptivo, preço dentro do que pede. Vale muito apena ieri voltar outras vezes com certeza.",
            clientName: "Carlos Alberto",
            clientImage: "https://lh3.googleusercontent.com/a-/ALV-UjVfx5cRuEuI1lYTHHgT5N3DPyNGtF_vxkvjXRD8rt8AuSfGL09n=w45-h45-p-rp-mo-ba4-br100"
        },
        {
            id: 7,
            text: "Esses caras são demais! 4 anos que frequento e se não tiver horário, eu espero mais uma semana só para estar lá.  Sem nomes nem escolhas. . . Mas cada cliente tem a sua afinidade e sua necessidade.",
            clientName: "João de Castro",
            clientImage: "https://lh3.googleusercontent.com/a-/ALV-UjUw3A9A7LIWySw9rAx5xvqwsWhJMRmL21BaiGk6CvYOV_pc5LLgwQ=w45-h45-p-rp-mo-ba2-br100"
        },
        {
            id: 8,
            text: "Simplesmente top. Excelente desde o atendimento até a qualidade no serviço. Nota 1000.",
            clientName: "Alan Tegner Moreira",
            clientImage: "https://lh3.googleusercontent.com/a/ACg8ocK2R6-9zvcGEIh2ZAKUkQaDaij0PjFj9FSaogu_A_ZPpMKXryxg=w45-h45-p-rp-mo-ba4-br100"
        },
        {
            id: 9,
            text: "A melhor barbearia de Camboriú e região. Carioca, o dono, é um excelente profissional e pessoa, sempre com muitos assuntos para conversar. E toda a sua equipe, também, é ótima!",
            clientName: "João Capistrano",
            clientImage: "https://lh3.googleusercontent.com/a-/ALV-UjXqRmf45glJPfHnPSjXYzfndkVfJ5pXIwUuUgwItuZaH_-G__2n=w45-h45-p-rp-mo-br100"
        },
        {
            id: 10,
            text: "Excelente atendimento. Ambiente confortável e ótimos profissionais. Lugar top e de respeito para com o cliente.",
            clientName: "Layon Cardim",
            clientImage: "https://lh3.googleusercontent.com/a/ACg8ocKSGJ0zHjTmfcgA_RIN7A5aSvpYCdYczoG9tEuLo2d8fVpJbQ=w45-h45-p-rp-mo-br100"
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
                        <div className="flex items-center gap-4">
                            <Image src={serv.clientImage} alt="Clientes Satifeitos da Barbearia Carioca Camboriú" width={35} height={50} />
                            <p className="text-sm tracking-tight text-start text-balck w-full">{serv.clientName}</p>
                        </div>
                        <div className="flex items-center gap-1 mt-2">
                            <Image src="/services/star.svg" alt="Nota máxima para a Barbearia Carioca Camboriú" width={25} height={50} />
                            <Image src="/services/star.svg" alt="Nota máxima para a Barbearia Carioca Camboriú" width={25} height={50} />
                            <Image src="/services/star.svg" alt="Nota máxima para a Barbearia Carioca Camboriú" width={25} height={50} />
                            <Image src="/services/star.svg" alt="Nota máxima para a Barbearia Carioca Camboriú" width={25} height={50} />
                            <Image src="/services/star.svg" alt="Nota máxima para a Barbearia Carioca Camboriú" width={25} height={50} />
                        </div>
                        <p className="text-xl tracking-tight text-start text-balck w-full mt-8">&quot;{serv.text}&quot;</p>
                    </SwiperSlide>
                </Fragment>
            ))}
        </Swiper>
    );
}