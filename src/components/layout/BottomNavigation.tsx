import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import trophyIcon from "@/assets/trophy1.png";
import friendsIcon from "@/assets/friends1.png";
import homeIcon from "@/assets/home1.png";
import tasksIcon from "@/assets/tasksToDo1.png";
import profileIcon from "@/assets/community1.png";

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
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0A0A0A] w-full h-[104px]">
      <div className="flex justify-around items-center h-full px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center rounded-lg transition-all",
                isActive 
                  ? "text-white" 
                  : "text-primary hover:text-foreground"
              )}
            >
              <img
                src={item.icon}
                className={cn(
                  item.className ?? "w-7 h-7",
                  "object-contain transition-all",
                  isActive
                    ? "filter brightness-0 invert"
                    : "filter grayscale brightness-75 opacity-80"
                )}
                alt="nav icon"
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;