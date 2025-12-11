import { useEffect, useMemo, useState, type CSSProperties } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import { cn } from "@/lib/utils";
import background from "@/assets/match/gameBackground4x.png";
import scoreboard from "@/assets/match/mainScoreboard.png";
import diamondsIcon from "@/assets/fire.svg";
import goldsIcon from "@/assets/game/redInternetSpeedIcon.svg";
import SvgElementButton from "@/components/svgElementButton";
import numberButton from "@/assets/game/numberButton.svg";
import zeroButton from "@/assets/game/zeroButton.svg";
import onClickButton from "@/assets/game/onClickButton.svg";

const keypad = ["1", "2", "3", "4", "5", "6", "7", "8"];

const Game = () => {
  const [turnTimer, setTurnTimer] = useState(10);
  const [isOpponentTurn, setIsOpponentTurn] = useState(false);
  const [codeSlots, setCodeSlots] = useState(["3", "7", "*"]);
  const [lastPressed, setLastPressed] = useState<string | null>(null);

  const numberBtnSize: CSSProperties = {
    width: "16vw",
    height: "14vw",
    minWidth: "52px",
    minHeight: "48px",
    maxWidth: "64px",
    maxHeight: "56px",
  };

  const zeroBtnSize: CSSProperties = {
    width: "48vw",
    height: "14vw",
    minWidth: "170px",
    minHeight: "48px",
    maxWidth: "200px",
    maxHeight: "56px",
  };

  const keypadWidth: CSSProperties = {
    width: "68vw",
    minWidth: "230px",
    maxWidth: "280px",
  };

  const scoreBlockWidth: CSSProperties = {
    maxWidth: "70vw",
    minWidth: "230px",
  };

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

  const renderNumberButton = (value: string) => {
    const isActive = lastPressed === value;
    const src = isActive ? onClickButton : numberButton;
    return (
      <button
        key={value}
        type="button"
        onClick={() => handleKeyPress(value)}
        className="relative w-[60px] h-[56px] flex items-center justify-center"
      >
        <img
          src={src}
          alt={value}
          className="w-[60px] h-[56px] object-contain"
          loading="lazy"
        />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white font-montserrat text-xl font-semibold drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
          {value}
        </span>
      </button>
    );
  };

  const renderZeroButton = () => {
    // Оставляем 0 без смены ассета при клике по пожеланию
    return (
      <button
        type="button"
        onClick={() => handleKeyPress("0")}
        className="relative col-span-3 w-[186px] h-[56px] flex items-center justify-center"
      >
        <img
          src={zeroButton}
          alt="0"
          className="w-[186px] h-[56px] object-contain"
          loading="lazy"
        />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white font-montserrat text-xl font-semibold drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
          0
        </span>
      </button>
    );
  };

  const isHighlighted = (value: string) => lastPressed === value;

  return (
    <MobileLayout showNav={false} scrollable={false} fullWidth contentPaddingBottomClass="pb-0">
      <div className="bg-black w-full h-[12vh] min-h-[80px] max-h-[108px]" />
      <div className="relative min-h-[88vh] w-full text-white overflow-hidden">
        <div
          className="absolute inset-0 h-[110%] w-full bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />

        <div className="relative z-10 px-4 pb-8 pt-5 flex flex-col items-center gap-6">
          <div className="w-full flex items-start gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/10 h-[12vw] w-[12vw] min-h-[44px] min-w-[44px] max-h-[56px] max-w-[56px]" />
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
              <div className="flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 w-[24vw] min-w-[90px] max-w-[110px]">
                <img src={scoreboard} alt="Scoreboard" className="w-full h-auto object-contain" />
              </div>
              <div className="ml-0.5 mt-1 text-[12px]">
                <span className="text-white/70 font-montserrat">Ваш оппонент</span>
              </div>
            </div>
          </div>

          <div className="text-center w-full mt-8 space-y-5">
            <p
              className="font-semibold font-jura tracking-wide drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]"
              style={{ fontSize: "7vw" }}
            >
              {isOpponentTurn ? "Ход противника" : "Ваш ход"}
            </p>

            <div className="flex justify-center pb-4">
              <div className="relative flex items-center justify-center w-[24vw] h-[22vw] min-w-[88px] min-h-[80px] max-w-[108px] max-h-[96px]">
                <SvgElementButton
                  width={108}
                  height={96}
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

          <div className="w-full mx-auto space-y-4" style={scoreBlockWidth}>
            <div className="relative w-full">
              <img src={scoreboard} alt="Code slots" className="w-full h-auto object-contain" />
              <div className="absolute inset-0 flex items-center justify-between px-7">
                {[0, 1, 2].map((idx) => (
                  <div
                    key={idx}
                    className="rounded-full flex items-center justify-center text-2xl font-semibold font-montserrat text-white/90"
                    style={{
                      width: "11vw",
                      height: "11vw",
                      minWidth: "40px",
                      minHeight: "40px",
                      maxWidth: "52px",
                      maxHeight: "52px",
                    }}
                  >
                    
                  </div>
                ))}
              </div>
            </div>
            <p className="pb-[1vh] text-center text-[12px] font-semibold font-montserrat text-white/90">Подберите системный код</p>
            <div className="flex flex-col items-center gap-3.5">
              <div className="grid grid-cols-4 gap-[3vw]" style={keypadWidth}>
                {keypad.slice(0, 4).map((value) => renderNumberButton(value))}
              </div>

              <div className="grid grid-cols-4 gap-[3vw]" style={keypadWidth}>
                {keypad.slice(4, 8).map((value) => renderNumberButton(value))}
              </div>

              <div className="grid grid-cols-4 gap-[3vw]" style={keypadWidth}>
                {renderNumberButton("9")}
                {renderZeroButton()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Game;
