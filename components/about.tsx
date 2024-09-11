import localFont from "next/font/local";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiMapPinFill } from "react-icons/pi";
import Products from "./products";

const autogate = localFont({
    src: [
        {
            path: "../public/fonts/autogate-sans.ttf",
            weight: "700",
            style: "normal",
        },
    ],
})

export default function About() {

    return (
        <div className="flex flex-col">

            <section className="bg-[#49403b]">
                <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto w-5/6 py-32 gap-16">
                    <div className="flex flex-col gap-8">
                        <h1 className={`${autogate.className} uppercase text-3xl md:text-5xl font-bold text-start max-w-lg`}>Serviço além da expectativa</h1>
                        <p className="text-sm tracking-tight leading-5 text-start max-w-96">
                            A melhor barbearia de Camboriú, localizada no centro, em frente à Praça da Bíblia
                            <br />
                            <br />
                            Desde 1993, somos um espaço dedicado a quem valoriza qualidade e um visual impecável. Ao longo dos anos, passamos por várias mudanças para nos atualizar e oferecer o melhor atendimento.
                            <br />
                            <br />
                            Estamos localizados em Camboriú, em frente à Praça da Bíblia. Venha nos visitar, aproveite para tomar um café, beber aquela geladinha ou apenas conversar em nosso ambiente aconchegante.
                        </p>
                        <Link className="hover:scale-110 transition-all duration-300 mt-8 text-center flex w-full items-center justify-center gap-2 text-sm font-medium bg-[#fab93b] text-black py-2 px-4 rounded-md"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                            href="https://api.whatsapp.com/send?phone=5547999055144"
                        >

                            Agende agora!
                        </Link>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.3241848914063!2d-48.651832399999996!3d-27.019920199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b5cf0f64217b%3A0xb26d7742e35622ab!2sBarbearia%20Carioca!5e0!3m2!1sen!2sbr!4v1722269922439!5m2!1sen!2sbr" width="600" height="450" className="border-none rounded-md max-w-sm mx-auto w-[95%]" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-start gap-6">
                            <div className="bg-white rounded-md text-black">
                                <PiMapPinFill className="w-8 h-8 m-4" />
                            </div>

                            <div className="flex flex-col gap-4 items-start">
                                <p className={`${autogate.className} uppercase text-2xl font-bold text-start max-w-lg`}>Localização</p>
                                <span className="text-sm tracking-tight leading-5 text-start max-w-96">Praça da Bíblia - Centro, Camboriú - SC, 88340-000</span>
                            </div>
                        </div>
                        {/* line decorator */}
                        <div className="w-full bg-white/20 h-[1px]"></div>
                        <div className="flex items-start gap-6">
                            <div className="bg-white rounded-md text-black">
                                <IoLogoWhatsapp className="w-8 h-8 m-4" />
                            </div>

                            <div className="flex flex-col gap-4 items-start">
                                <p className={`${autogate.className} uppercase text-2xl font-bold text-start max-w-lg`}>(47) 9 9905-5144</p>
                                <div className="flex flex-col">
                                    <span className="text-sm tracking-tight leading-5 text-start max-w-96">Segunda-Sexta: 8:00 - 12:00 e 13:30 - 19:00</span>
                                    <span className="text-sm tracking-tight leading-5 text-start max-w-96">Sábado: 8:00 - 12:00 e 13:30 - 17:00</span>
                                    <span className="text-sm tracking-tight leading-5 text-start max-w-96">Domingo: FECHADO</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Products />
        </div>

    )
}