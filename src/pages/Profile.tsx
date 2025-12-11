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
import SvgComponent from "@/components/svgElementButton";

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
        <SvgComponent />
      </div>
    </MobileLayout>
  );
};

export default Profile;