// src/pages/IngressoView.jsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardIngresso from "../components/CardIngresso";

export default function IngressoView() {
  const [searchParams] = useSearchParams();
  const [dados, setDados] = useState(null);
  const email = searchParams.get("email");

  useEffect(() => {
    if (email) {
      // Chama a API para buscar os dados do inscrito
      fetch(`http://localhost:4000/api/inscricoes/${email}`)
        .then((res) => res.json())
        .then((data) => setDados(data))
        .catch((err) => console.error("Erro ao buscar ingresso:", err));
    }
  }, [email]);

  if (!email) {
    return <p className="text-center mt-10 text-red-600">Email não informado na URL.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-900 p-4">
      {dados ? (
        <CardIngresso dados={dados} />
      ) : (
        <p className="text-center text-zinc-600">Carregando ingresso...</p>
      )}
    </div>
  );
}

