import localFont from "next/font/local";
import ServiceSlider from "./servicesSlider";
import ReviewsSlider from "./reviewsServicesSlider";

const autogate = localFont({
    src: [
        {
            path: "../public/fonts/autogate-sans.ttf",
            weight: "700",
            style: "normal",
        },
    ],
})

export default function Services() {
    return (
        <section className="bg-[#ece1cd] text-black">
            <div className="flex flex-col gap-8 max-w-6xl mx-auto w-5/6 py-32">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-32">
                    <div className="flex flex-col gap-4 md:gap-8 w-fit">
                        <h1 className={`${autogate.className} uppercase text-3xl md:text-5xl font-bold text-start max-w-lg`}>Nossos trabalhos</h1>
                        <p className="text-sm tracking-tight leading-5 text-start max-w-2xl">Nossa missão é oferecer um serviço excepcional em um ambiente acolhedor e descontraído. Seja você um fã de um corte clássico, um moderno fade ou uma barba feita na navalha, nossos talentosos barbeiros estão dedicados a fazer você se sentir incrível.</p>
                    </div>

                    <div className="w-5/6">
                        <ServiceSlider />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 justify-between mt-32">
                    <div className="flex items-center justify-center bg-[#fda85b] p-8 rounded-xl w-full md:w-2/5">
                        <ReviewsSlider />
                    </div>
                    <div className="flex flex-col max-w-xl w-full">
                        <p className={`${autogate.className} uppercase text-3xl md:text-5xl font-bold text-start max-w-lg`}>Nossos Preços</p>
                        <div className="flex flex-col gap-4">
                            <div className="mt-8 flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <p className="uppercase font-light tracking-tighter leading-6 text-xl">Corte</p>
                                    <span className="uppercase font-light tracking-tighter leading-6 text-xl">R$40</span>
                                </div>
                            </div>
                            <div className="w-full bg-black/20 h-[1px]"></div>
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <p className="uppercase font-light tracking-tighter leading-6 text-xl">Navalha</p>
                                    <span className="uppercase font-light tracking-tighter leading-6 text-xl">R$35</span>
                                </div>
                            </div>
                            <div className="w-full bg-black/20 h-[1px]"></div>
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <p className="uppercase font-light tracking-tighter leading-6 text-xl">Corte + Navalha</p>
                                    <span className="uppercase font-light tracking-tighter leading-6 text-xl">R$70</span>
                                </div>
                            </div>
                            <div className="w-full bg-black/20 h-[1px]"></div>
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <p className="uppercase font-light tracking-tighter leading-6 text-xl">Barba</p>
                                    <span className="uppercase font-light tracking-tighter leading-6 text-xl">R$40</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}