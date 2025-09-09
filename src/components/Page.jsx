"use client";
import Perfil from "../assets/Perfil.png";

export default function Page() {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <img
              src={Perfil}
              alt="perfil"
              className="mx-auto mb-8 border-2 border-white rounded-full w-24 h-24 object-cover" // Borda branca, tamanho menor e centralizado
            />

            <h1 className="font-satoshi text-9xl tracking-tight text-balance text-white sm:text-7xl">
              Desenvolvededor Full-Stack
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Com paixão por tecnologia, crio experiências web completas e
              inovadoras, com atenção aos detalhes
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
