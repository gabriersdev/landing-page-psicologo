import Image from "next/image";
import ImageTherapy from "@/public/images/therapy.jpg";
import Badge from "@/components/badge";

export default function AboutMe() {
  return (
    <section className={"mx-auto max-w-6xl px-4 sm:px-6"} id="about-me" data-aos="fade-up" data-aos-delay={300}>
      <div className="pb-12 pt-32 md:pb-20 md:pt-40">
        <div className="pb-12 text-center md:pb-16">
          <Badge text={"Sobre mim"}/>
          <h2 className={"mt-4 text-3xl font-bold text-emerald-600 md:text-4xl"}>O meu trabalho</h2>
          <div className={"mt-8 sm:px-4 md:px-8"}>
            <article data-aos="fade-up" data-aos-delay={500}>
              <p className={"text-balance text-slate-700 text-[16px] md:text-xl"}>Joelson é um psicólogo clínico dedicado ao bem-estar emocional e ao desenvolvimento pessoal de seus pacientes. Formado em Psicologia, possui vasta experiência no atendimento de adultos e adolescentes, utilizando abordagens terapêuticas eficazes para promover autoconhecimento, equilíbrio emocional e qualidade de vida. Ao longo de sua carreira, Joelson se especializou no tratamento de ansiedade, depressão e outros desafios emocionais, sempre com um olhar acolhedor e humanizado. Seu compromisso é oferecer um espaço seguro e confidencial para que cada pessoa possa se expressar livremente e encontrar caminhos para uma vida mais plena.</p>
            </article>
          </div>
        </div>
        <figure>
          <Image src={ImageTherapy} alt={"Terapia"} className={"w-full h-[300px] md:h-[500px] object-cover rounded-xl shadow border-emerald-500"}/>
          <figcaption className={"text-center mt-3 text-emerald-200/50 text-balance"}>A terapia em conjunto com outras atividades melhora significativamente a vida dos pacientes.</figcaption>
        </figure>
      </div>
    </section>
  )
}