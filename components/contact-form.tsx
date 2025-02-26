"use client";
import React, {useState} from "react";

const classInput = "w-full border border-emerald-300 rounded p-2 focus:outline-none focus:ring-2 outline-none select-none focus:ring-emerald-400 resize-none";

export default function ContactForm() {
  const [formData, setFormData] = useState({name: "", email: "", message: ""});

  const handleChange = (e: { target: { name: string, value: string } }) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Preencha todos os campos do formulário.");
      return;
    }
    fetch("https://formsubmit.co/devgabrielribeiro@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...formData, _next: `${window.location.origin}/success` }),
    }).then(response => console.log(response))
      .then(data => console.log(data))
      .catch(error => console.error("Erro:", error));
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero content */}
      <div className="pb-12 pt-32 md:pb-20 md:pt-40">
        {/* Section header */}
        <div className="pb-12 text-center md:pb-16 flex items-center justify-center flex-col">
          <h2 className="text-3xl font-semibold text-emerald-600 md:text-4xl mb-8 text-center">Entre em Contato</h2>
          <form action={"https://formsubmit.co/devgabrielribeiro@gmail.com"} method={"POST"} className="space-y-4">
            <label form={"name"} className="block text-sm text-left font-medium text-gray-500 hidden">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={(e) => handleChange(e)}
              className={classInput}
              required
            />
            <label form={"email"} className="block text-sm text-left font-medium text-gray-500 hidden">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Seu Email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              className={classInput}
              required
            />
            <label form={"message"}
                   className="block text-sm text-left font-medium text-gray-500 hidden">Mensagem</label>
            <textarea
              name="message"
              id="message"
              placeholder="Sua Mensagem"
              value={formData.message}
              onChange={(e) => handleChange(e)}
              className={classInput}
              required
            >
        </textarea>
            <button
              className="btn group mt-4 mb-4 w-full bg-linear-to-t from-emerald-600 to-emerald-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0"
              type="submit"
            >
                    <span className="relative inline-flex items-center text-[16px]">
                      Enviar a mensagem
                      <span
                        className="ml-1 tracking-normal text-emerald-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
