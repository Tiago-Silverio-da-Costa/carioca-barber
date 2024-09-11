"use client";

import { Section, TextDecorator } from "@/styles/home";
import Header from "./header";
import Link from "next/link";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";

const autogate = localFont({
    src: [
        {
            path: "../public/fonts/autogate-sans.ttf",
            weight: "700",
            style: "normal",
        },
    ],
})

export default function Home() {

    const pathname = usePathname();

    return (
        <Section $bg="/home/home2.jpeg">
            {pathname === "/" && (
                <Header />
            )}
            <div className="relative flex flex-col py-16">
                <div className="flex w-full opacity-0 md:opacity-100">
                    <div className="max-w-6xl mx-auto w-5/6">
                        <TextDecorator>
                            <p className="text-3xl tracking-tight leading-5">Marque um horário</p>
                            <p className="text-sm tracking-tight leading-5 text-start max-w-72 mt-8">Não deixe de agendar um horário para garantir o seu atendimento. Estamos prontos para oferecer o melhor serviço a você!</p>
                            <Link className="mt-8 text-center flex w-full items-center justify-center gap-2 text-sm font-medium hover:scale-110 transition-all duration-300 bg-[#fab93b] text-black py-2 px-4 rounded-md"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                                href="https://api.whatsapp.com/send?phone=5547999055144"
                            >

                                Agende agora!
                            </Link>
                        </TextDecorator>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto w-5/6 py-8">
                    <div className="relative z-50 flex flex-col gap-8 md:flex-row justify-between items-end">
                        <p className="text-sm tracking-tight leading-5 text-start max-w-96">Nossa missão é oferecer um serviço excepcional em um ambiente acolhedor e descontraído. Seja você um fã de um corte clássico, um moderno fade ou uma barba feita na navalha, nossos talentosos barbeiros estão dedicados a fazer você se sentir incrível.</p>
                        <h1 className={`${autogate.className} uppercase text-3xl md:text-5xl font-bold text-end max-w-lg`}>Onde <strong className="bg-[#fab93b] px-2 text-black">Tradição</strong> se encontra com a <strong className="text-black bg-[#fab93b] px-2">modernidade.</strong></h1>
                    </div>
                </div>
            </div>

        </Section>
    )
}