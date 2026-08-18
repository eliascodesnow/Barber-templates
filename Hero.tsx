import { ChevronDown, Star } from "lucide-react";
import { useInView } from "./useInView";

interface HeroProps {
  shopName: string;
  tagline: string;
  description: string;
  heroImage: string;
  onBookNow: () => void;
}

export default function Hero({
  shopName,
  tagline,
  description,
  heroImage,
  onBookNow,
}: HeroProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={shopName}
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/40" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gold/3 rounded-full blur-2xl" />

      {/* Content */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <Star className="w-3.5 h-3.5 text-gold fill-gold" />
            <span className="text-xs font-medium text-gold tracking-widest uppercase">
              Premium Grooming Experience
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 ${
              isInView ? "animate-fade-in-up animation-delay-100" : "opacity-0"
            }`}
          >
            <span className="text-white">{tagline.split(" ").slice(0, -1).join(" ")}</span>
            <br />
            <span className="text-gradient">{tagline.split(" ").slice(-1)}</span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg sm:text-xl text-white/60 max-w-xl mb-10 leading-relaxed ${
              isInView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            {description}
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 ${
              isInView ? "animate-fade-in-up animation-delay-300" : "opacity-0"
            }`}
          >
            <button
              onClick={onBookNow}
              className="group bg-gold hover:bg-gold-light text-dark font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 tracking-widest uppercase flex items-center justify-center gap-2"
            >
              Book Appointment
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-white/20 hover:border-gold/40 text-white hover:text-gold font-medium text-sm px-8 py-4 rounded-full transition-all duration-300 tracking-widest uppercase text-center"
            >
              View Services
            </a>
          </div>

          {/* Stats */}
          <div
            className={`flex gap-8 sm:gap-12 mt-14 pt-8 border-t border-white/10 ${
              isInView ? "animate-fade-in-up animation-delay-400" : "opacity-0"
            }`}
          >
            {[
              { value: "10K+", label: "Happy Clients" },
              { value: "12+", label: "Years Experience" },
              { value: "4.9★", label: "Google Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-gold">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/40 mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gold/50" />
      </div>
    </section>
  );
}
