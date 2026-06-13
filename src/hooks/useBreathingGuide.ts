import { useEffect, useState } from "react";

export function useBreathingGuide() {
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathPhase, setBreathPhase] = useState("Inhala");
  const [breathCounter, setBreathCounter] = useState(4);

  useEffect(() => {
    let breathInterval: ReturnType<typeof setInterval> | undefined;

    if (isBreathing) {
      breathInterval = setInterval(() => {
        setBreathCounter((prev) => {
          if (prev <= 1) {
            setBreathPhase((currentPhase) => {
              if (currentPhase === "Inhala") return "Retén";
              if (currentPhase === "Retén") return "Exhala";
              return "Inhala";
            });

            return 4;
          }

          return prev - 1;
        });
      }, 1000);
    } else {
      setBreathPhase("Inhala");
      setBreathCounter(4);
    }

    return () => {
      if (breathInterval) clearInterval(breathInterval);
    };
  }, [isBreathing]);

  return {
    isBreathing,
    breathPhase,
    breathCounter,
    toggleBreathing: () => setIsBreathing((current) => !current),
  };
}
