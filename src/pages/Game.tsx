import { useEffect, useMemo, useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import { cn } from "@/lib/utils";
import background from "@/assets/match/gameBackground4x.png";

const codeSlots = [
  { value: "3", state: "active" as const },
  { value: "7", state: "active" as const },
  { value: "*", state: "pending" as const },
];

const keypad = [
  { value: "1" },
  { value: "2" },
  { value: "3", highlight: true },
  { value: "4" },
  { value: "5" },
  { value: "6" },
  { value: "7", highlight: true },
  { value: "8" },
  { value: "9" },
  { value: "0", wide: true },
];

const Game = () => {
  const [turnTimer, setTurnTimer] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setTurnTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const paddedTimer = useMemo(() => (turnTimer < 10 ? `${turnTimer}` : `${turnTimer}`), [turnTimer]);

  return (
    <MobileLayout showNav={false} scrollable contentPaddingBottomClass="pb-0">
      <div className="bg-black h-[96px] w-full" />
      <div className="relative min-h-screen w-full text-white">
        <div
          className="absolute inset-0 bg-bottom bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      </div>
    </MobileLayout>
  );
};

export default Game;
