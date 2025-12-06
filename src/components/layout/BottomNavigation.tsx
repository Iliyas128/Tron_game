import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import trophyIcon from "@/assets/trophy.png";
import friendsIcon from "@/assets/friends.png";
import homeIcon from "@/assets/home.png";
import tasksIcon from "@/assets/tasksToDo.png";
import profileIcon from "@/assets/community.png";

const navItems = [
  { icon: trophyIcon, path: "/leaders" },
  { icon: friendsIcon, path: "/friends" },
  { icon: homeIcon, path: "/" },
  { icon: tasksIcon, path: "/tasks" },
  { icon: profileIcon, path: "/profile" },
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
                  "transition-all",
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