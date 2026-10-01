export const BUSINESS_INFO = {
  name: "JK Electrical & Plumbing Services",
  owner: "Jithendra Kopisetti",
  phone: "9542292199",
  phoneLink: "tel:9542292199",
  whatsappNumber: "919542292199",
  location: "Ravulapalem, Andhra Pradesh, India",
  experience: "5+ years",
  emergencyAvailability: "24/7",
  serviceRadius: "Approximately 50 km"
};

export const getWhatsAppLink = () => {
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20electrical%2Fplumbing%20services.%20Please%20let%20me%20know%20the%20availability%20and%20details.%20Thank%20you.`;
};

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'hi', label: 'हिन्दी' }
];

export const DEFAULT_LANG = 'en';
