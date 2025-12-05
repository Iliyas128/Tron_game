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
      <MobileLayout scrollable={false}>
        <div
          className="min-h-screen bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${background})` }}
        >
        <Header />
        
        <div className="px-1">
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
        <div className="relative rounded-2xl overflow-hidden h-[500px]">
          <img
            src={mainBackground}
            alt="Main background"
            className="absolute inset-0 w-[400px] h-full object-top"
          />
          <div className="relative flex items-end justify-center h-[450px] px-6 pb-6">
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