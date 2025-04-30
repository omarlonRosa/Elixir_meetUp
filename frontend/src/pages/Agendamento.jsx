import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";
import CardIngresso from "../components/CardIngresso";


 


export default function Agendamento() {
  const [modalAberto, setModalAberto] = useState(false);

  const [state, setState] = useState(null);
  const [dadosConfirmados, setDadosConfirmados] = useState(null);
  const [loading, setLoading] = useState(false);


  const [dados, setDados] = useState({
    nome: "",
    email: "",
    telefone: "",
    modalidade: "online"
  });


  const handleChange = (e) => {
    const {name, value} = e.target;
    setDados((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {nome, email, telefone, modalidade } = dados;

    if (!nome || !email || !telefone || !modalidade){
      toast.error("Preencha todos os campos");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
      toast.error("E-mail inválido.");
      return;
    }

    if (telefone.replace(/\D/g, '').length < 8){
      toast.error("Telefone inválido.");
      return;
    }

    setLoading(true);
   
    try{
    
      const response = await fetch(`http://localhost:4000/api/inscricoes?email=${dados.email}`);
    if (!response.ok) {
      throw new Error("Inscrição não encontrada");
    }

      if (!response.ok) throw new Error('Erro ao enviar');

      setDadosConfirmados(dados);
      toast.success('Inscrição enviada com sucesso!')
      setDados({
        nome: '',
        email: '',
        telefone: '',
        modalidade: ''
      });
    } catch (error) {
      toast.error('Erro ao enviar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
         <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Agende sua participação</h2>

      {!dadosConfirmados &&
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text"
          name="nome"
          placeholder="Nome completo"
          value={dados.nome}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg" 
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail" 
          value={dados.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <input 
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={dados.telefone}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />


        <select name="modalidade" value={dados.modalidade} onChange={handleChange} className="input">
          <option value="online">Participação Online </option>
          <option value="presencial">Participação Presencial </option>
        </select>

        {dados.modalidade ==="presencial" && (
        <div className="text-sm text-gray 600 bg-gray-100 p-3 rounded">
        <strong> Endereço do Evento: </strong>
        Sala de convenções da Fribralink<br />
        Av. Principal, 123, União - Parauapebas - PA 
        </div>
        )}


        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Enviando..." : "Confirmar Presença"}
        </button>
        </form>
      }
      
      <ToastContainer />

      <Link to="/" className="mt-4 text-indigo-600 hover:underline">← Voltar para Home</Link>

{dadosConfirmados && <CardIngresso dados={dadosConfirmados} />}

    </div>

     );
  };


