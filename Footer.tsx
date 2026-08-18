import { Scissors, Heart } from "lucide-react";

interface FooterProps {
  shopName: string;
}

export default function Footer({ shopName }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
              <Scissors className="w-4 h-4 text-gold" />
            </div>
            <span className="font-heading text-lg font-bold text-white">{shopName}</span>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            {["Services", "Gallery", "Team", "Reviews", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white/40 hover:text-gold transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-sm flex items-center gap-1">
            © {currentYear} {shopName}. Made with <Heart className="w-3.5 h-3.5 text-gold fill-gold" /> in Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
