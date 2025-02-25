import Image from "next/image";
import ImageAvatar from "@/public/images/avatar.jpg";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration/>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16 flex items-center justify-center flex-col">
            <Image src={ImageAvatar} alt="Avatar"
                   className={"rounded-full flex object-fill mb-8 h-[150px] w-[150px] border-emerald-600 border-4"}/>
            <hgroup className={"mb-6"}>
              <h1
                className="mb-3 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                Joelson Mascarenhas
              </h1>
              <h2 className={"text-3xl font-semibold text-emerald-600 md:text-4xl"}>Psicólogo Clínico</h2>
            </hgroup>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700 text-balance text-xl"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Cuidando da sua mente para um viver mais leve. Psicoterapia para autoconhecimento, emoções equilibradas
                e qualidade de vida.
              </p>
              <div
                className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-emerald-600 to-emerald-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center text-[16px]">
                      Marque sua consulta
                      <span
                        className="ml-1 tracking-normal text-emerald-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto text-[16px] flex gap-1"
                    href="#0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-medium" viewBox="0 0 16 16">
                      <path
                        d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795"/>
                    </svg>
                    <span>Medium</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
