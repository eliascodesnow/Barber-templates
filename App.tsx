import { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import BookingCTA from "./components/BookingCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { defaultShopConfig } from "./data/shopConfig";

function App() {
  const [whatsappNumber, setWhatsappNumber] = useState(() => {
    return localStorage.getItem("barber_whatsapp") || defaultShopConfig.whatsappNumber;
  });

  const config = defaultShopConfig;

  const handleSaveNumber = useCallback((number: string) => {
    setWhatsappNumber(number);
    localStorage.setItem("barber_whatsapp", number);
  }, []);

  const openWhatsApp = useCallback(
    (message?: string) => {
      const cleanNumber = whatsappNumber.replace(/[^0-9+]/g, "");
      const defaultMessage = `Hi ${config.name}! I'd like to book an appointment.`;
      const text = encodeURIComponent(message || defaultMessage);
      window.open(`https://wa.me/${cleanNumber.replace("+", "")}?text=${text}`, "_blank");
    },
    [whatsappNumber, config.name]
  );

  const handleBookNow = useCallback(() => {
    openWhatsApp();
  }, [openWhatsApp]);

  const handleBookService = useCallback(
    (serviceName: string) => {
      openWhatsApp(
        `Hi ${config.name}! I'd like to book a ${serviceName} appointment. When is the next available slot?`
      );
    },
    [openWhatsApp, config.name]
  );

  const handleBookWithBarber = useCallback(
    (barberName: string) => {
      openWhatsApp(
        `Hi ${config.name}! I'd like to book an appointment with ${barberName}. When is he available?`
      );
    },
    [openWhatsApp, config.name]
  );

  return (
    <div className="min-h-screen bg-dark">
      <Navbar shopName={config.name} onBookNow={handleBookNow} />

      <Hero
        shopName={config.name}
        tagline={config.tagline}
        description={config.description}
        heroImage={config.heroImage}
        onBookNow={handleBookNow}
      />

      <Services services={config.services} onBookService={handleBookService} />

      <About shopName={config.name} onBookNow={handleBookNow} />

      <Gallery images={config.gallery} />

      <Team team={config.team} onBookWithBarber={handleBookWithBarber} />

      <Testimonials testimonials={config.testimonials} />

      <BookingCTA onBookNow={handleBookNow} />

      <Contact
        address={config.address}
        city={config.city}
        email={config.email}
        whatsappNumber={whatsappNumber}
        hours={config.hours}
        onBookNow={handleBookNow}
      />

      <Footer shopName={config.name} />

      {/* WhatsApp floating button */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleBookNow();
        }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full shadow-xl shadow-[#25D366]/25 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 group"
        title="Chat on WhatsApp"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </a>

      {/* Settings panel for configuring WhatsApp number */}
      <WhatsAppSettings
        currentNumber={+254792656824}
        onSave={handleSaveNumber}
      />
    </div>
  );
}

export default App;
