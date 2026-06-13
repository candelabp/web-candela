import { useEffect, useState } from "react";

export function useMadridAvailability() {
  const [madridTime, setMadridTime] = useState("");
  const [availabilityMessage, setAvailabilityMessage] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("es-ES", {
        timeZone: "Europe/Madrid",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      const timeStr = formatter.format(new Date());
      const hour = Number.parseInt(timeStr.split(":")[0], 10);

      setMadridTime(timeStr);

      if (hour >= 8 && hour < 13) {
        setAvailabilityMessage("En el escritorio con una taza de café recién hecho ☕. Atendiendo propuestas.");
      } else if (hour >= 13 && hour < 15) {
        setAvailabilityMessage("Estudiando documentación o explorando nuevas técnicas de WebGL 🛠️.");
      } else if (hour >= 15 && hour < 19) {
        setAvailabilityMessage("Escribiendo código artesanal e integrando APIs fluidas ✨.");
      } else if (hour >= 19 && hour < 21) {
        setAvailabilityMessage("Dando una caminata por el monte o practicando yoga para despejar la lógica 🌲.");
      } else {
        setAvailabilityMessage("Disfrutando un buen libro o durmiendo 🌙. ¡Dejaré tu mensaje en mi bandeja al despertar!");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return { madridTime, availabilityMessage };
}
