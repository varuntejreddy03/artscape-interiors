// Brand identity and verified business details for Artscape Interiors

export const BRAND = {
  name: "ARTSCAPE INTERIORS",
  shortName: "Artscape",
  tagline: "Designing dream spaces.",
  supportingMessage: "Let's design your dream space.",
  heroHeadline: "Spaces that inspire.\nInteriors that belong.",
  heroSupportingText: "We design clean, modern, and comfortable homes. Every space is planned with care, quality materials, and smart everyday living in mind.",
  
  location: {
    area: "Kondapur",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    fullAddress: "Kondapur, Hyderabad, Telangana, India",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30449.803798991783!2d78.34586948512165!3d17.468702319047913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a1c8631bb5%3A0x90a599b4d1b72e09!2sKondapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapDirectUrl: "https://maps.google.com/?q=Kondapur,+Hyderabad,+Telangana"
  },
  
  contact: {
    phone: "7702020318",
    phoneDisplay: "+91 77020 20318",
    email: "artscapeinteriors0139@gmail.com",
    instagram: "https://www.instagram.com/artscape.interiors?xtok=MTNnZzJuOTN1NjFldg==",
    instagramHandle: "@artscape.interiors",
    whatsappNumber: "917702020318"
  },
  
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 5:00 PM" },
    { days: "Sunday", time: "10:00 AM – 2:00 PM" }
  ]
};

// Live Studio Status Helper based on IST (Indian Standard Time)
export function getStudioStatus() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istDate = new Date(utc + (3600000 * 5.5));
  
  const day = istDate.getDay(); // 0: Sun, 1: Mon, ..., 6: Sat
  const hours = istDate.getHours();
  const minutes = istDate.getMinutes();
  const currentTimeInMinutes = hours * 60 + minutes;

  // Sunday: 10:00 AM to 2:00 PM
  if (day === 0) {
    const openTime = 10 * 60;
    const closeTime = 14 * 60;
    const isOpen = currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime;
    return {
      isOpen,
      text: isOpen ? "Studio Open (until 2:00 PM)" : "Studio Closed (Opens Sunday 10 AM)",
      closingTime: "2:00 PM"
    };
  } else {
    // Monday to Saturday: 10:00 AM to 5:00 PM
    const openTime = 10 * 60;
    const closeTime = 17 * 60;
    const isOpen = currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime;
    return {
      isOpen,
      text: isOpen ? "Studio Open (until 5:00 PM)" : "Studio Closed (Opens 10:00 AM)",
      closingTime: "5:00 PM"
    };
  }
}
