interface RoundedRectSvgProps {
    width?: number;
    height?: number;
    backgroundColor?: string;
    borderStartColor?: string;
    borderEndColor?: string;
    onClick?: () => void;
    className?: string;
    label?: string | number;
    textColor?: string;
    fontSize?: number;
  }
  
  export default function RoundedRectSvg({ 
    width = 199,
    height = 48,
    backgroundColor = "#2E2E2E",
    borderStartColor = "#9F9F9F",
    borderEndColor = "#393939",
    onClick,
    className = "",
    label,
    textColor = "#FFFFFF",
    fontSize
  }: RoundedRectSvgProps) {
    const radius = height / 2;
    const rectWidth = width - 4;
    const rectHeight = height - 4;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Автоматический размер шрифта на основе высоты, если не задан
    const calculatedFontSize = fontSize || Math.floor(height * 0.5);
  
    return (
      <div 
        style={{ 
          position: 'relative', 
          width: `${width}px`, 
          height: `${height}px`
        }}
        onClick={onClick}
        className={`${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''} ${className}`}
      >
        <svg 
          width={width} 
          height={height} 
          viewBox={`0 0 ${width} ${height}`} 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <g>
            <mask id="path-1-inside-1" fill="white">
              <rect x="2" y="2" width={rectWidth} height={rectHeight} rx={radius - 2} ry={radius - 2}/>
            </mask>
            <rect 
              x="2" 
              y="2" 
              width={rectWidth} 
              height={rectHeight} 
              rx={radius - 2} 
              ry={radius - 2}
              fill="url(#paint0_linear)" 
              fillOpacity="0.43"
            />
            <path 
              d={`M2 2H${width - 2}H2ZM${width - 2} ${centerY}C${width - 2} ${centerY + radius - 1.19} ${width - 2 - (radius - 1.19)} ${height - 1} ${width - 2 - radius + 1} ${height - 1}H${radius + 1}C${radius + 1.19} ${height - 1} 2 ${centerY + radius - 1.19} 2 ${centerY}C2 ${centerY + radius - 2} ${radius} ${height - 3} ${radius + 2} ${height - 3}H${width - 2 - radius + 2}C${width - 2 - radius + 2} ${height - 3} ${width - 2} ${centerY + radius - 2} ${width - 2} ${centerY}ZM2 ${height - 2}V2V${height - 2}ZM${width - 2} 2V${height - 2}V2Z`}
              fill="url(#paint1_linear)" 
              fillOpacity="0.2" 
              mask="url(#path-1-inside-1)"
            />
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1={centerY} x2={width} y2={centerY} gradientUnits="userSpaceOnUse">
              <stop stopColor={backgroundColor}/>
              <stop offset="1"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="0" y1={centerY} x2={width} y2={centerY} gradientUnits="userSpaceOnUse">
              <stop stopColor={borderStartColor}/>
              <stop offset="1" stopColor={borderEndColor}/>
            </linearGradient>
          </defs>
        </svg>
        
        {label !== undefined && (
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: textColor,
              fontSize: `${calculatedFontSize}px`,
              fontWeight: 'bold',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
          >
            {label}
          </div>
        )}
      </div>
    );
  }