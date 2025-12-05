import { useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import { Trophy, Medal, Award, ChevronRight } from "lucide-react";

const tabs = ["Черная пятница", "Рефералы", "Баланс"];

const leaderboardData = [
  { id: 1, name: "Черная-пятница23", rank: 1, balance: 15000, avatar: null },
  { id: 2, name: "Мое место", rank: 154, balance: 1240, avatar: null, isMe: true },
  { id: 3, name: "Разыграно: 10 000", rank: null, balance: null, isInfo: true },
  { id: 4, name: "Emil-Rakhman", rank: 3, balance: 8500, avatar: null },
];

const topPlayers = [
  { id: 1, name: "Player1", balance: 15000, rank: 1 },
  { id: 2, name: "Player2", balance: 12500, rank: 2 },
  { id: 3, name: "Player3", balance: 10000, rank: 3 },
];

const Leaders = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <MobileLayout>
      <Header />
      
      <div className="px-4 py-4">
        <h2 className="text-2xl font-bold mb-4">Лидеры</h2>
        
        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                activeTab === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Top 3 Podium */}
        <div className="flex justify-center items-end gap-2 mb-6">
          {/* 2nd Place */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-secondary border-2 border-muted mb-2 flex items-center justify-center">
              <Medal className="w-6 h-6 text-muted-foreground" />
            </div>
            <span className="text-xs text-muted-foreground">2</span>
            <span className="text-xs font-medium truncate max-w-16">Player2</span>
          </div>
          
          {/* 1st Place */}
          <div className="flex flex-col items-center -mt-4">
            <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary mb-2 flex items-center justify-center glow-red">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
            <span className="text-xs text-primary font-bold">1</span>
            <span className="text-xs font-medium truncate max-w-20">Player1</span>
          </div>
          
          {/* 3rd Place */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-secondary border-2 border-muted mb-2 flex items-center justify-center">
              <Award className="w-6 h-6 text-muted-foreground" />
            </div>
            <span className="text-xs text-muted-foreground">3</span>
            <span className="text-xs font-medium truncate max-w-16">Player3</span>
          </div>
        </div>

        {/* Leaderboard List */}
        <div className="space-y-2">
          {leaderboardData.map((player) => (
            <div
              key={player.id}
              className={cn(
                "flex items-center gap-3 p-3 rounded-xl",
                player.isMe ? "bg-primary/20 border border-primary/50" : "bg-card",
                player.isInfo && "bg-secondary"
              )}
            >
              {!player.isInfo && (
                <>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold">
                    {player.rank}
                  </div>
                  <div className="flex-1">
                    <p className={cn("font-medium", player.isMe && "text-primary")}>{player.name}</p>
                    {player.balance && (
                      <p className="text-sm text-muted-foreground">{player.balance.toLocaleString()} ₽</p>
                    )}
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </>
              )}
              {player.isInfo && (
                <div className="flex-1 text-center">
                  <p className="text-primary font-medium">{player.name}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Leaders;