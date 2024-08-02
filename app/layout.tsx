import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import StyledComponentsRegistry from "@/lib/styledRegistry";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
	themeColor: "#fab93b",
};

export const metadata: Metadata = {
	title:
		"Conheça a melhor barbearia de Camboriú – Barbearia Carioca",
	metadataBase: new URL("https://something.com.br"),
	description:
		"Cortes de cabelo masculinos e infantis com agendamento online em Camboriú! Agende seu horário.",
	keywords: ["barbearia em Camboriu", "barbearia Camboriu", "barbearia carioca Camboriu", "corte de cabelo masculino Camboriu", "corte de cabelo masculino barato Camboriú", "barbearia infantil Centro Camboriú", "corte de cabelo infantil Camboriu", "agendamento online barbearia", "agendamento online corte de cabelo", "barbeiro profissional", "melhor barbearia Camboriu", "barbearia infantil Camboriu", "barba e cabelo Camboriu"],
	openGraph: {
		title:
			"Conheça a melhor barbearia de Camboriú – Barbearia Carioca",
		description:
			"Cortes de cabelo masculinos e infantis com agendamento online em Camboriú! Agende seu horário.",
		siteName: "Conheça a melhor barbearia de Camboriú – Barbearia Carioca",
		images: [
			{
				url: "https://something.com.br/banner.png",
				width: 1280,
				height: 720,
			}
		],
		locale: "pt-BR",
		type: "website",
	},
	robots: {
		index: true,
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Conheça a melhor barbearia de Camboriú – Barbearia Carioca",
		description:
			"Cortes de cabelo masculinos e infantis com agendamento online em Camboriú! Agende seu horário.",
		images: ["https://something.com.br/banner.png"],
	},
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
        </body>
    </html>
  );
}
