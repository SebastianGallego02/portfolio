"use client";

import { CSSProperties } from "react";

interface GothicOrnamentProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  size?: "small" | "medium" | "large" | "xlarge";
  offsetTop?: string | number;
  offsetLeft?: string | number;
  offsetRight?: string | number;
  offsetBottom?: string | number;
}

export function GothicOrnament({
  position = "top-left",
  className = "",
  size = "medium",
  offsetTop,
  offsetLeft,
  offsetRight,
  offsetBottom,
}: GothicOrnamentProps) {
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
    xlarge: "w-48 h-48",
  };

  const sizeViewBox = {
    small: "0 0 80 80",
    medium: "0 0 120 120",
    large: "0 0 160 160",
    xlarge: "0 0 192 192",
  };

  const rotations = {
    "top-left": "",
    "top-right": "rotate-90",
    "bottom-left": "-rotate-90",
    "bottom-right": "rotate-180",
  };

  // Valores válidos de Tailwind para spacing (en rem, donde 1 = 0.25rem = 4px)
  const tailwindSpacingValues = [0, 1, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96];

  // Función para obtener estilos inline o clases de Tailwind
  const getOffset = (
    offset: string | number | undefined,
    prefix: string
  ): { className?: string; style?: CSSProperties } => {
    if (!offset) return {};
    
    // Si es string y ya incluye el prefijo (clase completa de Tailwind)
    if (typeof offset === "string" && offset.includes(prefix)) {
      return { className: offset };
    }
    
    // Convertir a número
    const numValue = typeof offset === "number" ? offset : parseInt(offset, 10);
    
    // Si es NaN, retornar el string como clase
    if (isNaN(numValue)) {
      return { className: typeof offset === "string" ? `${prefix}-${offset}` : undefined };
    }
    
    // Si el valor está en los valores válidos de Tailwind, usar clase
    if (tailwindSpacingValues.includes(numValue)) {
      return { className: `${prefix}-${numValue}` };
    }
    
    // Si no, usar estilo inline (convertir a píxeles: 1 unidad = 0.25rem = 4px)
    return { 
      style: { 
        [prefix]: `${numValue * 0.25}rem` 
      } as CSSProperties 
    };
  };

  // Construir clases de posición base
  const basePositions = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  // Construir offsets personalizados
  const customOffsets: string[] = [];
  const inlineStyles: CSSProperties = {};
  
  const topOffset = getOffset(offsetTop, "top");
  const leftOffset = getOffset(offsetLeft, "left");
  const rightOffset = getOffset(offsetRight, "right");
  const bottomOffset = getOffset(offsetBottom, "bottom");
  
  if (topOffset.className) customOffsets.push(topOffset.className);
  if (topOffset.style) Object.assign(inlineStyles, topOffset.style);
  
  if (leftOffset.className) customOffsets.push(leftOffset.className);
  if (leftOffset.style) Object.assign(inlineStyles, leftOffset.style);
  
  if (rightOffset.className) customOffsets.push(rightOffset.className);
  if (rightOffset.style) Object.assign(inlineStyles, rightOffset.style);
  
  if (bottomOffset.className) customOffsets.push(bottomOffset.className);
  if (bottomOffset.style) Object.assign(inlineStyles, bottomOffset.style);

  // Si hay offsets personalizados, usar solo esos; sino usar posiciones base
  const positionClasses = customOffsets.length > 0 
    ? customOffsets.join(" ")
    : basePositions[position];

  // Rotaciones específicas - ajustadas para que cada ornament apunte hacia el centro
  const getRotation = (pos: string) => {
    if (pos === "top-right") {
      return { transform: 'rotate(45deg)' };
    }
    const rotationMap: Record<string, string> = {
      "top-left": "",
      "bottom-left": "-rotate-90",
      "bottom-right": "rotate-180",
    };
    return { className: rotationMap[pos] || "" };
  };

  const rotation = getRotation(position);
  const hasTransform = 'transform' in rotation;
  const rotationClass = !hasTransform ? rotation.className || "" : "";

  return (
    <div 
      className={`absolute ${positionClasses} ${className} pointer-events-none`}
      style={Object.keys(inlineStyles).length > 0 ? inlineStyles : undefined}
    >
      <svg
        className={`${sizeClasses[size]} text-white ${rotationClass}`}
        viewBox={sizeViewBox[size]}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.6)) drop-shadow(0 0 8px rgba(168,85,247,0.4))',
          ...(hasTransform ? rotation : {})
        }}
      >
        {/* Main organic swirls - Hollow Knight style */}
        {/* Top edge flow */}
        <path
          d="M0 8 Q10 4 20 8 Q30 12 40 8 Q50 4 60 8 Q70 12 80 8"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        {/* Left edge flow */}
        <path
          d="M8 0 Q4 10 8 20 Q12 30 8 40 Q4 50 8 60 Q12 70 8 80"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Secondary intricate curves */}
        <path
          d="M0 12 Q8 6 16 12 Q24 18 16 24 Q8 30 0 24"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M12 0 Q6 8 12 16 Q18 24 24 18 Q30 12 24 0"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Delicate inner swirls */}
        <path
          d="M4 4 Q12 8 20 6 Q28 4 36 8 Q44 12 48 6"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M4 4 Q8 12 6 20 Q4 28 8 36 Q12 44 6 48"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Sharp pointed tips at corners */}
        <path
          d="M0 0 L12 6 L0 16"
          stroke="currentColor"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0 0 L6 12 L16 0"
          stroke="currentColor"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Organic branching lines */}
        <path
          d="M6 6 Q12 12 18 10 Q24 8 30 12 Q36 16 42 14"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M6 6 Q10 12 8 18 Q6 24 10 30 Q14 36 8 42"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Small decorative elements */}
        <circle cx="30" cy="30" r="3" fill="currentColor" />
        <circle cx="50" cy="20" r="2.5" fill="currentColor" />
        <circle cx="20" cy="50" r="2.5" fill="currentColor" />
        
        {/* Additional fine details */}
        <path
          d="M24 24 Q30 22 36 24 Q30 26 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}
