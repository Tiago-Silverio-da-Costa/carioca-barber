"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { ImMenu } from "react-icons/im";
import { useState } from "react";

export default function Header() {

    const [openPopup, setOpenPopup] = useState(false);
    const pathname = usePathname();

    return (
        <header className="flex  items-center justify-between max-w-6xl mx-auto w-5/6 py-8">
            {/* logo */}
            <h1>Barbearia Carioca</h1>
            {/* links */}
            <nav className="items-center gap-4 border border-white hidden md:flex rounded-md">
                <ul className="group">
                    <li className="flex flex-col items-center">
                        <Link className={`${pathname === "/" ? "bg-white text-black" : "text-white"} font-bold rounded-[3px] m-[2px] px-4 py-2 text-sm text-black transition-all duration-300`} href="/">Ínicio</Link>
                    </li>
                </ul>
                <ul className="group">
                    <li className="flex flex-col items-center">
                        <Link className={`${pathname === "/servicos" ? "bg-white text-black" : "text-white"} font-bold rounded-[3px] m-[2px] px-4 py-2 text-sm text-black transition-all duration-300`} href="/servicos">Serviços</Link>
                    </li>
                </ul>
                <ul className="group">
                    <li className="flex flex-col items-center">
                        <Link className={`${pathname === "/sobre" ? "bg-white text-black" : "text-white"} font-bold rounded-[3px] m-[2px] px-4 py-2 text-sm text-black transition-all duration-300`} href="/sobre">Sobre</Link>
                    </li>
                </ul>
                <ul className="group">
                    <li className="flex flex-col items-center">
                        <Link className={`${pathname === "/barbeiros" ? "bg-white text-black" : "text-white"} font-bold rounded-[3px] m-[2px] px-4 py-2 text-sm text-black transition-all duration-300`} href="/barbeiros">Barbeiros</Link>
                    </li>
                </ul>
            </nav>
            {/* contact */}
            <Link className="hidden md:flex items-center gap-2 text-sm font-medium bg-white text-black py-2 px-4 rounded-md w-fit"
                target="_blank"
                rel="noreferrer"
                aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                href="https://api.whatsapp.com/send?phone=number"
            >

                Contato
            </Link>

            {/* mobile */}

            <button
                aria-label="Menu"
                type="button"
                className="md:hidden text-defaultText text-2xl"
                onClick={() => setOpenPopup(!openPopup)}
            >
                <ImMenu />
            </button>

            {
                openPopup && (
                    <nav className="md:hidden fixed top-0 left-0 w-full h-full bg-black z-50 flex flex-col items-center justify-center">
                        <button
                            aria-label="close menu"
                            type="button"
                            className="absolute top-4 right-4 text-textOpacity px-4 py-2 font-bold text-lg hover:text-defaultText cursor-pointer"
                            onClick={() => setOpenPopup(false)}
                        >
                            <IoMdClose />
                        </button>
                        <ul className="flex flex-col gap-4 mt-8">
                            <h1>Barbearia Carioca</h1>
                            <li className="flex gap-2 items-center justify-center mt-4">
                                <Link onClick={() => setOpenPopup(false)} className={`${pathname === "/" ? "bg-white text-black" : "text-white"} font-bold text-center rounded-[3px] m-[2px] px-4 py-2 uppercase text-lg text-textTitle transition-all duration-300`} href="/">Ínicio</Link>
                            </li>
                            <li className="flex gap-2 items-center justify-center">
                                <Link onClick={() => setOpenPopup(false)} className={`${pathname === "/servicos" ? "bg-white text-black" : "text-white"} font-bold text-center rounded-[3px] m-[2px] px-4 py-2 uppercase text-lg text-textTitle transition-all duration-300`} href="/servicos">Serviços</Link>
                            </li>
                            <li className="flex gap-2 items-center justify-center">
                                <Link onClick={() => setOpenPopup(false)} className={`${pathname === "/#sobre" ? "bg-white text-black" : "text-white"} font-bold text-center rounded-[3px] m-[2px] px-4 py-2 uppercase text-lg text-textTitle transition-all duration-300`} href="/#sobre">Sobre</Link>
                            </li>
                            <li className="flex gap-2 items-center justify-center">
                                <Link onClick={() => setOpenPopup(false)} className={`${pathname === "/#barbeiros" ? "bg-white text-black" : "text-white"} font-bold text-center rounded-[3px] m-[2px] px-4 py-2 uppercase text-lg text-textTitle transition-all duration-300`} href="/#barbeiros">Barbeiros</Link>
                            </li>
                        </ul>
                    </nav>
                )
            }
        </header>
    )
}