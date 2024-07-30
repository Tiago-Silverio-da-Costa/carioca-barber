import { JobImage } from "@/styles/barber";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const autogate = localFont({
    src: [
        {
            path: "../public/fonts/autogate-sans.ttf",
            weight: "700",
            style: "normal",
        },
    ],
})

export default function Barbers() {

    return (
        <section className="bg-white text-black">
            <div className="flex flex-col items-center max-w-6xl mx-auto w-5/6 py-32">
                <h1 className={`${autogate.className} uppercase text-3xl md:text-5xl font-bold text-end max-w-lg`}>Barbeiros</h1>
                <p className="text-sm tracking-tight leading-5 text-center max-w-2xl mt-8">Cada membro da nossa equipe está comprometido em proporcionar uma experiência excepcional, garantindo que você saia da nossa barbearia parecendo e se sentindo o melhor possível.</p>
                <div className="flex flex-wrap gap-4 mt-16 ">
                    <div className="flex flex-col justify-between rounded-xl gap-8 bg-[#f0ede8] pb-0 p-8">
                        <div className="flex items-start justify-between gap-8">
                            <div className="flex flex-col bg-white px-4 py-2 rounded-lg">
                                <p className="text-lg font-medium tracking-tight leading-5">João Felipe</p>
                                <span className="text-[#a3a3a4] font-medium text-sm tracking-tight leading-5">Barbeiro</span>
                            </div>

                            <div className="flex flex-col gap-2 text-[#a3a3a4]">
                                <Link className="flex items-center gap-6 text-[#b1b1b1] text-2xl"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                                    href="https://www.instagram.com/barbearia.carioca/"
                                >
                                    <FaInstagram />

                                </Link>
                            </div>
                        </div>
                        <Image src="/barbers/1.png" alt="" width={200} height={200} />
                    </div>

                    <div className="flex flex-col justify-between rounded-xl gap-8 bg-[#f0ede8] pb-0 p-8">
                        <div className="flex items-start justify-between gap-8">
                            <div className="flex flex-col bg-white px-4 py-2 rounded-lg">
                                <p className="text-lg font-medium tracking-tight leading-5">Lucas Nunes</p>
                                <span className="text-[#a3a3a4] font-medium text-sm tracking-tight leading-5">Barbeiro</span>
                            </div>

                            <div className="flex flex-col gap-2 text-[#a3a3a4]">
                                <Link className="flex items-center gap-6 text-[#b1b1b1] text-2xl"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                                    href="https://www.instagram.com/barbearia.carioca/"
                                >
                                    <FaInstagram />

                                </Link>
                            </div>
                        </div>
                        <Image src="/barbers/2.png" alt="" width={200} height={200} />
                    </div>

                    <div className="flex flex-col justify-between rounded-xl gap-8 bg-[#f0ede8] pb-0 p-8">
                        <div className="flex items-start justify-between gap-8">
                            <div className="flex flex-col bg-white px-4 py-2 rounded-lg">
                                <p className="text-lg font-medium tracking-tight leading-5">Vitor Almeida</p>
                                <span className="text-[#a3a3a4] font-medium text-sm tracking-tight leading-5">Barbeiro</span>
                            </div>

                            <div className="flex flex-col gap-2 text-[#a3a3a4]">
                                <Link className="flex items-center gap-6 text-[#b1b1b1] text-2xl"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                                    href="https://www.instagram.com/barbearia.carioca/"
                                >
                                    <FaInstagram />

                                </Link>
                            </div>
                        </div>
                        <Image src="/barbers/3.png" alt="" width={200} height={200} />
                    </div>

                    <JobImage $bg="/barbers/job.jpg">
                        <div className="flex flex-col gap-4 bg-white p-4 rounded-xl mb-8">
                            <p className="text-lg font-medium tracking-tight leading-5 max-w-40 text-center">
                                Gostaria de entrar no nosso time?
                            </p>
                            <Link className="text-center flex w-full items-center justify-center gap-2 text-sm font-medium bg-[#fda85b] text-black py-2 px-4 rounded-md"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                                href="https://api.whatsapp.com/send?phone=5547999055144"
                            >

                                Mande currículo
                            </Link>
                        </div>
                    </JobImage>

                </div>
            </div>
        </section>
    )
}