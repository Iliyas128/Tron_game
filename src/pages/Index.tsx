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
import pvpButton from "@/assets/pvpButton.svg";

const games = [
  { id: 1, name: "Dice", icon: Dice1, players: 234, hot: true },
  { id: 2, name: "Дуэль", icon: Target, players: 156, hot: false },
  { id: 3, name: "Команды", icon: Users, players: 89, hot: true },
];

const quickActions = [
  { label: "Быстрая игра", icon: Gamepad2, variant: "primary" as const },
  { label: "Турниры", icon: Star, variant: "secondary" as const },
];

const Index = () => {
  return (
      <MobileLayout>
        <Header />
        
        <div>
        <div className="flex justify-between mt-0 px-2">
          <div>
            <span className="text-base font-medium">Балансы</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={diamondsIcon} alt="Diamonds" className="w-4 h-4" />
            <span>17</span>
            <img src={goldsIcon} alt="Golds" className="w-4 h-4" />
            <span>1.829</span>
          </div>
         </div>   

      {/* Hero Banner */}
      <div className="bg-[url('/src/assets/backgroundInMain.svg')] bg-cover bg-no-repeat bg-center h-[107px] rounded-2xl">
        <div className="flex items-center">
    
    {/* Аватар */}
        <div className="py-4 pl-4 pr-3">
          <img src={avatar} alt="avatar" />
        </div>

    {/* Информация (все тексты в одну линию) */}
        <div className="flex flex-col pl-2">
          <h1 className="text-white text-2xl font-semibold leading-none">Name Username</h1>
          <p className="text-gray-500 text-xs opacity-80 leading-none mt-1">@user_name</p>

      {/* Две "кнопки" как div */}
              <div className="flex items-center gap-2 mt-2">

        {/* Серый блок */}
                <div className="px-3 py-1 bg-gray-700/70 text-white text-sm rounded-md">
                  Cyber Warriors
                </div>

        {/* Красный блок */}
                <div className="flex  px-3 py-1 bg-red-700 text-white text-sm rounded-md">
                  <img src={miniCupsIcon} alt="miniCups" className="pr-1 pb-0.5"/>
                 <span className="text-xs">7983</span>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div className="relative w-full rounded-2xl overflow-hidden mt-4 h-[560px]">
          <img
            src={mainBackground}
            alt="Main background"
            className="absolute inset-0 w-full h-full object-contain object-top"
          />
          <div className="relative flex items-end justify-center h-[420px] px-6 pb-6">
            <Button variant="ghost" className="p-0 bg-transparent hover:bg-transparent">
              <img src={pvpButton} alt="PvP" className="h-16 w-auto" />
            </Button>
          </div>
        </div>

      </div>
      </MobileLayout>
  );
};

export default Index;