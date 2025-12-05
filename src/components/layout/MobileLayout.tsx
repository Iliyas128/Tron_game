import { ReactNode } from "react";
import BottomNavigation from "./BottomNavigation";

interface MobileLayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

const MobileLayout = ({ children, showNav = true }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-[375px] w-full mx-auto relative min-h-[812px]">
      <div className="flex-1 overflow-auto pb-[120px]">
        {children}
      </div>
      {showNav && <BottomNavigation />}
    </div>
  );
};

export default MobileLayout;