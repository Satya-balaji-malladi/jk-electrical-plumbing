import fs from 'fs';

const enPath = './src/i18n/en.json';
const tePath = './src/i18n/te.json';
const hiPath = './src/i18n/hi.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const te = JSON.parse(fs.readFileSync(tePath, 'utf8'));
const hi = JSON.parse(fs.readFileSync(hiPath, 'utf8'));

const newEn = {
  "contact.eyebrow": "NEED SERVICE?",
  "contact.title": "Need Electrical or Plumbing Help?",
  "contact.desc": "Contact JK Electrical & Plumbing Services for electrical and plumbing requirements in Ravulapalem and nearby areas.",
  "footer.desc": "Professional electrical and plumbing services for homes in Ravulapalem and nearby areas.",
  "footer.services": "Services",
  "footer.contact": "Contact",
  "footer.elec": "Electrical Services",
  "footer.plumb": "Plumbing Services",
  "footer.emerg": "Emergency Service",
  "footer.location": "Ravulapalem, Andhra Pradesh, India",
  "footer.area": "Approximately 50 km around Ravulapalem",
  "footer.rights": "© 2026 JK Electrical & Plumbing Services. All rights reserved."
};

const newTe = {
  "contact.eyebrow": "సేవ కావాలా?",
  "contact.title": "ఎలక్ట్రికల్ లేదా ప్లంబింగ్ సహాయం కావాలా?",
  "contact.desc": "రావులపాలెం మరియు సమీప ప్రాంతాల్లో ఎలక్ట్రికల్ మరియు ప్లంబింగ్ అవసరాల కోసం JK ఎలక్ట్రికల్ & ప్లంబింగ్ సర్వీసెస్‌ను సంప్రదించండి.",
  "footer.desc": "రావులపాలెం మరియు సమీప ప్రాంతాల్లోని గృహాల కోసం వృత్తిపరమైన ఎలక్ట్రికల్ మరియు ప్లంబింగ్ సేవలు.",
  "footer.services": "సేవలు",
  "footer.contact": "సంప్రదించండి",
  "footer.elec": "ఎలక్ట్రికల్ సేవలు",
  "footer.plumb": "ప్లంబింగ్ సేవలు",
  "footer.emerg": "అత్యవసర సేవ",
  "footer.location": "రావులపాలెం, ఆంధ్రప్రదేశ్, భారతదేశం",
  "footer.area": "రావులపాలెం చుట్టూ సుమారు 50 కి.మీ",
  "footer.rights": "© 2026 JK ఎలక్ట్రికల్ & ప్లంబింగ్ సర్వీసెస్. సర్వ హక్కులు ప్రత్యేకించబడ్డాయి."
};

const newHi = {
  "contact.eyebrow": "क्या आपको सेवा चाहिए?",
  "contact.title": "क्या आपको इलेक्ट्रिकल या प्लंबिंग सहायता चाहिए?",
  "contact.desc": "रावुलपालेम और आस-पास के क्षेत्रों में इलेक्ट्रिकल और प्लंबिंग आवश्यकताओं के लिए JK इलेक्ट्रिकल और प्लंबिंग सेवाओं से संपर्क करें।",
  "footer.desc": "रावुलपालेम और आस-पास के क्षेत्रों में घरों के लिए पेशेवर इलेक्ट्रिकल और प्लंबिंग सेवाएं।",
  "footer.services": "सेवाएं",
  "footer.contact": "संपर्क करें",
  "footer.elec": "इलेक्ट्रिकल सेवाएं",
  "footer.plumb": "प्लंबिंग सेवाएं",
  "footer.emerg": "आपातकालीन सेवा",
  "footer.location": "रावुलपालेम, आंध्र प्रदेश, भारत",
  "footer.area": "रावुलपालेम के आसपास लगभग 50 किमी",
  "footer.rights": "© 2026 JK इलेक्ट्रिकल एंड प्लंबिंग सर्विसेज। सर्वाधिकार सुरक्षित।"
};

fs.writeFileSync(enPath, JSON.stringify({ ...en, ...newEn }, null, 2));
fs.writeFileSync(tePath, JSON.stringify({ ...te, ...newTe }, null, 2));
fs.writeFileSync(hiPath, JSON.stringify({ ...hi, ...newHi }, null, 2));
console.log('Translations updated for Stage 9.');
