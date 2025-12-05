import { ChevronDown } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.svg";

interface HeaderProps {
  onExit?: () => void;
}

const Header = ({ onExit }: HeaderProps) => {
  const navigate = useNavigate();
  const handleExit = onExit ?? (() => navigate(-1));

  return (
    <header className="flex px-2 items-center justify-between bg-background/80 backdrop-blur-sm sticky top-0 z-10 max-w-[375px] mx-auto h-[118px]">
      <button
        onClick={handleExit}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-semibold"
      >
        <ChevronLeft className="w-6 h-6" />
        <span>
          Выход
        </span>
      </button>

      <div className="flex items-center justify-center flex-1 px-4">
        <img src={logo} alt="TRON" className="h-5 object-contain" />
      </div>

      <button className="flex items-center gap-2 px-3 py-2 rounded-full bg-secondary text-sm font-semibold">
        <ChevronDown className="w-6 h-6" />
        <span>&middot;&middot;&middot;</span>
      </button>
    </header>
  );
};

export default Header;