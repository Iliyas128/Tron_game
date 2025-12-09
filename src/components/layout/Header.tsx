import { ChevronDown } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.svg";

interface HeaderProps {
  onExit?: () => void;
  bgClassName?: string;
}

const Header = ({ onExit, bgClassName }: HeaderProps) => {
  const navigate = useNavigate();
  const handleExit = onExit ?? (() => navigate(-1));

  return (
    <header
      className={`flex items-center pt-8 sticky z-10 max-w-[435px] mx-auto h-[118px] ${
        bgClassName ?? "bg-[#080B12]"
      }`}
    >
      <div className="flex justify-center flex-1 px-4">
        <img src={logo} alt="TRON" className="h-5 object-contain" />
      </div>
    </header>
  );
};

export default Header;