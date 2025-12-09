import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/layout/MobileLayout";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import diamondsIcon from "@/assets/diamonds.svg";
import tensentIcon from "@/assets/tensentRed.svg";
import opponentBack from "@/assets/game/gameOpponentBack.svg";
import background from "@/assets/game/gameMainBackground1.svg";
import myBack from "@/assets/game/gameMyBack.svg";
import internetSpeedIcon from "@/assets/game/internetSpeedIcon.svg";
import terminalIcon from "@/assets/game/terminalIcon.svg";
import redInternetSpeedIcon from "@/assets/game/redInternetSpeedIcon.svg";
import redTerminalIcon from "@/assets/game/redTerminalIcon.svg";

type Phase = "search" | "prepare" | "countdown" | "ready";

const PreGame = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>("search");
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => setPhase("prepare"), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === "prepare") {
      const t = setTimeout(() => setPhase("countdown"), 2000);
      return () => clearTimeout(t);
    }
  }, [phase]);

  useEffect(() => {
    if (phase !== "countdown") return;
    setCountdown(3);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setPhase("ready");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase === "ready") {
      navigate("/profile");
    }
  }, [phase, navigate]);

  const statusText = useMemo(() => {
    if (phase === "search") return "Поиск оппонента...";
    if (phase === "prepare") return "Приготовиться!";
    if (phase === "countdown") return `${countdown}`;
    return "";
  }, [phase, countdown]);

  const opponent = {
    name: "Name Username",
    clan: "Clan of Name",
    diamonds: 131,
    rating: 75,
    net: "120 мс",
    ping: "35 мс",
  };

  const me = {
    name: "Name Username",
    clan: "Clan of Name",
    diamonds: 131,
    rating: 75,
    net: "120 мс",
    ping: "35 мс",
  };

  const Card = ({
    title,
    clan,
    diamonds,
    rating,
    badge,
    isLoading = false,
    iconMetric1 = terminalIcon,
    iconMetric2 = internetSpeedIcon,
  }: {
    title: string;
    clan: string;
    diamonds: number;
    rating: number;
    badge?: string;
    isLoading?: boolean;
    iconMetric1?: string;
    iconMetric2?: string;
  }) => (
    <div className="w-full rounded-3xl overflow-hidden shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)] bg-gradient-to-r from-[#1c1c1c] to-[#1a1a1a]">
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ backgroundImage: `url(${badge === "me" ? myBack : opponentBack})`, backgroundSize: "cover" }}
      >
        <div className="w-12 h-12 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center">
          {isLoading ? (
            <div className="w-6 h-6 rounded-md bg-white/10 animate-pulse" />
          ) : (
            <div className="w-6 h-6 bg-white/80 rounded-md" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          {isLoading ? (
            <>
              <div className="h-4 w-32 rounded bg-white/10 animate-pulse mb-1" />
              <div className="h-3 w-24 rounded bg-white/5 animate-pulse" />
              <div className="flex items-center gap-3 text-xs text-white mt-2">
                <div className="h-3 w-10 rounded bg-white/5 animate-pulse" />
                <div className="h-3 w-10 rounded bg-white/5 animate-pulse" />
              </div>
            </>
          ) : (
            <>
              <div className="text-white text-base font-semibold truncate">{title}</div>
              <div className="text-white/70 text-xs truncate">{clan}</div>
              <div className="flex items-center gap-3 text-xs text-white mt-1">
                <div className="flex items-center gap-1">
                  <img src={iconMetric1} alt="m1" className="w-3 h-3" loading="lazy" />
                  <span>{diamonds}</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={iconMetric2} alt="m2" className="w-3 h-3" loading="lazy" />
                  <span>{rating}</span>
                </div>
                
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <MobileLayout>
      <Header/>
      <div className="w-[100vw] h-[78vh] flex justify-center text-white overflow-hidden">
        <div
          className="relative w-[100vw] h-[100vh] bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "calc(100vw * 1.628)", // 635 / 390 ≈ 1.628
            maxHeight: "715px",
            minHeight: "571px",
          }}
        >
          <div className="absolute inset-1 overflow-auto pt-2 px-4 pb-6">
          {/* Balances row */}
          <div className="flex items-center justify-center gap-4 mb-4 mt-[1vh]">
            <div className="flex items-center gap-1 text-sm">
              <img src={diamondsIcon} alt="d" className="w-5 h-5" loading="lazy" />
              <span>2</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <img src={tensentIcon} alt="t" className="w-5 h-5" loading="lazy" />
              <span>3.2</span>
            </div>
          </div>

          {/* Opponent placeholder / card */}
          <div className="w-full rounded-3xl bg-black/30 h-[96px] mb-2 mt-[8vh] flex items-center justify-center overflow-hidden">
            <Card
              title={opponent.name}
              clan={opponent.clan}
              diamonds={opponent.diamonds}
              rating={opponent.rating}
              isLoading={phase === "search"}
                iconMetric1={redTerminalIcon}
                iconMetric2={redInternetSpeedIcon}
            />
          </div>

          {/* Status text */}
          <div
            className={cn(
              "text-center text-lg font-semibold mt-[4vh] mb-[4vh] font-jura",
              phase === "search"
                ? "text-[#DE780B]"
                : "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
            )}
          >
            <span className={phase === "search" ? "animate-pulse" : ""}>{statusText}</span>
          </div>

          {/* My card */}
          <Card title={me.name} clan={me.clan} diamonds={me.diamonds} rating={me.rating} badge="me" />

          {/* Arena text */}
          <div className="mt-[10vh] text-center space-y-1">
            <h3 className="text-[21px] font-bold font-jura">Арена сражений</h3>
            <p className="text-[12px] font-montserrat font-light text-white/70">
              Получайте дополнительные награды
              <br />
              за развитие своего клана
            </p>
          </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default PreGame;
