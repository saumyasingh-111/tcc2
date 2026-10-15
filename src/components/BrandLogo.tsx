import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "badge" | "horizontal";
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  size = "md",
  variant = "badge",
  showSubtitle = true,
}) => {
  const sizeMap = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-14 h-14",
    xl: "w-20 h-20",
  };

  const badgeElement = (
    <div
      className={`relative rounded-full flex items-center justify-center shrink-0 shadow-xs border border-[#C99742]/80 bg-[#0F382A] text-[#FAF6F0] transition-transform duration-300 ${sizeMap[size]}`}
    >
      {/* Decorative Gold Inner Circle */}
      <div className="absolute inset-[2.5px] rounded-full border border-[#C99742]/50 pointer-events-none" />

      {/* TCC Monogram */}
      <div className="flex flex-col items-center justify-center leading-none text-center">
        <span className="font-serif tracking-[0.08em] font-bold text-white text-[13px] sm:text-[15px]">
          TCC
        </span>
        <span className="text-[6.5px] tracking-[0.24em] font-sans font-medium text-[#C99742] uppercase -mt-0.5">
          EST. 2024
        </span>
      </div>
    </div>
  );

  if (variant === "badge") {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        {badgeElement}
        {showSubtitle && (
          <div className="flex flex-col text-left">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.14em] uppercase text-[#0F382A] leading-tight">
              The Classic Crush
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.32em] font-semibold text-[#6E776F]">
              Bakery &amp; Café
            </span>
          </div>
        )}
      </div>
    );
  }

  return <div className={`inline-block ${className}`}>{badgeElement}</div>;
};
