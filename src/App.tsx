import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Leaders from "./pages/Leaders";
import Friends from "./pages/Friends";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import PreGame from "./pages/PreGame";
import Game from "./pages/Game";
import mainBackground from "@/assets/background.svg";
import gameMainBackground from "@/assets/game/gameMainBackground.png";
import gameBackground4x from "@/assets/match/gameBackground4x.png";
import leadersTopBackground from "@/assets/leader/leadersTopBackground.svg";
import leaderRewardFull from "@/assets/leader/leaderRewardFull.png";
import leaderRewardFull1 from "@/assets/leader/leaderRewardFull1.png";
import leaderRedDots from "@/assets/leader/redDots.svg";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImage = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = src;
      });

    const assetsToPreload = [
      mainBackground,
      gameMainBackground,
      gameBackground4x,
      leadersTopBackground,
      leaderRewardFull,
      leaderRewardFull1,
      leaderRedDots,
      "/friends/friendsBackground.svg",
    ];

    Promise.all(assetsToPreload.map(preloadImage)).finally(() => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    
    console.log('Checking Telegram WebApp...', tg);
    
    if (tg) {
      console.log('Telegram WebApp found!');
      
      tg.ready();
      console.log('ready() called');
      
      tg.expand();
      console.log('expand() called');
      
      if (typeof tg.disableVerticalSwipes === 'function') {
        tg.disableVerticalSwipes();
        console.log('disableVerticalSwipes() called');
      } else {
        console.warn('disableVerticalSwipes() not available');
      }
      
      tg.enableClosingConfirmation();
      console.log('enableClosingConfirmation() called');
    } else {
      console.warn('Telegram WebApp not found - app may not be running in Telegram');
    }

    // Дополнительная защита от закрытия
    const preventClose = (e: TouchEvent) => {
      if (window.scrollY === 0) {
        const touch = e.touches[0];
        if (touch && touch.clientY > 0) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener('touchmove', preventClose, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventClose);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/leaders" element={<Leaders />} />
            <Route path="/friends" element={<Profile />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/profile" element={<Friends />} />
            <Route path="/pre-game" element={<PreGame />} />
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080808]">
          <div className="flex flex-col items-center gap-3 text-white">
            <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span className="text-sm font-montserrat text-white/80">Загрузка...</span>
          </div>
        </div>
      )}
    </QueryClientProvider>
  );
};

export default App;