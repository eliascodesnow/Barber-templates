import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";

interface NavbarProps {
  shopName: string;
  onBookNow: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ shopName, onBookNow }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <Scissors className="w-5 h-5 text-gold" />
            </div>
            <span className="font-heading text-xl font-bold tracking-wide text-white">
              {shopName}
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-white/70 hover:text-gold transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onBookNow}
              className="bg-gold hover:bg-gold-dark text-dark font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 tracking-wide uppercase"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-dark-surface/98 backdrop-blur-lg border-t border-dark-border mt-3 px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block py-3 px-4 text-sm font-medium text-white/70 hover:text-gold hover:bg-white/5 rounded-lg transition-all duration-300 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <button
              onClick={() => {
                setIsOpen(false);
                onBookNow();
              }}
              className="w-full bg-gold hover:bg-gold-dark text-dark font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 tracking-wide uppercase"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
