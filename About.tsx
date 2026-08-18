import { Award, Users, Clock, Sparkles } from "lucide-react";
import { useInView } from "./useInView";

interface AboutProps {
  shopName: string;
  onBookNow: () => void;
}

export default function About({ shopName, onBookNow }: AboutProps) {
  const { ref: contentRef, isInView: contentVisible } = useInView(0.1);

  const features = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Award-Winning Cuts",
      description: "Recognized for excellence in men's grooming across East Africa.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Skilled Team",
      description: "Hand-picked barbers with years of professional training.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Always On Time",
      description: "Respect your time with punctual appointments, every time.",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Premium Products",
      description: "Only the finest grooming products touch your hair and skin.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image composition */}
          <div
            className={`relative ${
              contentVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7447127/pexels-photo-7447127.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="Barber at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-8 sm:right-0 md:-right-6 bg-dark-card border border-gold/20 rounded-2xl p-5 shadow-2xl">
              <div className="text-3xl font-heading font-bold text-gold">5+</div>
              <div className="text-white/50 text-sm">Years of<br />Excellence</div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`${
              contentVisible ? "animate-slide-in-right animation-delay-200" : "opacity-0"
            }`}
          >
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
              Why Choose Us
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-4 mb-6">
              More Than a <span className="text-gradient">Haircut</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              At {shopName}, we believe every man deserves to look and feel his best. 
              Our barbershop is a space where craftsmanship meets community — a place 
              to unwind, connect, and walk out with unshakable confidence.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold/15 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-0.5">{feature.title}</h4>
                    <p className="text-white/35 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={onBookNow}
              className="bg-gold hover:bg-gold-dark text-dark font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 tracking-widest uppercase"
            >
              Book Your Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
