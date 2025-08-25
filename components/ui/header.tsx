import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative flex h-14 items-center justify-between gap-3  bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] [&_*]:text-[16px]" style={{borderRadius: "8.5px"}}>
          {/* Site branding */}
          <div className="flex flex-1 items-center flex-wrap">
            <Logo/>
            
            <div className={"items-center gap-[0.25rem] items-start [&_*]:leading-none flex-col ml-3 hidden sm:flex"}>
              <span>Joelson Mascarenhas</span>
              <span className={"text-gray-500 lowercase"} style={{fontSize: "13px"}}>Psicólogo Clínico</span>
            </div>
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/#0"
                className="btn-sm text-gray-800 shadow-sm hover:bg-emerald-200 bg-emerald-100 hidden md:block"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/#about-me"
                className="btn-sm text-gray-800 shadow-sm hover:bg-emerald-200 bg-emerald-100"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="btn-sm text-gray-800 shadow-sm hover:bg-emerald-200 bg-emerald-100  hidden md:block"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/#contact-form"
                className="btn-sm text-emerald-700 shadow-sm hover:bg-emerald-300 bg-emerald-200"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
