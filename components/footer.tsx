import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";

export default function Footer() {
    return (
        <footer className="bg-[#121a1d] text-white border-t border-t-[#a3a3a4]">
            <div className="max-w-6xl mx-auto w-5/6 pt-20">
                <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
                    <div className="flex flex-col items-start gap-4">
                        <Image src="/commom/logo.svg" alt="" width={200} height={200} />
                        <div className="flex flex-col gap-2 text-[#b1b1b1] text-xs">
                            <span className="">Praça da Bíblia - Centro, Camboriú - SC</span>
                            <div className="flex gap-2 items-center">
                                <FaWhatsapp className="text-[#fab93b] text-lg" />
                                <span>(47) 9 9905-5144</span>
                            </div>
                            <div className="flex gap-2 items-center">

                                <Link className="flex items-center gap-6 text-[#fab93b] text-lg"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                                    href="https://www.facebook.com/salaocarioca/?locale=pt_BR"
                                >
                                    <FaFacebookF />

                                </Link>
                                <Link className="flex items-center gap-6 text-[#fab93b] text-lg"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                                    href="https://www.instagram.com/barbearia.carioca/"
                                >
                                    <FaInstagram />

                                </Link>
                                <Link className="flex items-center gap-6 text-[#fab93b] text-lg"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                                    href="https://maps.app.goo.gl/drwayaTbjmTVjjJA9"
                                >
                                    <PiMapPinFill />

                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start sm:items-center gap-4">
                        <p className="text-xl uppercase font-bold">Menu</p>
                        <div className="flex flex-col text-[#b1b1b1] text-xs">
                            <Link className={`rounded-[3px] m-[2px] text-sm transition-all duration-300`} href="/">Ínicio</Link>
                            <Link className={`rounded-[3px] m-[2px] text-sm transition-all duration-300`} href="/servicos">Serviços</Link>
                            <Link className={`rounded-[3px] m-[2px] text-sm transition-all duration-300`} href="/sobre">Sobre</Link>
                            <Link className={`rounded-[3px] m-[2px] text-sm transition-all duration-300`} href="/barbeiros">Barbeiros</Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <p className="text-xl uppercase font-bold">Horários</p>
                        <div className="flex flex-col text-[#b1b1b1] text-xs">
                            <span className="text-sm tracking-tight leading-5 text-start max-w-96">Segunda-Sexta: 8:00 - 20:00</span>
                            <span className="text-sm tracking-tight leading-5 text-start max-w-96">Sábado: 8:00 - 17:00</span>
                            <span className="text-sm tracking-tight leading-5 text-start max-w-96">Domingo: FECHADO</span>
                        </div>
                        <Link className="mt-8 text-center flex w-fit items-center justify-center gap-2 text-sm font-medium bg-[#fab93b] text-black py-2 px-4 rounded-md"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                            href="https://api.whatsapp.com/send?phone=5547999055144"
                        >

                            Agende agora!
                        </Link>
                    </div>
                </div>





                <div className="flex flex-col md:flex-row justify-between items-center gap-2 py-8">

                    <p className="text-sm text-center">© BARBEARIA CARIOCA. Todos direitos reservados</p>
                    <Link className="text-center flex w-fit items-center justify-center gap-2 text-sm font-medium text-[#b1b1b1] rounded-md"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                        href="https://www.tiagosc.com.br/"
                    >
                        Desenvolvido por Tiago Silverio Programador
                    </Link>
                </div>
            </div>
        </footer>
    )
}