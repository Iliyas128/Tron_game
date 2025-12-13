import { ReactNode, useEffect } from "react";
import BottomNavigation from "./BottomNavigation";

interface MobileLayoutProps {
  children: ReactNode;
  showNav?: boolean;
  scrollable?: boolean;
  contentPaddingBottomClass?: string;
  fullWidth?: boolean;
}

const MobileLayout = ({
  children,
  // Nav теперь рендерится глобально в App, поэтому по умолчанию не показываем здесь
  showNav = false,
  scrollable = true,
  contentPaddingBottomClass = "pb-[10px]",
  fullWidth = false,
}: MobileLayoutProps) => {
  // When scroll is disabled, also lock body to avoid page-level scrolling on mobile.
  useEffect(() => {
    if (!scrollable) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [scrollable]);

  const containerClasses = scrollable
    ? "bg-background flex flex-col w-full mx-auto relative min-h-screen"
    : fullWidth
      ? "bg-background flex flex-col w-full relative overflow-hidden"
      : "bg-background flex flex-col w-full max-w-[390px] mx-auto relative overflow-hidden";
  const contentClasses = scrollable
    ? `flex-1 overflow-auto ${contentPaddingBottomClass}`
    : `flex-1 overflow-hidden ${contentPaddingBottomClass}`;

  return (
    <div
      className={containerClasses}
      // Fix virtual viewport to iPhone 12 Pro (390x844) to keep visual parity across devices like 14 Pro Max.
      style={
        scrollable
          ? undefined
          : fullWidth
            ? undefined
            : { height: "844px", maxHeight: "844px" }
      }
    >
      <div className={contentClasses}>
        {children}
      </div>
      {showNav && <BottomNavigation />}
    </div>
  );
};

export default MobileLayout;