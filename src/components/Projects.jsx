// src/components/Projects.jsx

import React from "react";

// 1. DADOS DOS PROJETOS (substitua com os seus)
const projectData = [
  {
    title: "Travelgram",
    description:
      "Rede social onde as pessoas mostram os registros de suas viagens pelo mundo.",
    imageUrl: "/path/to/your/image1.png", // Coloque o caminho para sua imagem
  },
  {
    title: "Tech News",
    description:
      "Homepage de um portal de notícias sobre a área de tecnologia.",
    imageUrl: "/path/to/your/image2.png",
  },
  {
    title: "Página de receita",
    description: "Página com o passo a passo de uma receita de cupcakes.",
    imageUrl: "/path/to/your/image3.png",
  },
  {
    title: "Zingen",
    description:
      "Landing Page completa e responsiva de um aplicativo de karaokê.",
    imageUrl: "/path/to/your/image4.png",
  },
  {
    title: "Refund",
    description: "Um sistema para gestão e acompanhamento de contratos.",
    imageUrl: "/path/to/your/image5.png",
  },
  {
    title: "Página de turismo",
    description:
      "Página com as principais informações para quem quer viajar para Búzios.",
    imageUrl: "/path/to/your/image6.png",
  },
];

const Projects = () => {
  return (
    <section className=" text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Títulos da Seção */}
        <div className="text-center mb-12">
          <h3 className="text-orange-500 font-semibold text-lg">
            Meu trabalho
          </h3>
          <h2 className="text-4xl font-bold mt-2">
            Veja os projetos em destaque
          </h2>
        </div>

        {/* 2. GRID DE PROJETOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 3. MAPEAMENTO DOS DADOS PARA CRIAR OS CARDS */}
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700
                         transform transition-transform duration-300 hover:scale-105 hover:border-orange-500"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="rounded-md w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
