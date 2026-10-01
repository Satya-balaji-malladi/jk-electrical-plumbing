import fs from 'fs';
import path from 'path';

const i18nDir = 'c:/Users/DELL/Desktop/FRELANCING PROJECTS/JK ELECTRONICS/src/i18n';

const stage6Keys = {
  en: {
    "service_area.eyebrow": "SERVICE AREA",
    "service_area.title": "Serving Ravulapalem & Nearby Areas",
    "service_area.desc": "JK Electrical & Plumbing Services provides electrical and plumbing services in Ravulapalem and nearby villages and towns within approximately 50 km.",
    "service_area.base": "Base Location:",
    "service_area.base_val": "Ravulapalem, Andhra Pradesh",
    "service_area.coverage": "Service Coverage:",
    "service_area.coverage_val": "Approximately 50 km around Ravulapalem",
    "service_area.services": "Services:",
    "service_area.services_val": "Electrical + Plumbing",
    "service_area.emergency": "Emergency:",
    "service_area.emergency_val": "24/7 Emergency Service",
    "service_area.map.approx": "Approximate service area",
    "service_area.map.ravulapalem": "Ravulapalem",
    "service_area.map.nearby": "Nearby Areas",
    "service_area.map.50km": "Approx. 50 km",
    "service_area.map.villages": "Nearby villages and towns",
    "service_area.map.availability": "Depends on location and service requirement",
    "service_area.cta.title": "Need Service in Your Area?",
    "service_area.cta.desc": "Call or WhatsApp JK to check service availability for your location.",
    "service_area.cta.check": "Check service availability"
  },
  te: {
    "service_area.eyebrow": "సేవా ప్రాంతం",
    "service_area.title": "రావులపాలెం & సమీప ప్రాంతాలలో సేవలు",
    "service_area.desc": "JK ఎలక్ట్రికల్ & ప్లంబింగ్ సర్వీసెస్ రావులపాలెం మరియు సుమారు 50 కి.మీ పరిధిలోని సమీప గ్రామాలు మరియు పట్టణాలలో ఎలక్ట్రికల్ మరియు ప్లంబింగ్ సేవలను అందిస్తుంది.",
    "service_area.base": "ప్రధాన స్థానం:",
    "service_area.base_val": "రావులపాలెం, ఆంధ్రప్రదేశ్",
    "service_area.coverage": "సేవా పరిధి:",
    "service_area.coverage_val": "రావులపాలెం చుట్టూ సుమారు 50 కి.మీ",
    "service_area.services": "సేవలు:",
    "service_area.services_val": "ఎలక్ట్రికల్ + ప్లంబింగ్",
    "service_area.emergency": "అత్యవసరం:",
    "service_area.emergency_val": "24/7 అత్యవసర సేవ",
    "service_area.map.approx": "సుమారు సేవా ప్రాంతం",
    "service_area.map.ravulapalem": "రావులపాలెం",
    "service_area.map.nearby": "సమీప ప్రాంతాలు",
    "service_area.map.50km": "సుమారు 50 కి.మీ",
    "service_area.map.villages": "సమీప గ్రామాలు మరియు పట్టణాలు",
    "service_area.map.availability": "స్థానం మరియు సేవ యొక్క అవసరాన్ని బట్టి లభిస్తుంది",
    "service_area.cta.title": "మీ ప్రాంతంలో సేవ కావాలా?",
    "service_area.cta.desc": "మీ స్థానం కోసం సేవ అందుబాటులో ఉందో లేదో తనిఖీ చేయడానికి JK కు కాల్ చేయండి లేదా WhatsApp చేయండి.",
    "service_area.cta.check": "సేవ లభ్యతను తనిఖీ చేయండి"
  },
  hi: {
    "service_area.eyebrow": "सेवा क्षेत्र",
    "service_area.title": "राउलपालेम और आस-पास के क्षेत्रों में सेवाएँ",
    "service_area.desc": "JK इलेक्ट्रिकल और प्लंबिंग सर्विसेज राउलपालेम और लगभग 50 किमी के भीतर आस-पास के गांवों और कस्बों में इलेक्ट्रिकल और प्लंबिंग सेवाएं प्रदान करती है।",
    "service_area.base": "मुख्य स्थान:",
    "service_area.base_val": "राउलपालेम, आंध्र प्रदेश",
    "service_area.coverage": "सेवा कवरेज:",
    "service_area.coverage_val": "राउलपालेम के आसपास लगभग 50 किमी",
    "service_area.services": "सेवाएँ:",
    "service_area.services_val": "इलेक्ट्रिकल + प्लंबिंग",
    "service_area.emergency": "आपातकालीन:",
    "service_area.emergency_val": "24/7 आपातकालीन सेवा",
    "service_area.map.approx": "अनुमानित सेवा क्षेत्र",
    "service_area.map.ravulapalem": "राउलपालेम",
    "service_area.map.nearby": "आस-पास के क्षेत्र",
    "service_area.map.50km": "लगभग 50 किमी",
    "service_area.map.villages": "आस-पास के गाँव और कस्बे",
    "service_area.map.availability": "स्थान और सेवा की आवश्यकता पर निर्भर करता है",
    "service_area.cta.title": "क्या आपको अपने क्षेत्र में सेवा चाहिए?",
    "service_area.cta.desc": "अपने स्थान के लिए सेवा की उपलब्धता की जांच करने के लिए JK को कॉल या WhatsApp करें।",
    "service_area.cta.check": "सेवा की उपलब्धता जांचें"
  }
};

['en', 'te', 'hi'].forEach(lang => {
  const filePath = path.join(i18nDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const updatedData = { ...data, ...stage6Keys[lang] };
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
    console.log(`Updated ${lang}.json`);
  } else {
    console.log(`${lang}.json not found`);
  }
});
