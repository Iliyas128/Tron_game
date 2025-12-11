interface SvgComponentProps {
    borderColor?: string;
    backgroundColor?: string;
    width?: number;
    height?: number;
    onClick?: () => void;
    className?: string;
  }
  
  export default function SvgComponent({ 
    borderColor = "#AF0000", 
    backgroundColor = "#2E2E2E",
    width = 84,
    height = 79,
    onClick,
    className = ""
  }: SvgComponentProps) {
    return (
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 84 79" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
      preserveAspectRatio="xMidYMid meet"
        onClick={onClick}
        className={`${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''} ${className}`}
      >
        <g>
          <mask id="path-1-inside-1_710_6511" fill="white">
            <path d="M0 39.5C0 17.6848 17.6848 0 39.5 0H44.5C66.3152 0 84 17.6848 84 39.5C84 61.3152 66.3152 79 44.5 79H39.5C17.6848 79 0 61.3152 0 39.5Z"/>
          </mask>
          <path d="M0 39.5C0 17.6848 17.6848 0 39.5 0H44.5C66.3152 0 84 17.6848 84 39.5C84 61.3152 66.3152 79 44.5 79H39.5C17.6848 79 0 61.3152 0 39.5Z" fill="url(#paint0_linear_710_6511)" fillOpacity="0.2"/>
          <path d="M0 39C0 15.804 18.804 -3 42 -3C65.196 -3 84 15.804 84 39V39.5C84 19.3416 66.3152 3 44.5 3H39.5C17.6848 3 0 19.3416 0 39.5V39ZM84 79H0H84ZM0 79V0V79ZM84 0V79V0Z" fill="url(#paint1_linear_710_6511)" mask="url(#path-1-inside-1_710_6511)"/>
        </g>
        <defs>
          <linearGradient id="paint0_linear_710_6511" x1="0" y1="39.5" x2="84" y2="39.5" gradientUnits="userSpaceOnUse">
            <stop stopColor={backgroundColor}/>
            <stop offset="1"/>
          </linearGradient>
          <linearGradient id="paint1_linear_710_6511" x1="0" y1="39.5" x2="84" y2="39.5" gradientUnits="userSpaceOnUse">
            <stop stopColor={borderColor}/>
            <stop offset="1" stopColor={borderColor}/>
          </linearGradient>
        </defs>
      </svg>
    );
  }