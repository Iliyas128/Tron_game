import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/layout/MobileLayout";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Gamepad2, Dice1, Target, Users, Flame, Star, ArrowRight } from "lucide-react";
import diamondsIcon from "@/assets/diamonds.svg";
import goldsIcon from "@/assets/golds.svg";
import miniCupsIcon from "@/assets/miniCups.svg";
import whiteDiamondsIcon from "@/assets/whiteDiamondIcons.png";
import avatar from "@/assets/mainUserLogo.webp";
import mainBackgroundExceptR from "@/assets/mainBackgroundExceptR.svg";
import mainBackground from "@/assets/mainJustRobot57.webp";
import background from "@/assets/background.svg";
import pvpButton from "@/assets/pvpButton.svg";
import redFrame407 from "@/assets/redFrame407.svg";
import tensentIcon from "@/assets/tensent.svg";
import gameButton from "@/assets/gameButton.png";

const Index = () => {
  const navigate = useNavigate();
  const [showBetModal, setShowBetModal] = useState(false);
  const [selectedBet, setSelectedBet] = useState<number | null>(null);
  const potentialWin = selectedBet ? Math.round(selectedBet * 1.2 * 100) / 100 : 0;

  useEffect(() => {
    if (showBetModal) {
      document.body.classList.add("nav-hidden");
    } else {
      document.body.classList.remove("nav-hidden");
    }
    return () => document.body.classList.remove("nav-hidden");
  }, [showBetModal]);

  return (
    <MobileLayout scrollable={false} contentPaddingBottomClass="pb-0">
      <div
        className="relative bg-cover bg-no-repeat pb-28"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 pointer-events-none" />
        <Header />

        <div className="px-4 mx-[0.5vh]">
          <div className="flex justify-between items-center mt-1 mb-3">
            <span className="text-sm font-semibold text-white font-montserrat">Балансы</span>
            <div className="flex items-center gap-3 text-white text-base font-semibold">
              <div className="flex items-center gap-1">
                <img src={diamondsIcon} alt="Diamonds" className="w-4 h-4" />
                <span className="font-montserrat font-semibold text-sm">17</span>
              </div>
              <div className="flex items-center gap-1">
                <img src={goldsIcon} alt="Golds" className="w-4 h-4" />
                <span className="font-montserrat font-semibold text-sm">3.2</span>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-[url('/src/assets/backgroundInMain.svg')] bg-cover bg-no-repeat bg-center rounded-2xl px-4 py-4 flex gap-4 items-center">
            <div className="shrink-0">
              <img src={avatar} alt="avatar" className="w-20 h-20 rounded-2xl" />
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              <h1 className="text-white text-xl leading-[22px] font-bold leading-tight truncate font-montserrat">
                Name Username
              </h1>
              <p className="text-gray-500 text-sm leading-none font-montserrat">@user_name</p>
              <div className="flex pt-0.5 items-center gap-3 ">
                <div className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-sm font-montserrat">
                  Cyber Warriors
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-[#b10000] text-white text-sm rounded-sm">
                  <img src={miniCupsIcon} alt="miniCups" className="w-3 h-3" />
                  <span className="text-sm font-semibold font-montserrat">7983</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main hero */}
          <div
            className="relative rounded-3xl overflow-hidden mt-4 "
            style={{ height: "clamp(380px, 68vh, 760px)" }}
          >
            <img
              src={mainBackgroundExceptR}
              alt="Main background layer"
              className="absolute inset-x-0 bottom-0 w-full object-cover object-bottom"
              style={{ top: "14%" }}
            />
            <img
              src={mainBackground}
              alt="Main robot"
              className="absolute inset-0 pb-[20vh] w-full h-[full] object-contain z-10"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-[19vh] z-20 pointer-events-none">
              <Button
                variant="ghost"
                className="p-0 bg-transparent hover:bg-transparent pointer-events-auto"
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
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white text-5xl font-jura leading-none"
                onClick={() => setShowBetModal(false)}
              >
                ×
              </button>

              <div className="px-6 pt-14 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-[24px] font-jura font-bold">Сделайте ставку</h3>
                  <p className="text-[12px] font-montserrat font-medium text-[#9f9f9f] leading-snug">
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
                        "flex items-center gap-2 px-3 py-2 rounded-xl text-lg font-semibold transition",
                        selectedBet === bet ? "bg-red-800" : "bg-transparent"
                      )}
                    >
                      <img
                        src={whiteDiamondsIcon}
                        alt="bet"
                        className={cn(
                          "w-5 h-5 transition",
                          selectedBet === bet
                            ? "filter brightness-0 invert"
                            : "filter grayscale brightness-75 opacity-80"
                        )}
                      />
                      <span>{bet}</span>
                    </button>
                  ))}
                </div>

                <div >
                  <button
                    disabled={!selectedBet}
                    className={cn(
                      "w-full h-12 rounded-3xl bg-cover bg-no-repeat text-center flex items-center justify-center transition",
                      selectedBet && "bg-[#AF0000]"
                    )}
                    style={{ backgroundImage: `url(${gameButton})` }}
                    onClick={() => {
                      if (!selectedBet) return;
                      setShowBetModal(false);
                      navigate("/pre-game");
                    }}
                  >
                    <span className="text-[16px] font-montserrat pt-0.5 font-semibold text-white">Начать сражение</span>
                  </button>
                  <div className="mt-3 text-center text-sm font-montserrat font-medium text-[#9f9f9f] flex items-center gap-2 justify-center">
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