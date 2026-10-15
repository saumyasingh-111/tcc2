import React from "react";

interface AwningStripProps {
  className?: string;
  variant?: "dark-on-cream" | "cream-on-dark" | "inverted";
}

/**
 * The Signature Classic Crush Dental Awning Strip
 * Inspired by the green artisanal bakery awning seen in the approved reference PDF
 * (Pages 2, 3, 4, 5, 6)
 */
export const AwningStrip: React.FC<AwningStripProps> = ({
  className = "",
  variant = "dark-on-cream",
}) => {
  const isDarkOnCream = variant === "dark-on-cream";
  const squareColor = isDarkOnCream ? "bg-[#0F382A]" : "bg-[#F5EFEB]";
  const lineColor = isDarkOnCream ? "border-[#E2D9CC]" : "border-white/15";

  return (
    <div
      className={`w-full overflow-hidden select-none py-1.5 flex items-center justify-center border-b ${lineColor} ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5 sm:gap-2 justify-center w-full min-w-max px-2">
        {Array.from({ length: 64 }).map((_, i) => (
          <span
            key={i}
            className={`inline-block w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-[1px] transition-opacity duration-300 ${squareColor}`}
          />
        ))}
      </div>
    </div>
  );
};
