import fs from 'fs';

const enPath = './src/i18n/en.json';
const tePath = './src/i18n/te.json';
const hiPath = './src/i18n/hi.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const te = JSON.parse(fs.readFileSync(tePath, 'utf8'));
const hi = JSON.parse(fs.readFileSync(hiPath, 'utf8'));

const newEn = {
  "whyjk.eyebrow": "WHY JK",
  "whyjk.title": "Practical Service for Your Home",
  "whyjk.desc": "Electrical and plumbing services for everyday repairs, installations, maintenance and emergency requirements.",
  "whyjk.f1_title": "5+ Years Experience",
  "whyjk.f1_desc": "Over 5 years of experience providing electrical and plumbing services.",
  "whyjk.f2_title": "Electrical + Plumbing",
  "whyjk.f2_desc": "Electrical and plumbing services available from one local service provider.",
  "whyjk.f3_title": "24/7 Emergency Service",
  "whyjk.f3_desc": "Emergency service enquiries are available 24/7.",
  "whyjk.f4_title": "Local Service Area",
  "whyjk.f4_desc": "Serving Ravulapalem and nearby villages and towns within approximately 50 km.",

  "how.eyebrow": "HOW IT WORKS",
  "how.title": "Getting Service Is Simple",
  "how.desc": "Contact JK, explain your requirement, and discuss the service you need.",
  "how.s1_title": "Call or WhatsApp",
  "how.s1_desc": "Contact JK Electrical & Plumbing Services by phone or WhatsApp and explain your requirement.",
  "how.s2_title": "Discuss Your Requirement",
  "how.s2_desc": "Share the electrical or plumbing issue or service you need.",
  "how.s3_title": "Get Service Assistance",
  "how.s3_desc": "Discuss the required service and next steps directly with JK."
};

const newTe = {
  "whyjk.eyebrow": "JK ఎందుకు",
  "whyjk.title": "మీ ఇంటికి ఆచరణాత్మక సేవ",
  "whyjk.desc": "రోజువారీ మరమ్మత్తులు, ఇన్‌స్టాలేషన్‌లు, నిర్వహణ మరియు అత్యవసర అవసరాల కోసం ఎలక్ట్రికల్ మరియు ప్లంబింగ్ సేవలు.",
  "whyjk.f1_title": "5+ సంవత్సరాల అనుభవం",
  "whyjk.f1_desc": "ఎలక్ట్రికల్ మరియు ప్లంబింగ్ సేవలను అందించడంలో 5 సంవత్సరాలకు పైగా అనుభవం.",
  "whyjk.f2_title": "ఎలక్ట్రికల్ + ప్లంబింగ్",
  "whyjk.f2_desc": "ఒక స్థానిక సేవా ప్రదాత నుండి ఎలక్ట్రికల్ మరియు ప్లంబింగ్ సేవలు అందుబాటులో ఉన్నాయి.",
  "whyjk.f3_title": "24/7 అత్యవసర సేవ",
  "whyjk.f3_desc": "అత్యవసర సేవా విచారణలు 24/7 అందుబాటులో ఉన్నాయి.",
  "whyjk.f4_title": "స్థానిక సేవా ప్రాంతం",
  "whyjk.f4_desc": "సుమారు 50 కిమీ పరిధిలో రావులపాలెం మరియు సమీప గ్రామాలు, పట్టణాలకు సేవలు.",

  "how.eyebrow": "ఇది ఎలా పని చేస్తుంది",
  "how.title": "సేవ పొందడం సులభం",
  "how.desc": "JKని సంప్రదించండి, మీ అవసరాన్ని వివరించండి మరియు మీకు అవసరమైన సేవ గురించి చర్చించండి.",
  "how.s1_title": "కాల్ లేదా వాట్సాప్",
  "how.s1_desc": "ఫోన్ లేదా వాట్సాప్ ద్వారా JK ఎలక్ట్రికల్ & ప్లంబింగ్ సేవలను సంప్రదించండి మరియు మీ అవసరాన్ని వివరించండి.",
  "how.s2_title": "మీ అవసరాన్ని చర్చించండి",
  "how.s2_desc": "మీకు అవసరమైన ఎలక్ట్రికల్ లేదా ప్లంబింగ్ సమస్య లేదా సేవను భాగస్వామ్యం చేయండి.",
  "how.s3_title": "సేవా సహాయం పొందండి",
  "how.s3_desc": "అవసరమైన సేవ మరియు తదుపరి దశలను నేరుగా JKతో చర్చించండి."
};

const newHi = {
  "whyjk.eyebrow": "JK क्यों",
  "whyjk.title": "आपके घर के लिए व्यावहारिक सेवा",
  "whyjk.desc": "रोजमर्रा की मरम्मत, इंस्टॉलेशन, रखरखाव और आपातकालीन आवश्यकताओं के लिए इलेक्ट्रिकल और प्लंबिंग सेवाएं।",
  "whyjk.f1_title": "5+ वर्ष का अनुभव",
  "whyjk.f1_desc": "विद्युत और नलसाजी सेवाएं प्रदान करने में 5 से अधिक वर्षों का अनुभव।",
  "whyjk.f2_title": "इलेक्ट्रिकल + प्लंबिंग",
  "whyjk.f2_desc": "एक स्थानीय सेवा प्रदाता से इलेक्ट्रिकल और प्लंबिंग सेवाएं उपलब्ध हैं।",
  "whyjk.f3_title": "24/7 आपातकालीन सेवा",
  "whyjk.f3_desc": "आपातकालीन सेवा पूछताछ 24/7 उपलब्ध हैं।",
  "whyjk.f4_title": "स्थानीय सेवा क्षेत्र",
  "whyjk.f4_desc": "लगभग 50 किमी के भीतर रावुलपालेम और आसपास के गांवों और कस्बों में सेवा।",

  "how.eyebrow": "यह कैसे काम करता है",
  "how.title": "सेवा प्राप्त करना सरल है",
  "how.desc": "JK से संपर्क करें, अपनी आवश्यकता बताएं और अपनी आवश्यक सेवा पर चर्चा करें।",
  "how.s1_title": "कॉल या व्हाट्सएप",
  "how.s1_desc": "फोन या व्हाट्सएप द्वारा JK इलेक्ट्रिकल और प्लंबिंग सेवाओं से संपर्क करें और अपनी आवश्यकता बताएं।",
  "how.s2_title": "अपनी आवश्यकता पर चर्चा करें",
  "how.s2_desc": "इलेक्ट्रिकल या प्लंबिंग समस्या या अपनी आवश्यकता को साझा करें।",
  "how.s3_title": "सेवा सहायता प्राप्त करें",
  "how.s3_desc": "सीधे JK के साथ आवश्यक सेवा और अगले चरणों पर चर्चा करें।"
};

fs.writeFileSync(enPath, JSON.stringify({ ...en, ...newEn }, null, 2));
fs.writeFileSync(tePath, JSON.stringify({ ...te, ...newTe }, null, 2));
fs.writeFileSync(hiPath, JSON.stringify({ ...hi, ...newHi }, null, 2));
console.log('Translations updated for Stage 5.');
