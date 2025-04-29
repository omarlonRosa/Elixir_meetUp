import { useState } from "react";

import { Link } from "react-router-dom";

export default function Agendamento() {

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipo_participação: "youtube"
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev)=> ({...prev, [name]: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_URL = "http:/localhost:4000/api/inscricoes";

    try{
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok){
        setStatus("sucess");
      }else {
        setStatus("error");
      }
    } catch (error){
      console.error(error);
      setStatus("error");
    }
    };

  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Inscrição para o Elixir Meetup</h1>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-4 w-full max-w-md">
        <input type="text" name="nome" placeholder="Nome completo" required value={formData.nome} onChange={handleChange} className="input" />
        <input type="email" name="email" placeholder="E-mail" required value={formData.email} onChange={handleChange} className="input" />
        <input type="tel" name="telefone" placeholder="Telefone" required value={formData.telefone} onChange={handleChange} className="input" />

        <select name="tipo_participacao" value={formData.tipo_participacao} onChange={handleChange} className="input">
          <option value="youtube">Participação Online (YouTube)</option>
          <option value="presencial">Participação Presencial</option>
        </select>

        {formData.tipo_participacao === "presencial" && (
          <div className="text-sm text-gray-600 bg-gray-100 p-3 rounded">
            <strong>Endereço do Evento:</strong><br />
            Estadio Rosenão<br />
            Av. Principal, 123 – Parauapebas – PA
          </div>
        )}

        <button type="submit" className="bg-indigo-600 w-full py-2 text-white rounded-lg hover:bg-indigo-700 transition">
          Confirmar Inscrição
        </button>

        {status === "success" && <p className="text-green-600 text-center mt-2">Inscrição enviada com sucesso!</p>}
        {status === "error" && <p className="text-red-600 text-center mt-2">Erro ao enviar. Tente novamente.</p>}
      </form>

      <Link to="/" className="mt-4 text-indigo-600 hover:underline">← Voltar para Home</Link>
    </div>
  );
  }

