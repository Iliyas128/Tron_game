import { useEffect, useMemo, useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import { cn } from "@/lib/utils";
import background from "@/assets/match/gameBackground4x.png";
import scoreboard from "@/assets/match/mainScoreboard.png";
import diamondsIcon from "@/assets/fire.svg";
import goldsIcon from "@/assets/game/redInternetSpeedIcon.svg";
import SvgElementButton from "@/components/svgElementButton";
import RoundedRectSvg from "@/components/layout/numberButtons";

const keypad = [
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
  { value: "6" },
  { value: "7" },
  { value: "8" },
  { value: "9" },
  { value: "0", wide: true },
];

const Game = () => {
  const [turnTimer, setTurnTimer] = useState(10);
  const [isOpponentTurn, setIsOpponentTurn] = useState(false);
  const [codeSlots, setCodeSlots] = useState(["3", "7", "*"]);
  const [lastPressed, setLastPressed] = useState<string | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setTurnTimer((prev) => {
        if (prev > 0) return prev - 1;
        // simple demo switch between turns when timer hits 0
        setIsOpponentTurn((t) => !t);
        return 10;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const paddedTimer = useMemo(() => `${turnTimer}`, [turnTimer]);

  const handleKeyPress = (value: string) => {
    setLastPressed(value);
    setCodeSlots((prev) => {
      const next = [...prev];
      const pendingIndex = next.findIndex((v) => v === "*");
      if (pendingIndex !== -1) {
        next[pendingIndex] = value;
        return next;
      }
      // shift left when all slots filled
      next.shift();
      next.push(value);
      return next;
    });
  };

  const isHighlighted = (value: string) => lastPressed === value;

  return (
    <MobileLayout showNav={false} scrollable={false} contentPaddingBottomClass="pb-0">
      <div className="bg-black h-[96px] w-full" />
      <div className="relative min-h-[calc(100vh-96px)] w-full text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-bottom bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />

        <div className="relative z-10 px-4 pb-8 pt-5 flex flex-col items-center gap-6">
          <div className="w-full flex items-start gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-white/10" />
                <div className="space-y-0.5">
                  <p className="text-[12px] font-semibold leading-tight font-montserrat">Name Username</p>
                  <p className="text-[8px] text-white/70 font-montserrat">Clan of Name</p>
                  <div className="flex items-center gap-4 text-sm font-semibold font-montserrat mt-1.5">
                    <div className="flex items-center gap-1 text-[#d10808]">
                      <img
                        src={diamondsIcon}
                        alt="Diamonds"
                        className="w-4 h-4"
                        style={{ filter: "invert(9%) sepia(85%) saturate(7489%) hue-rotate(1deg) brightness(91%) contrast(103%)" }}
                      />
                      <span>131</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#d10808]">
                      <img
                        src={goldsIcon}
                        alt="Golds"
                        className="w-3 h-3"
                        style={{ filter: "invert(9%) sepia(85%) saturate(7489%) hue-rotate(1deg) brightness(91%) contrast(103%)" }}
                      />
                      <span>75</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <div className="w-[95px] h-[52px flex items-center justify-center rounded-2xl bg-white/5 border border-white/10">
              <img src={scoreboard} alt="Scoreboard" className="w-full h-auto object-contain" />
            </div>
            <div className="ml-1.5 mt-1 text-[12px]">
              <span>Ваш оппонент</span>
            </div>
            </div>
          </div>

          <div className="text-center w-full mt-5 space-y-5">
            <p className="text-[30px] font-semibold font-montserrat tracking-wide drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
              {isOpponentTurn ? "Ход противника" : "Ваш ход"}
            </p>

            <div className="flex justify-center">
              <div className="relative w-[96px] h-[90px] flex items-center justify-center">
                <SvgElementButton
                  width={96}
                  height={90}
                  borderColor={isOpponentTurn ? "#AF0000" : "#555555"}
                  backgroundColor={isOpponentTurn ? "#2b0000" : "#2E2E2E"}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                  <span className="text-3xl font-semibold font-montserrat drop-shadow-[0_0_8px_rgba(0,0,0,0.35)]">
                    {paddedTimer}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-white/80 font-montserrat">сек</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[245px] mx-auto space-y-4">
            <div className="relative w-full">
              <img src={scoreboard} alt="Code slots" className="w-full h-auto object-contain" />
              <div className="absolute inset-0 flex items-center justify-between px-7">
                {[0, 1, 2].map((idx) => (
                  <div
                    key={idx}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-semibold font-montserrat text-white/90"
                  >
                    
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-[12px] font-semibold font-montserrat text-white/90">Подберите системный код</p>

            <div className="flex flex-col items-center gap-3.5">
              <div className="grid grid-cols-4 gap-3 w-[252px]">
                {keypad.slice(0, 4).map((item) => (
                  <RoundedRectSvg
                    key={item.value}
                    width={60}
                    height={56}
                    label={item.value}
                    backgroundColor="#1b1b1b"
                    borderStartColor="#4a4a4a"
                    borderEndColor="#4a4a4a"
                    fontSize={22}
                    onClick={() => handleKeyPress(item.value)}
                  />
                ))}
              </div>

              <div className="grid grid-cols-4 gap-3 w-[252px]">
                {keypad.slice(4, 8).map((item) => (
                  <RoundedRectSvg
                    key={item.value}
                    width={60}
                    height={56}
                    label={item.value}
                    backgroundColor="#1b1b1b"
                    borderStartColor="#4a4a4a"
                    borderEndColor="#4a4a4a"
                    fontSize={22}
                    onClick={() => handleKeyPress(item.value)}
                  />
                ))}
              </div>

              <div className="grid grid-cols-4 gap-3 w-[252px]">
                <RoundedRectSvg
                  width={60}
                  height={56}
                  label="9"
                  backgroundColor="#1b1b1b"
                  borderStartColor="#4a4a4a"
                  borderEndColor="#4a4a4a"
                  fontSize={22}
                  onClick={() => handleKeyPress("9")}
                />
                <RoundedRectSvg
                  width={186}
                  height={56}
                  label="0"
                  backgroundColor="#1b1b1b"
                  borderStartColor="#4a4a4a"
                  borderEndColor="#4a4a4a"
                  fontSize={22}
                  className="col-span-2"
                  onClick={() => handleKeyPress("0")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Game;
