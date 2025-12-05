import MobileLayout from "@/components/layout/MobileLayout";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import { 
  Settings, 
  CreditCard, 
  Bell, 
  Shield, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Camera,
  Edit2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: CreditCard, label: "Платежи", path: "/payments" },
  { icon: Bell, label: "Уведомления", path: "/notifications" },
  { icon: Shield, label: "Безопасность", path: "/security" },
  { icon: Settings, label: "Настройки", path: "/settings" },
  { icon: HelpCircle, label: "Помощь", path: "/help" },
];

const stats = [
  { label: "Игр", value: 234 },
  { label: "Побед", value: 156 },
  { label: "Рейтинг", value: "#154" },
];

const Profile = () => {
  return (
    <MobileLayout>
      <Header />
      
      <div className="px-4 py-4">
        {/* Profile Card */}
        <div className="bg-card rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-secondary border-2 border-primary glow-red" />
              <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <Camera className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold">Name Username</h2>
                <button className="text-muted-foreground hover:text-foreground">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground">@username</p>
              <p className="text-sm text-primary mt-1">VIP статус</p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Баланс</p>
              <p className="text-2xl font-bold">12 450 ₽</p>
            </div>
            <Button className="gradient-red">
              Пополнить
            </Button>
          </div>
        </div>

        {/* Menu */}
        <div className="bg-card rounded-2xl overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 p-4 hover:bg-secondary/50 transition-colors",
                index !== menuItems.length - 1 && "border-b border-border"
              )}
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <item.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <span className="flex-1 text-left font-medium">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}
        </div>

        {/* Logout */}
        <Button 
          variant="ghost" 
          className="w-full mt-6 text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Выйти
        </Button>
      </div>
    </MobileLayout>
  );
};

export default Profile;