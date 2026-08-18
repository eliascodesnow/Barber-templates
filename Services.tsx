import { Scissors, Clock, ArrowRight } from "lucide-react";
import { useInView } from "./useInView";

interface Service {
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
}

interface ServicesProps {
  services: Service[];
  onBookService: (serviceName: string) => void;
}

function ServiceIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactElement> = {
    scissors: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
    beard: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M12 2C6.48 2 2 6 2 10c0 2 1 4 3 5.5C5 18 8 22 12 22s7-4 7-6.5C21 14 22 12 22 10c0-4-4.48-8-10-8z" />
        <path d="M8 10h0M16 10h0" />
      </svg>
    ),
    fade: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M4 20h16M4 16h12M4 12h8M4 8h4" />
        <rect x="16" y="4" width="4" height="12" rx="1" />
      </svg>
    ),
    towel: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M3 6h18v4a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
        <path d="M3 6V4a2 2 0 012-2h14a2 2 0 012 2v2" />
        <path d="M7 12v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
        <line x1="12" y1="12" x2="12" y2="16" />
      </svg>
    ),
    dreads: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M12 2c-3 0-5 2-5 4s1 3 2 4c-2 1-3 3-3 5 0 3 2 5 3 7" />
        <path d="M12 2c3 0 5 2 5 4s-1 3-2 4c2 1 3 3 3 5 0 3-2 5-3 7" />
        <path d="M12 2v20" />
      </svg>
    ),
    crown: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M2 20h20L19 8l-4 5-3-7-3 7-4-5-1 12z" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  };
  return iconMap[icon] || <Scissors className="w-7 h-7" />;
}

export default function Services({ services, onBookService }: ServicesProps) {
  const { ref: headerRef, isInView: headerVisible } = useInView();

  return (
    <section id="services" className="py-24 sm:py-32 bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 sm:mb-20">
          <span
            className={`text-gold text-xs font-semibold tracking-[0.3em] uppercase ${
              headerVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            What We Offer
          </span>
          <h2
            className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 ${
              headerVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
            }`}
          >
            Our <span className="text-gradient">Services</span>
          </h2>
          <p
            className={`text-white/50 max-w-2xl mx-auto text-lg ${
              headerVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            Every service is delivered with precision, care, and attention to detail. 
            Your satisfaction is our reputation.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={index}
              onBook={() => onBookService(service.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  onBook,
}: {
  service: Service;
  index: number;
  onBook: () => void;
}) {
  const { ref, isInView } = useInView(0.1);
  const delayClass = `animation-delay-${(index % 3) * 100 + 100}`;

  return (
    <div
      ref={ref}
      className={`group bg-dark-card border border-dark-border rounded-2xl p-7 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1 ${
        isInView ? `animate-fade-in-up ${delayClass}` : "opacity-0"
      }`}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/15 group-hover:scale-110 transition-all duration-300">
        <ServiceIcon icon={service.icon} />
      </div>

      {/* Content */}
      <h3 className="font-heading text-xl font-bold mb-2 text-white group-hover:text-gold transition-colors">
        {service.name}
      </h3>
      <p className="text-white/45 text-sm leading-relaxed mb-5">{service.description}</p>

      {/* Price & Duration */}
      <div className="flex items-center justify-between mb-5 pt-4 border-t border-dark-border">
        <span className="text-gold font-heading text-2xl font-bold">{service.price}</span>
        <span className="flex items-center gap-1.5 text-white/40 text-sm">
          <Clock className="w-3.5 h-3.5" />
          {service.duration}
        </span>
      </div>

      {/* Book button */}
      <button
        onClick={onBook}
        className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-gold text-white/70 hover:text-dark font-semibold text-sm py-3 rounded-xl transition-all duration-300 tracking-wide group/btn"
      >
        Book This Service
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
