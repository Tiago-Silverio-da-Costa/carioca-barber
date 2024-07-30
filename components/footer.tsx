import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white text-black border-t border-t-[#a3a3a4]">
            <div className="max-w-6xl mx-auto w-5/6 pt-20">
                <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
                    <div className="flex flex-col items-start gap-4">
                        <p className="text-xl uppercase font-bold">Barbearia Carioca</p>
                        <div className="flex flex-col text-[#b1b1b1] text-xs">
                            <span className="">Praça da Bíblia - Centro, Camboriú - SC</span>
                            <span>(47) 3050-0785</span>
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
                        <Link className="mt-8 text-center flex w-fit items-center justify-center gap-2 text-sm font-medium bg-[#fda85b] text-black py-2 px-4 rounded-md"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                            href="https://api.whatsapp.com/send?phone=number"
                        >

                            Agende agora!
                        </Link>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row  justify-center items-center md:justify-between gap-4 pb-8 pt-16">

                    <Link className="flex items-center gap-6 text-[#b1b1b1] text-2xl"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                        href="https://www.instagram.com/barbearia.carioca/"
                    >
                        <FaInstagram />

                    </Link>

                    <div className="flex items-center gap-2">

                        <p className="text-sm ">© BARBERIA CARIOCA. Todos direitos reservados |</p>
                        <Link className="text-center flex w-fit items-center justify-center gap-2 text-sm font-medium text-black/50 rounded-md"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                            href="https://www.tiagosc.com.br/"
                        >
                            Tiago Silverio Programador
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}