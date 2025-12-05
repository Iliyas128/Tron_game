import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import trophyIcon from "@/assets/trophy.svg";
import friendsIcon from "@/assets/friends.svg";
import homeIcon from "@/assets/home.svg";
import tasksIcon from "@/assets/tasksToDo.svg";
import profileIcon from "@/assets/community.svg";

const navItems = [
  { icon: trophyIcon, label: "Лидеры", path: "/leaders" },
  { icon: friendsIcon, label: "Друзья", path: "/friends" },
  { icon: homeIcon, label: "Главная", path: "/" },
  { icon: tasksIcon, label: "Задания", path: "/tasks" },
  { icon: profileIcon, label: "Профиль", path: "/profile" },
];

const BottomNavigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border max-w-[375px] mx-auto h-[104px]">
      <div className="flex justify-around items-center h-full px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all",
                isActive 
                  ? "text-white" 
                  : "text-primary hover:text-foreground"
              )}
            >
              <img
                src={item.icon}
                alt={item.label}
                className={cn(
                  " nav-icon transition-all",
                  isActive ? "nav-icon-active" : "nav-icon-inactive"
                )}
              />
              <span className="text-[10px] font-medium leading-[12px]">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;