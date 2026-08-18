import { MapPin, Mail, Clock, Phone } from "lucide-react";
import { useInView } from "../hooks/useInView";

interface ContactProps {
  address: string;
  city: string;
  email: string;
  whatsappNumber: string;
  hours: { day: string; time: string }[];
  onBookNow: () => void;
}

export default function Contact({
  address,
  city,
  email,
  whatsappNumber,
  hours,
  onBookNow,
}: ContactProps) {
  const { ref: headerRef, isInView: headerVisible } = useInView();

  return (
    <section id="contact" className="py-24 sm:py-32 bg-dark-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 sm:mb-20">
          <span
            className={`text-gold text-xs font-semibold tracking-[0.3em] uppercase ${
              headerVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Get In Touch
          </span>
          <h2
            className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 ${
              headerVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
            }`}
          >
            Find <span className="text-gradient">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Location */}
          <ContactCard
            icon={<MapPin className="w-6 h-6" />}
            title="Location"
            index={0}
          >
            <p className="text-white/60">{address}</p>
            <p className="text-white/60">{city}</p>
          </ContactCard>

          {/* Hours */}
          <ContactCard
            icon={<Clock className="w-6 h-6" />}
            title="Working Hours"
            index={1}
          >
            {hours.map((h) => (
              <div key={h.day} className="flex justify-between text-sm">
                <span className="text-white/40">{h.day}</span>
                <span className="text-white/70 font-medium">{h.time}</span>
              </div>
            ))}
          </ContactCard>

          {/* Contact */}
          <ContactCard
            icon={<Phone className="w-6 h-6" />}
            title="Contact"
            index={2}
          >
            <div className="space-y-3">
              <a
                href={`tel:${whatsappNumber}`}
                className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{whatsappNumber}</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{email}</span>
              </a>
              <button
                onClick={onBookNow}
                className="mt-3 w-full bg-gold/10 hover:bg-gold/20 border border-gold/20 text-gold font-semibold text-sm py-3 rounded-xl transition-all duration-300 tracking-wide"
              >
                WhatsApp Us
              </button>
            </div>
          </ContactCard>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  children,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  index: number;
}) {
  const { ref, isInView } = useInView(0.1);
  const delayClass = `animation-delay-${index * 100 + 100}`;

  return (
    <div
      ref={ref}
      className={`bg-dark-card border border-dark-border rounded-2xl p-7 hover:border-gold/20 transition-all duration-500 ${
        isInView ? `animate-fade-in-up ${delayClass}` : "opacity-0"
      }`}
    >
      <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
