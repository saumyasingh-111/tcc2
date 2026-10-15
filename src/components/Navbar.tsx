import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BrandLogo } from "./BrandLogo";
import { AwningStrip } from "./AwningStrip";
import { VegBadge } from "./VegBadge";
import { useOrder } from "../context/OrderContext";
import { Menu, X, ShoppingBag, ArrowRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount, openDrawer } = useOrder();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/our-story" },
    { name: "Menu", path: "/menu" },
    { name: "Gifting", path: "/gifting" },
    { name: "Gallery", path: "/gallery" },
    { name: "Visit Us", path: "/visit-us" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-[#F5EFEB]/95 backdrop-blur-md border-b border-[#E2D9CC] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Left: Circular TCC Seal & Wordmark */}
          <NavLink
            to="/"
            className="group flex items-center gap-3 transition-opacity hover:opacity-95"
            onClick={() => setMobileMenuOpen(false)}
          >
            <BrandLogo size="md" />
            <VegBadge size="sm" className="hidden lg:inline-flex" />
          </NavLink>

          {/* Center: Navigation Links in Title Case (matching PDF) */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `text-xs lg:text-[13px] tracking-[0.14em] transition-all duration-200 py-1.5 font-medium relative ${
                    isActive
                      ? "text-[#0F382A] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#0F382A]"
                      : "text-[#162820]/75 hover:text-[#0F382A] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-transparent hover:after:bg-[#0F382A]/30"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTAs: Shopping Bag & Order Now Pill Button */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* Shopping Bag Button with Live Counter Badge */}
            <button
              onClick={openDrawer}
              className="relative p-2.5 rounded-full bg-[#E8DFD1]/80 text-[#0F382A] hover:bg-[#E8DFD1] transition-all duration-200 cursor-pointer"
              title="View your order cart"
              aria-label="View order bag"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#0F382A] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#F5EFEB] shadow-xs">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Signature "Order Now →" Forest Green Pill Button */}
            <button
              onClick={openDrawer}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] rounded-full bg-[#0F382A] text-[#FAF6F0] hover:bg-[#184D3B] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
            >
              <span>Order Now</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu & Bag Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={openDrawer}
              className="relative p-2 rounded-full bg-[#E8DFD1]/80 text-[#0F382A]"
              aria-label="View cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#0F382A] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0F382A] hover:bg-[#E8DFD1]/60"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Signature Scalloped Dental Awning Strip (Directly beneath Navbar) */}
      <AwningStrip />

      {/* Mobile Menu Slide-out */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b border-[#E2D9CC] px-5 py-6 space-y-4 animate-hero-fade">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm tracking-[0.14em] py-2 px-3 rounded-lg transition-colors font-medium ${
                    isActive
                      ? "bg-[#0F382A] text-white font-semibold"
                      : "text-[#162820] hover:bg-[#E8DFD1]/50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E2D9CC] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openDrawer();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#0F382A] text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-full shadow-sm"
            >
              <span>Order Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <Link
              to="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 border border-[#0F382A] text-[#0F382A] text-xs font-semibold uppercase tracking-[0.16em] rounded-full"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
