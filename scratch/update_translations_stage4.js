import fs from 'fs';

const enPath = './src/i18n/en.json';
const tePath = './src/i18n/te.json';
const hiPath = './src/i18n/hi.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const te = JSON.parse(fs.readFileSync(tePath, 'utf8'));
const hi = JSON.parse(fs.readFileSync(hiPath, 'utf8'));

const newEn = {
  "emergency.eyebrow": "24/7 EMERGENCY SERVICE",
  "emergency.title": "Electrical or Plumbing Emergency?",
  "emergency.desc": "Call or WhatsApp JK Electrical & Plumbing Services for emergency service enquiries in Ravulapalem and nearby areas.",
  "emergency.elec_title": "Electrical Emergencies",
  "emergency.plumb_title": "Plumbing Emergencies",
  "emergency.cta_desc": "Call us directly for emergency service enquiries."
};

const newTe = {
  "emergency.eyebrow": "24/7 అత్యవసర సేవ",
  "emergency.title": "ఎలక్ట్రికల్ లేదా ప్లంబింగ్ అత్యవసరమా?",
  "emergency.desc": "రావులపాలెం మరియు పరిసర ప్రాంతాలలో అత్యవసర సేవా విచారణల కోసం JK ఎలక్ట్రికల్ & ప్లంబింగ్ సేవలకు కాల్ లేదా వాట్సాప్ చేయండి.",
  "emergency.elec_title": "ఎలక్ట్రికల్ అత్యవసర పరిస్థితులు",
  "emergency.plumb_title": "ప్లంబింగ్ అత్యవసర పరిస్థితులు",
  "emergency.cta_desc": "అత్యవసర సేవా విచారణల కోసం మాకు నేరుగా కాల్ చేయండి."
};

const newHi = {
  "emergency.eyebrow": "24/7 आपातकालीन सेवा",
  "emergency.title": "इलेक्ट्रिकल या प्लंबिंग आपातकाल?",
  "emergency.desc": "रावुलपालेम और आसपास के क्षेत्रों में आपातकालीन सेवा पूछताछ के लिए JK इलेक्ट्रिकल और प्लंबिंग सेवाओं को कॉल या व्हाट्सएप करें।",
  "emergency.elec_title": "इलेक्ट्रिकल आपात स्थिति",
  "emergency.plumb_title": "प्लंबिंग आपात स्थिति",
  "emergency.cta_desc": "आपातकालीन सेवा पूछताछ के लिए हमें सीधे कॉल करें।"
};

fs.writeFileSync(enPath, JSON.stringify({ ...en, ...newEn }, null, 2));
fs.writeFileSync(tePath, JSON.stringify({ ...te, ...newTe }, null, 2));
fs.writeFileSync(hiPath, JSON.stringify({ ...hi, ...newHi }, null, 2));
console.log('Translations updated.');
