import { useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import { UserPlus, Search, Copy, Gift } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const tabs = ["Лидеры", "Друзья"];

const friendsData = [
  { id: 1, name: "Name Surname", status: "online", balance: 2500 },
  { id: 2, name: "Name Surname", status: "offline", balance: 1800 },
  { id: 3, name: "Name Surname", status: "online", balance: 3200 },
];

const referralStats = {
  total: 156,
  earned: 5400,
  code: "TRON2024",
};

const Friends = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <MobileLayout>
      <Header />
      
      <div className="px-4 py-4">
        <h2 className="text-2xl font-bold mb-4">Мои друзья</h2>
        
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={cn(
                "flex-1 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-card rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">{referralStats.total}</p>
            <p className="text-xs text-muted-foreground">Друзей</p>
          </div>
          <div className="bg-card rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">{referralStats.earned.toLocaleString()} ₽</p>
            <p className="text-xs text-muted-foreground">Заработано</p>
          </div>
        </div>

        {/* Referral Code */}
        <div className="bg-card rounded-xl p-4 mb-6">
          <p className="text-sm text-muted-foreground mb-2">Список друзей</p>
          <div className="flex gap-2">
            <Input 
              value={referralStats.code} 
              readOnly 
              className="bg-secondary border-none"
            />
            <Button size="icon" variant="secondary">
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Поиск друзей" 
            className="pl-10 bg-secondary border-none"
          />
        </div>

        {/* Friends List */}
        <div className="space-y-2">
          {friendsData.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center gap-3 p-3 rounded-xl bg-card"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-secondary" />
                <div className={cn(
                  "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card",
                  friend.status === "online" ? "bg-green-500" : "bg-muted-foreground"
                )} />
              </div>
              <div className="flex-1">
                <p className="font-medium">{friend.name}</p>
                <p className="text-sm text-muted-foreground">{friend.balance.toLocaleString()} ₽</p>
              </div>
              <Button size="sm" variant="ghost" className="text-primary">
                <Gift className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <Button className="gradient-red">
            <UserPlus className="w-4 h-4 mr-2" />
            Пригласить друга
          </Button>
          <Button variant="secondary">
            Пригласить друга
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Friends;