import localFont from "next/font/local";
import ServiceSlider from "./servicesSlider";
import ReviewsSlider from "./reviewsServicesSlider";
import ServiceHappyClientsSlider from "./servicesHaapyClientsSlider";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const autogate = localFont({
    src: [
        {
            path: "../public/fonts/autogate-sans.ttf",
            weight: "700",
            style: "normal",
        },
    ],
})

interface ServicesProps {
    Service: string;
    id: number;
    icon: ReactNode
}

export default function Services() {

    const servicesList: ServicesProps[] = [
        {
            id: 1,
            Service: "Corte",
            icon: <Image src="/services/mustache1.svg" alt="Corte na Barbearia Carioca Camboriú" width={50} height={50} />
        },
        {
            id: 2,
            Service: "Barba",
            icon: <Image src="/services/mustache2.svg" alt="Barba na Barbearia Carioca Camboriú" width={50} height={50} />
        },
        {
            id: 3,
            Service: "Hidratação",
            icon: <Image src="/services/mustache1.svg" alt="Hidratação na Barbearia Carioca Camboriú" width={50} height={50} />
        },
        {
            id: 5,
            Service: "Máscara",
            icon: <Image src="/services/mustache1.svg" alt="Máscara na Barbearia Carioca Camboriú" width={50} height={50} />
        },
        {
            id: 6,
            Service: "Tonalizante",
            icon: <Image src="/services/mustache2.svg" alt="Luzes na Barbearia Carioca Camboriú" width={50} height={50} />
        },
        {
            id: 7,
            Service: "Relaxamento",
            icon: <Image src="/services/mustache1.svg" alt="Tintura na Barbearia Carioca Camboriú" width={50} height={50} />
        },
        {
            id: 8,
            Service: "Pezinho",
            icon: <Image src="/services/mustache2.svg" alt="Pezinho na Barbearia Carioca Camboriú" width={50} height={50} />
        },
        {
            id: 9,
            Service: "Sobrancelha",
            icon: <Image src="/services/mustache1.svg" alt="Sobrancelha na Barbearia Carioca Camboriú" width={50} height={50} />
        },
        {
            id: 10,
            Service: "Corte Infantil",
            icon: <Image src="/services/mustache1.svg" alt="Sobrancelha na Barbearia Carioca Camboriú" width={50} height={50} />
        },
        {
            id: 11,
            Service: "Corte feminino",
            icon: <Image src="/services/mustache1.svg" alt="Sobrancelha na Barbearia Carioca Camboriú" width={50} height={50} />
        },
        {
            id: 12,
            Service: "Depilação Orelha e Nariz",
            icon: <Image src="/services/mustache1.svg" alt="Sobrancelha na Barbearia Carioca Camboriú" width={50} height={50} />
        },
    ];

    return (
        <section className="bg-[#ece1cd] text-black">
            <div className="flex flex-col gap-8 max-w-6xl mx-auto w-5/6 py-32">
                <div className="flex flex-col lg:flex-row justify-start items-start gap-8 ">
                    <div className="flex flex-col gap-4 md:gap-8 w-full">
                        <h1 className={`${autogate.className} uppercase text-3xl md:text-5xl font-bold text-start max-w-lg`}>Nossos trabalhos</h1>
                        <p className="text-sm tracking-tight leading-5 text-start max-w-2xl">Na nossa barbearia, oferecemos serviços de alta qualidade em um ambiente acolhedor e descontraído. Seja um corte clássico, um moderno fade ou uma barba feita na navalha, nossos barbeiros talentosos estão aqui para garantir que você se sinta incrível e satisfeito com o resultado.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <ServiceSlider />
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row justify-start items-start gap-8  mt-32">
                    <iframe
                        className="w-[95%] max-w-60 h-[26.5rem] rounded-xl"
                        width="240"
                        height="320"
                        src="https://www.youtube.com/embed/JNXD8KEVaS4?si=wN83kXrzED8chLNz"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <div className="flex flex-col gap-8">
                        <h1 className={`${autogate.className} uppercase text-3xl md:text-5xl font-bold text-start max-w-lg`}>Cortes Femininos</h1>
                        <p className="text-sm tracking-tight leading-5 text-start max-w-2xl">
                            Na Barbearia Carioca, oferecemos cortes femininos com a mesma qualidade que aplicamos aos cortes masculinos.
                            <br />
                            <br />
                            É importante ressaltar que apenas o Carioca está especializado em cortes femininos.
                            <br />
                            <br />
                            Para garantir um atendimento personalizado e exclusivo com o Carioca, é essencial agendar seu horário com antecedência.
                            <br />
                            <br />
                            Entre em contato para marcar sua visita e descubra o estilo único que só o Carioca pode proporcionar.
                        </p>
                        <Link className="text-center flex w-full items-center justify-center gap-2 text-sm font-medium hover:scale-105 transition-all duration-300 bg-[#fab93b] text-black py-2 px-4 rounded-md"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                            href="https://api.whatsapp.com/send?phone=5547999055144"
                        >

                            Agende agora!
                        </Link>
                    </div>

                </div>


                <div className="flex flex-col w-full mt-16 lg:mt-32">
                    <p className={`${autogate.className} uppercase text-3xl md:text-5xl font-bold text-center w-full lg:text-start`}>Nossos Serviços</p>
                    <div className="flex flex-col lg:flex-row gap-4 w-full mt-8">
                        <div className="flex justify-center flex-wrap gap-4 w-full max-w-[43rem]">
                            {servicesList.map((serv) => (
                                <div key={serv.id} className="flex flex-col items-center bg-[#49403b] min-w-40 text-white w-full md:w-fit rounded-xl px-4 py-6">
                                    <div className="flex flex-col items-center justify-between">
                                        <div className="text-2xl text-[#fab93b]">
                                            {serv.icon}
                                        </div>
                                        <p className="uppercase font-medium tracking-tighter leading-6 text-xl text-center">{serv.Service}</p>
                                    </div>
                                </div>

                            ))}
                        </div>
                        <div className="flex flex-col justify-center items-center bg-[#fab93b] flex-1 rounded-xl px-8 py-4">
                            <Image src="/commom/logo-black.png" alt="Logo da Barbearia Carioca Camboriú" width={300} height={100} />
                            <p className="text-sm tracking-tight leading-5 text-start w-full mt-4 md:mt-8">Não deixe de agendar um horário para garantir o seu atendimento. Estamos prontos para oferecer o melhor serviço a você!</p>
                            <Link className="hover:scale-110 transition-all duration-300 mt-8 text-center flex items-center justify-center gap-2 text-sm font-medium bg-[#49403b] text-white py-2 px-4 rounded-md w-full"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                                href="https://api.whatsapp.com/send?phone=5547999055144"
                            >

                                Agende agora!
                            </Link>
                        </div>
                    </div>


                </div>
                <div className="flex flex-col justify-between mt-16 lg:mt-32">
                    <h1 className={`${autogate.className} uppercase text-3xl md:text-5xl font-bold text-start max-w-lg`}> Nossas Avaliações</h1>
                    <div className="flex flex-col gap-4 justify-between mt-8">
                        <div className="flex items-center justify-start bg-[#fab93b] px-8 py-6 rounded-xl">
                            <ReviewsSlider />
                        </div>
                        <div className="flex gap-4 w-full">
                            <div className="md:flex hidden items-center justify-center bg-[#fab93b] flex-1 px-2 rounded-xl ">
                                <Image src="/commom/logo-black.png" alt="Logo da Barbearia Carioca Camboriú" width={200} height={100} />
                            </div>
                            <ServiceHappyClientsSlider />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}