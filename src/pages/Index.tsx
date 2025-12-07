import { useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Gamepad2, Dice1, Target, Users, Flame, Star, ArrowRight } from "lucide-react";
import diamondsIcon from "@/assets/diamonds.svg";
import goldsIcon from "@/assets/golds.svg";
import miniCupsIcon from "@/assets/miniCups.svg";
import frame1 from "@/assets/backgroundInMain.svg";
import avatar from "@/assets/mainUserLogo.svg";
import mainBackground from "@/assets/mainBackground.svg";
import background from "@/assets/background.svg";
import pvpButton from "@/assets/pvpButton.svg";
import redFrame407 from "@/assets/redFrame407.svg";
import tensentIcon from "@/assets/tensent.svg";
import gameButton from "@/assets/gameButton.png";

const Index = () => {
  const [showBetModal, setShowBetModal] = useState(false);
  const [selectedBet, setSelectedBet] = useState<number | null>(null);
  const potentialWin = selectedBet ? Math.round(selectedBet * 1.2 * 100) / 100 : 0;

  return (
    <MobileLayout contentPaddingBottomClass="pb-0">
      <div
        className="min-h-screen bg-cover bg-no-repeat pb-28"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Header />

        <div className="px-4">
          <div className="flex justify-between items-center mt-1 mb-3">
            <span className="text-lg font-semibold text-white">Балансы</span>
            <div className="flex items-center gap-3 text-white text-base font-semibold">
              <div className="flex items-center gap-1">
                <img src={diamondsIcon} alt="Diamonds" className="w-5 h-5" />
                <span>17</span>
              </div>
              <div className="flex items-center gap-1">
                <img src={goldsIcon} alt="Golds" className="w-5 h-5" />
                <span>3.2</span>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-[url('/src/assets/backgroundInMain.svg')] bg-cover bg-no-repeat bg-center rounded-3xl px-4 py-4 flex gap-4 items-center shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]">
            <div className="shrink-0">
              <img src={avatar} alt="avatar" className="w-20 h-20 rounded-2xl" />
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              <h1 className="text-white text-3xl font-semibold leading-tight truncate">
                Name Username
              </h1>
              <p className="text-white/70 text-sm leading-none">@user_name</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="px-3 py-1 bg-white/10 text-white text-sm rounded-lg">
                  Cyber Warriors
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-[#b10000] text-white text-sm rounded-lg">
                  <img src={miniCupsIcon} alt="miniCups" className="w-4 h-4" />
                  <span className="text-sm font-semibold">7983</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main hero */}
          <div className="relative rounded-3xl overflow-hidden mt-4">
            <img
              src={mainBackground}
              alt="Main background"
              className="w-full h-auto object-cover aspect-[13/16]"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-10">
              <Button
                variant="ghost"
                className="p-0 bg-transparent hover:bg-transparent"
                onClick={() => setShowBetModal(true)}
              >
                <img src={pvpButton} alt="PvP" className="h-16 w-auto" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {showBetModal && (
        <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowBetModal(false)}
          />
          <div className="relative w-full max-w-[420px] mx-auto px-2 pb-6 sm:pb-0">
            <div
              className="relative w-full h-[407px] overflow-hidden rounded-[28px] text-white"
              style={{
                backgroundImage: `url(${redFrame407})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <button
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white text-3xl leading-none"
                onClick={() => setShowBetModal(false)}
              >
                ×
              </button>

              <div className="px-6 pt-10 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-3xl font-semibold">Сделайте ставку</h3>
                  <p className="text-base text-white/80 leading-snug">
                    Выберите сумму для входа в бой,
                    <br />
                    потенциальный выигрыш — до +120%.
                  </p>
                </div>

                <div className="flex items-center justify-between px-2">
                  {[1, 5, 20, 50].map((bet) => (
                    <button
                      key={bet}
                      onClick={() => setSelectedBet(bet)}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-xl text-xl font-semibold transition",
                        selectedBet === bet ? "bg-red-800" : "bg-transparent"
                      )}
                    >
                      <img src={diamondsIcon} alt="bet" className="w-6 h-6" />
                      <span>{bet}</span>
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    disabled={!selectedBet}
                    className={cn(
                      "w-full h-12 rounded-3xl bg-cover bg-no-repeat text-center flex items-center justify-center transition",
                      selectedBet && "bg-[#AF0000]"
                    )}
                    style={{ backgroundImage: `url(${gameButton})` }}
                  >
                    <span className="text-xl font-semibold text-white">Начать сражение</span>
                  </button>
                  <div className="mt-3 text-center text-sm text-white/80 flex items-center gap-2 justify-center">
                    <span>Потенциальный выигрыш:</span>
                    <img src={tensentIcon} alt="win" className="w-4 h-4" />
                    <span>{potentialWin}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MobileLayout>
  );
};

export default Index;