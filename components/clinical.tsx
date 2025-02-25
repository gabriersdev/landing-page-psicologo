import Badge from "@/components/badge";

export default function Clinical() {
  return (
    <section className={"mx-auto max-w-6xl px-4 sm:px-6"}>
      <div className="pb-12 pt-32 md:pb-20 md:pt-40 border-t border-b border-emerald-200">
        <div className="pb-12 text-center md:pb-16">
          <Badge text={"Linha de trabalho"}/>
          <h2 className={"mt-4 text-3xl font-bold text-emerald-600 md:text-4xl"}>Psicologia de confronto</h2>
          <div className={"mt-8 sm:px-4 md:px-8"}>
            <article className={"flex flex-col gap-3"}>
              <p className={"text-balance text-slate-700 text-[16px] md:text-xl"}>
                A Psicologia de Confronto é uma abordagem direta e assertiva que busca levar o paciente a encarar, sem
                rodeios, seus medos, vícios e padrões destrutivos. Diferente de abordagens mais sutis, essa linha de
                trabalho não evita desconfortos nem mascara verdades difíceis. Pelo contrário, o objetivo é desafiar o
                paciente a sair da negação e enfrentar aquilo que o impede de evoluir.
              </p>
              <p className={"text-balance text-slate-700 text-[16px] md:text-xl"}>
                Essa metodologia é especialmente eficaz para pessoas que tendem a racionalizar seus problemas, evitando
                o enfrentamento real. Ao invés de reforçar padrões de evitação, a Psicologia de Confronto incentiva a
                responsabilização e a ação, ajudando o paciente a desenvolver resiliência, maturidade emocional e
                mudanças concretas na vida.
              </p>
              <p className={"text-balance text-slate-700 text-[16px] md:text-xl"}>
                Se você está pronto para encarar a verdade e transformar sua jornada, essa abordagem pode ser a chave
                para a sua evolução.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}