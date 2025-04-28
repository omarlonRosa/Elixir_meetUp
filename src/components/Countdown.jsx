import { useEffect, useState } from "react";

export default function Countdown() {
  const eventDate = new Date("2025-05-29T20:00:00");
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({});
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mt-8">
      {timeLeft.days != null ? (
        <div className="flex flex-wrap justify-center gap-4">
          <TimerBox label="Dias" value={timeLeft.days} />
          <TimerBox label="Horas" value={timeLeft.hours} />
          <TimerBox label="Minutos" value={timeLeft.minutes} />
          <TimerBox label="Segundos" value={timeLeft.seconds} />
        </div>
      ) : (
        <span className="text-indigo-700 text-xl font-bold">Evento Iniciado!</span>
      )}
    </div>
  );
}

function TimerBox({ label, value }) {
  return (
    <div className="flex flex-col items-center bg-white text-indigo-700 p-4 rounded-xl shadow-md w-24">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm">{label}</div>
    </div>
  );
}

