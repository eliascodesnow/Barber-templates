export interface ShopConfig {
  name: string;
  tagline: string;
  description: string;
  whatsappNumber: string;
  address: string;
  city: string;
  email: string;
  hours: { day: string; time: string }[];
  services: {
    name: string;
    description: string;
    price: string;
    duration: string;
    icon: string;
  }[];
  team: {
    name: string;
    role: string;
    experience: string;
    image: string;
  }[];
  testimonials: {
    name: string;
    text: string;
    rating: number;
    service: string;
  }[];
  gallery: string[];
  heroImage: string;
}

export const defaultShopConfig: ShopConfig = {
  name: "Kinyozi Kings",
  tagline: "Where Kings Get Crowned",
  description:
    "Nairobi's finest barbershop experience. Precision cuts, premium grooming, and a vibe that keeps you coming back. Walk in a gentleman, leave a king.",
  whatsappNumber: "+254712345678",
  address: "Kenyatta Avenue, CBD",
  city: "Nairobi, Kenya",
  email: "info@kinyozikings.co.ke",
  hours: [
    { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
    { day: "Saturday", time: "7:00 AM - 9:00 PM" },
    { day: "Sunday", time: "9:00 AM - 6:00 PM" },
  ],
  services: [
    {
      name: "Classic Cut",
      description:
        "Clean, sharp, and precise. Our signature cut tailored to your face shape and style.",
      price: "KES 500",
      duration: "30 min",
      icon: "scissors",
    },
    {
      name: "Beard Sculpting",
      description:
        "Expert beard shaping, lining, and conditioning for that distinguished look.",
      price: "KES 400",
      duration: "25 min",
      icon: "beard",
    },
    {
      name: "Skin Fade",
      description:
        "Seamless gradient from skin to length. The most requested style in Nairobi.",
      price: "KES 700",
      duration: "45 min",
      icon: "fade",
    },
    {
      name: "Hot Towel Shave",
      description:
        "Traditional straight razor shave with hot towels and premium aftercare.",
      price: "KES 600",
      duration: "35 min",
      icon: "towel",
    },
    {
      name: "Dreadlock Maintenance",
      description:
        "Retwisting, interlocking, and styling for clean, well-maintained locs.",
      price: "KES 1,500",
      duration: "60 min",
      icon: "dreads",
    },
    {
      name: "The Full Experience",
      description:
        "Haircut, beard trim, hot towel, and scalp massage. The complete royal treatment.",
      price: "KES 1,200",
      duration: "75 min",
      icon: "crown",
    },
  ],
  team: [
    {
      name: "Brian Ochieng",
      role: "Master Barber & Founder",
      experience: "12 years experience",
      image:
        "https://images.pexels.com/photos/7697429/pexels-photo-7697429.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    },
    {
      name: "Kevin Mwangi",
      role: "Senior Barber",
      experience: "8 years experience",
      image:
        "https://images.pexels.com/photos/7697324/pexels-photo-7697324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    },
    {
      name: "Samuel Kiprop",
      role: "Style Specialist",
      experience: "6 years experience",
      image:
        "https://images.pexels.com/photos/7697205/pexels-photo-7697205.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    },
  ],
  testimonials: [
    {
      name: "James Kariuki",
      text: "Best barbershop in Nairobi hands down. Brian always gives me the cleanest fade. My go-to spot every two weeks.",
      rating: 5,
      service: "Skin Fade",
    },
    {
      name: "David Otieno",
      text: "The Full Experience is worth every shilling. Hot towel, scalp massage, perfect cut. I walk out feeling like a new man every time.",
      rating: 5,
      service: "The Full Experience",
    },
    {
      name: "Michael Njoroge",
      text: "Finally found a barber who understands what I want without me having to explain it every time. Kevin is a legend with the clippers.",
      rating: 5,
      service: "Classic Cut",
    },
    {
      name: "Peter Kamau",
      text: "Clean shop, professional barbers, great music. The vibe here is unmatched. Plus the booking through WhatsApp is super convenient.",
      rating: 5,
      service: "Beard Sculpting",
    },
  ],
  gallery: [
    "https://images.pexels.com/photos/7447152/pexels-photo-7447152.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    "https://images.pexels.com/photos/7447148/pexels-photo-7447148.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    "https://images.pexels.com/photos/7447136/pexels-photo-7447136.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    "https://images.pexels.com/photos/7697358/pexels-photo-7697358.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    "https://images.pexels.com/photos/7447149/pexels-photo-7447149.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    "https://images.pexels.com/photos/7697640/pexels-photo-7697640.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
  ],
  heroImage:
    "https://images.pexels.com/photos/7447136/pexels-photo-7447136.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920",
};
