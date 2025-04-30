import { Link } from 'react-router-dom';
import CanvasBackground from "../components/CanvasBackground";
import Countdown from "../components/Countdown";
import PresenterCard from "../components/PresenterCard";
import speakers from "../data/speakers.json";


export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 bg-cover bg-center" style={{
      backgroundImage: "url('/backgroundImage.png')"}}>
      <CanvasBackground />
      <div className="z-10 flex flex-col items-center p-4 md:px-6 space-y-8">
        <img src="/logo.svg" alt="Logo Elixir Meetup" className="h-20" />

        <Countdown />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 place-items-center">
                 {speakers?.length > 0 ? (
    speakers.map((speaker, index) => (
      <PresenterCard key={index} data={speaker} delay={index * 200} />
    ))
  ) : (
    <p className="text-center text-lg font-bold text-indigo-600">Nenhum palestrante disponível.</p>
  )}
        </div>
        <Link to="/agendamento" className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
  Quero Participar
</Link>
      </div>
    </div>
  );
}


