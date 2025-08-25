import "./css/style.css";

import {Inter} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Psicologo Joelson Mascarenhas",
  description: "Joelson é um psicólogo clínico dedicado ao bem-estar emocional e ao desenvolvimento pessoal de seus pacientes. Formado em Psicologia, possui vasta experiência no atendimento de adultos e adolescentes, utilizando abordagens terapêuticas eficazes para promover autoconhecimento, equilíbrio emocional e qualidade de vida. Ao longo de sua carreira, Joelson se especializou no tratamento de ansiedade, depressão e outros desafios emocionais, sempre com um olhar acolhedor e humanizado. Seu compromisso é oferecer um espaço seguro e confidencial para que cada pessoa possa se expressar livremente e encontrar caminhos para uma vida mais plena.",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
    <body className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}>
    <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
      {children}
    </div>
    </body>
    </html>
  );
}
