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

      <button className="relative h-[79px] w-[84px] rounded-full overflow-hidden">
  {/* красный обод сверху: толще в центре, тоньше по бокам */}
  <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg_at_50%_0%,transparent_0deg,#C60000_40deg,#C60000_140deg,transparent_220deg,transparent_360deg)]" />

  {/* тёмный фон */}
  <span className="absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,#1A1A1A_0%,#0A0A0A_100%)] shadow-[0_10px_25px_rgba(0,0,0,0.35)]" />

  {/* контент */}
  <span className="relative z-10 flex h-full w-full flex-col items-center justify-center">
    <span className="text-white text-[28px] leading-none font-semibold">3</span>
    <span className="text-[#9B9B9B] text-[13px] leading-tight font-semibold">сек</span>
  </span>
</button>
      </div>
    </MobileLayout>
  );
};

export default Profile;