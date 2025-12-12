import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        expand: () => void;
        enableClosingConfirmation: () => void;
        disableVerticalSwipes: () => void;
      };
    };
  }
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Leaders from "./pages/Leaders";
import Friends from "./pages/Friends";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import PreGame from "./pages/PreGame";
import Game from "./pages/Game";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Расширяем WebApp на весь экран и выключаем вертикальные свайпы
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.enableClosingConfirmation();
      window.Telegram.WebApp.disableVerticalSwipes();
    }
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
    </QueryClientProvider>
  );
};

export default App;