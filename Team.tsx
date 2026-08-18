import { useInView } from "./useInView";

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  image: string;
}

interface TeamProps {
  team: TeamMember[];
  onBookWithBarber: (barberName: string) => void;
}

export default function Team({ team, onBookWithBarber }: TeamProps) {
  const { ref: headerRef, isInView: headerVisible } = useInView();

  return (
    <section id="team" className="py-24 sm:py-32 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 sm:mb-20">
          <span
            className={`text-gold text-xs font-semibold tracking-[0.3em] uppercase ${
              headerVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Meet The Crew
          </span>
          <h2
            className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 ${
              headerVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
            }`}
          >
            Master <span className="text-gradient">Barbers</span>
          </h2>
          <p
            className={`text-white/50 max-w-2xl mx-auto text-lg ${
              headerVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            Skilled hands, creative minds, and a passion for making you look your absolute best.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              index={index}
              onBook={() => onBookWithBarber(member.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  index,
  onBook,
}: {
  member: TeamMember;
  index: number;
  onBook: () => void;
}) {
  const { ref, isInView } = useInView(0.1);
  const delayClass = `animation-delay-${(index % 3) * 100 + 100}`;

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl ${
        isInView ? `animate-fade-in-up ${delayClass}` : "opacity-0"
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />

        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-heading text-2xl font-bold text-white mb-1">{member.name}</h3>
          <p className="text-gold text-sm font-medium mb-1">{member.role}</p>
          <p className="text-white/40 text-xs tracking-wide">{member.experience}</p>

          {/* Book button */}
          <button
            onClick={onBook}
            className="mt-4 bg-gold/90 hover:bg-gold text-dark font-semibold text-xs px-5 py-2.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 tracking-widest uppercase"
          >
            Book with {member.name.split(" ")[0]}
          </button>
        </div>
      </div>
    </div>
  );
}
