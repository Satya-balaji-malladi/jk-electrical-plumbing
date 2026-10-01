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
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}`;
};

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'hi', label: 'हिन्दी' }
];

export const DEFAULT_LANG = 'en';
