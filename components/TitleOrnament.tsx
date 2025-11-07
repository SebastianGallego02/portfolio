"use client";

interface TitleOrnamentProps {
  position: "top" | "bottom";
}

export function TitleOrnament({ position }: TitleOrnamentProps) {
  if (position === "top") {
    return (
      <svg
        width="400"
        height="40"
        viewBox="0 0 400 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-md mx-auto"
      >
        <path
          d="M200 35 Q200 25 190 25 L180 25 Q170 25 170 15 Q170 5 180 5 L190 5"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-gray-300"
        />
        <path
          d="M200 35 Q200 25 210 25 L220 25 Q230 25 230 15 Q230 5 220 5 L210 5"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-gray-300"
        />
        <circle cx="165" cy="15" r="3" fill="currentColor" className="text-gray-300" />
        <circle cx="235" cy="15" r="3" fill="currentColor" className="text-gray-300" />
        <circle cx="150" cy="20" r="2.5" fill="currentColor" className="text-gray-300" />
        <circle cx="250" cy="20" r="2.5" fill="currentColor" className="text-gray-300" />
        <circle cx="140" cy="25" r="2" fill="currentColor" className="text-gray-300" />
        <circle cx="260" cy="25" r="2" fill="currentColor" className="text-gray-300" />
        
        {/* Decorative swirls */}
        <path
          d="M130 15 Q125 15 125 20 Q125 25 130 25"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-gray-300"
        />
        <path
          d="M270 15 Q275 15 275 20 Q275 25 270 25"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-gray-300"
        />
      </svg>
    );
  }

  return (
    <svg
      width="400"
      height="60"
      viewBox="0 0 400 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md mx-auto"
    >
      <path
        d="M200 5 Q200 15 190 15 L180 15 Q170 15 170 25 Q170 35 180 35 L190 35"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="text-gray-300"
      />
      <path
        d="M200 5 Q200 15 210 15 L220 15 Q230 15 230 25 Q230 35 220 35 L210 35"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="text-gray-300"
      />
      
      {/* Central ornament */}
      <path
        d="M200 5 L195 15 L200 25 L205 15 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        className="text-gray-300"
      />
      <path
        d="M200 25 L190 35 L200 50 L210 35 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-gray-300"
      />
      
      <circle cx="165" cy="25" r="3" fill="currentColor" className="text-gray-300" />
      <circle cx="235" cy="25" r="3" fill="currentColor" className="text-gray-300" />
      <circle cx="150" cy="20" r="2.5" fill="currentColor" className="text-gray-300" />
      <circle cx="250" cy="20" r="2.5" fill="currentColor" className="text-gray-300" />
      <circle cx="140" cy="15" r="2" fill="currentColor" className="text-gray-300" />
      <circle cx="260" cy="15" r="2" fill="currentColor" className="text-gray-300" />
      
      {/* Decorative swirls */}
      <path
        d="M130 25 Q125 25 125 30 Q125 35 130 35"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-gray-300"
      />
      <path
        d="M270 25 Q275 25 275 30 Q275 35 270 35"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-gray-300"
      />
    </svg>
  );
}
