import React from "react";

export default function ShareButtons({ dados }) {
  const link = `https://seusite.com/ingresso?email=${encodeURIComponent(dados.email)}`;
  const texto = `Olá! Confira meu ingresso para o evento: ${link}`;

  const abrirJanela = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        className="bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
        onClick={() =>
          abrirJanela(`https://api.whatsapp.com/send?text=${encodeURIComponent(texto)}`)
        }
      >
        Compartilhar via WhatsApp
      </button>
      <button
        className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
        onClick={() =>
          abrirJanela(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`)
        }
      >
        Compartilhar no Facebook
      </button>
      <button
        className="bg-cyan-500 text-white py-2 rounded-xl hover:bg-cyan-600"
        onClick={() =>
          abrirJanela(`https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}`)
        }
      >
        Compartilhar no Twitter
      </button>
      <button
        className="bg-gray-700 text-white py-2 rounded-xl hover:bg-gray-800"
        onClick={() => {
          navigator.clipboard.writeText(link);
          alert("Link copiado para a área de transferência!");
        }}
      >
        Copiar link
      </button>
    </div>
  );
}

