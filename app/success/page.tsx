"use client";
import {useEffect, useState} from "react";

export default function SuccessSendMassage() {
  const [cumpriments, setCumpriments] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour <= 11) {
      setCumpriments("Tenha um bom dia.");
      return;
    } else if (hour <= 17) {
      setCumpriments("Tenha uma boa tarde!")
      return;
    }
    setCumpriments("Tenha uma boa noite.");

    document.title = "Mensagem enviada! - Joelson Mascarenhas | Psicólogo";
  }, [])

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero content */}
      <div className="pb-12 pt-32 md:pb-20 md:pt-40">
        {/* Section header */}
        <div className="pb-12 text-center md:pb-16 flex items-center justify-center flex-col">
          <h2 className={"text-3xl font-semibold text-emerald-600 md:text-4xl text-balance"}>
            Obrigado! Já recebi a sua mensagem! Retornarei assim que possível.
          </h2>
          <span className={"block mt-4 text-3xl font-bold text-emerald-800"}>{cumpriments}</span>
        </div>
      </div>
    </div>
  );
}
