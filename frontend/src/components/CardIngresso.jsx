import React, { useRef } from "react";
import { toPng } from "html-to-image";
import { toast } from "react-toastify";

const CardIngresso = ({ dados }) => {
  const ingressoRef = useRef(null);

  const baixarImagem = () => {
    if (ingressoRef.current) {
      toPng(ingressoRef.current).then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "meu-ingresso.png";
        link.href = dataUrl;
        link.click();
      }).catch((err) => {
        toast.error("Erro ao gerar imagem.");
        console.error(err);
      });
    }
  };

  const compartilharImagem = () => {
    if (ingressoRef.current) {
      toPng(ingressoRef.current)
        .then((dataUrl) => {
          fetch(dataUrl)
            .then((res) => res.blob())
            .then((blob) => {
              const file = new File([blob], "ingresso.png", { type: blob.type });

              if (navigator.canShare && navigator.canShare({ files: [file] })) {
                navigator.share({
                  title: "Meu ingresso do evento",
                  text: "Apresente este ingresso na entrada!",
                  files: [file],
                });
              } else {
                toast.error("Seu navegador não suporta compartilhamento com imagem.");
              }
            });
        })
        .catch((err) => {
          toast.error("Erro ao preparar imagem para compartilhamento.");
          console.error(err);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <div
        ref={ingressoRef}
        className="bg-white shadow-2xl rounded-xl p-6 w-full max-w-sm text-center border border-gray-300"
      >
        <h2 className="text-xl font-bold mb-2">Ingresso Confirmado 🎉</h2>
        <p className="text-gray-700">Nome: <strong>{dados.nome}</strong></p>
        <p className="text-gray-700">Email: <strong>{dados.email}</strong></p>
        <p className="text-gray-700">Modalidade: <strong>{dados.modalidade}</strong></p>
        <p className="text-gray-700 mt-2">Apresente este ingresso no evento!</p>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <button
          onClick={baixarImagem}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow"
        >
          Baixar ingresso
        </button>

        <button
          onClick={compartilharImagem}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full shadow"
        >
          Compartilhar ingresso
        </button>
      </div>
    </div>
  );
};

export default CardIngresso;

