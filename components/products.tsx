import Link from "next/link";
import ProductsSlider from "./produtctsSilder";
import localFont from "next/font/local";

const autogate = localFont({
    src: [
        {
            path: "../public/fonts/autogate-sans.ttf",
            weight: "700",
            style: "normal",
        },
    ],
})

export default function Products() {

    return (
        <section className="bg-black">
            <div className="flex flex-col gap-4 max-w-6xl mx-auto w-5/6 py-16">
                <h1 className={`${autogate.className} uppercase text-3xl md:text-5xl font-bold text-start max-w-lg`}>Nossos Produtos</h1>
                <div className="flex flex-col-reverse md:flex-row md:items-center gap-4">
                    <ProductsSlider />
                    <div className="flex flex-col gap-4">
                        <p className="text-sm tracking-tight leading-5 text-start max-w-xs">Na Barbearia Carioca, levamos o cuidado com a sua aparência a sério. Oferecemos uma linha completa de produtos de alta qualidade, especialmente selecionados para proporcionar uma experiência única e personalizada</p>
                        <Link className="text-center flex w-full items-center justify-center gap-2 text-sm font-medium hover:scale-105 transition-all duration-300 bg-[#fab93b] text-black py-2 px-4 rounded-md"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
                            href="https://api.whatsapp.com/send?phone=5547999055144"
                        >
                            Compre agora!
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}