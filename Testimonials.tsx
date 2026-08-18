import { Star, Quote } from "lucide-react";
import { useInView } from "./useInView";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  service: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const { ref: headerRef, isInView: headerVisible } = useInView();

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-dark-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 sm:mb-20">
          <span
            className={`text-gold text-xs font-semibold tracking-[0.3em] uppercase ${
              headerVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Testimonials
          </span>
          <h2
            className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 ${
              headerVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
            }`}
          >
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p
            className={`text-white/50 max-w-2xl mx-auto text-lg ${
              headerVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            Don't just take our word for it. Here's what our loyal clients have to say.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const { ref, isInView } = useInView(0.1);
  const isLeft = index % 2 === 0;
  const animClass = isLeft ? "animate-slide-in-left" : "animate-slide-in-right";
  const delayClass = `animation-delay-${Math.floor(index / 2) * 200 + 100}`;

  return (
    <div
      ref={ref}
      className={`bg-dark-card border border-dark-border rounded-2xl p-7 sm:p-8 relative hover:border-gold/20 transition-all duration-500 ${
        isInView ? `${animClass} ${delayClass}` : "opacity-0"
      }`}
    >
      {/* Quote icon */}
      <Quote className="w-10 h-10 text-gold/15 absolute top-6 right-6" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gold fill-gold" />
        ))}
      </div>

      {/* Text */}
      <p className="text-white/70 text-base leading-relaxed mb-6 relative z-10">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
            <span className="text-gold font-bold text-sm">
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div>
            <p className="text-white font-semibold text-sm">{testimonial.name}</p>
            <p className="text-white/30 text-xs">{testimonial.service}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
