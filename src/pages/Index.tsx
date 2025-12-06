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

const Index = () => {
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
              <Button variant="ghost" className="p-0 bg-transparent hover:bg-transparent">
                <img src={pvpButton} alt="PvP" className="h-16 w-auto" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Index;