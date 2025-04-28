import CanvasBackground from "./components/CanvasBackground";
import Countdown from "./components/Countdown";
import PresenterCard from "./components/PresenterCard";
import speakers from "./data/speakers.json";


function App() {
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <CanvasBackground />
      <div className="z-10 flex flex-col items-center p-4 md:px-6 space-y-8">
        <img src="/logo.svg" alt="Logo Elixir Meetup" className="h-20" />

        <Countdown />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {speakers.map((speaker, index) => (
        <PresenterCard key={index} data={speaker} delay={index * 200}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;

