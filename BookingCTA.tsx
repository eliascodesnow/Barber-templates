import { MessageCircle } from "lucide-react";
import { useInView } from "../hooks/useInView";

interface BookingCTAProps {
  onBookNow: () => void;
}

export default function BookingCTA({ onBookNow }: BookingCTAProps) {
  const { ref, isInView } = useInView(0.2);

  return (
    <section className="py-24 sm:py-32 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(200,169,96,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div
          className={`${isInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-8">
            <MessageCircle className="w-8 h-8 text-gold" />
          </div>
        </div>

        <h2
          className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
            isInView ? "animate-fade-in-up animation-delay-100" : "opacity-0"
          }`}
        >
          Ready for a <span className="text-gradient">Fresh Look?</span>
        </h2>

        <p
          className={`text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${
            isInView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}
        >
          Book your appointment instantly via WhatsApp. No waiting, no hassle. 
          Just send us a message and we'll get you sorted.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center ${
            isInView ? "animate-fade-in-up animation-delay-300" : "opacity-0"
          }`}
        >
          <button
            onClick={onBookNow}
            className="group inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1FAD53] text-white font-bold text-sm px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/25 tracking-wide"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book via WhatsApp
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <p
          className={`text-white/25 text-sm mt-6 ${
            isInView ? "animate-fade-in-up animation-delay-400" : "opacity-0"
          }`}
        >
          We typically respond within 5 minutes during business hours
        </p>
      </div>
    </section>
  );
}
