import React from "react";
import ShareButtons from "./ShareButtons";

export default function ShareModal({ show, onClose, dados }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 ignore-print">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="text-xl font-semibold mb-4 text-center">Compartilhar ingresso</h3>
        <ShareButtons dados={dados} />
      </div>
    </div>
  );
}

