import { Link, useLocation } from "react-router-dom";
import trophyIcon from "@/assets/trophy1.png";
import friendsIcon from "@/assets/friends1.png";
import homeIcon from "@/assets/home1.png";
import tasksIcon from "@/assets/tasksToDo1.png";
import profileIcon from "@/assets/community1.png";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: trophyIcon, path: "/leaders", className: "w-8 h-8" },
  { icon: friendsIcon, path: "/friends", className: "w-9 h-9" },
  { icon: homeIcon, path: "/", className: "w-9 h-9" },
  { icon: tasksIcon, path: "/tasks", className: "w-7 h-7" },
  { icon: profileIcon, path: "/profile", className: "w-10 h-10" },
];

const BottomNavigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0A0A0A] w-full h-[104px] z-50 bottom-nav">
      <div className="flex justify-around items-center h-full px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center rounded-lg shrink-0",
                "w-12 h-12"
              )}
            >
              <img
                src={item.icon}
                className={cn(
                  item.className ?? "w-8 h-8",
                  "object-contain select-none",
                  isActive
                    ? "grayscale-0 brightness-100"
                    : "grayscale brightness-75 opacity-85"
                )}
                alt="nav icon"
                loading="eager"
                draggable={false}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;