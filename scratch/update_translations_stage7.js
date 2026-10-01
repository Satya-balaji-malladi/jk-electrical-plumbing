import fs from 'fs';

const enPath = './src/i18n/en.json';
const tePath = './src/i18n/te.json';
const hiPath = './src/i18n/hi.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const te = JSON.parse(fs.readFileSync(tePath, 'utf8'));
const hi = JSON.parse(fs.readFileSync(hiPath, 'utf8'));

const newEn = {
  "showcase.eyebrow": "SERVICE SHOWCASE",
  "showcase.title": "See the Services We Provide",
  "showcase.desc": "A visual look at common electrical and plumbing services provided by JK Electrical & Plumbing Services.",
  "showcase.note": "Illustrative service images. Actual work photos can be added later.",
  "showcase.filter_all": "All",
  "showcase.filter_electrical": "Electrical",
  "showcase.filter_plumbing": "Plumbing",
  "showcase.cat_electrical": "ELECTRICAL",
  "showcase.cat_plumbing": "PLUMBING",
  "showcase.cta_title": "Need a Service?",
  "showcase.cta_desc": "Call or WhatsApp JK Electrical & Plumbing Services to discuss your requirement."
};

const newTe = {
  "showcase.eyebrow": "సేవా ప్రదర్శన",
  "showcase.title": "మేము అందించే సేవలను చూడండి",
  "showcase.desc": "JK ఎలక్ట్రికల్ & ప్లంబింగ్ సర్వీసెస్ అందించే సాధారణ ఎలక్ట్రికల్ మరియు ప్లంబింగ్ సేవల దృశ్య రూపం.",
  "showcase.note": "దృష్టాంత సేవా చిత్రాలు. వాస్తవ పని ఫోటోలను తర్వాత జోడించవచ్చు.",
  "showcase.filter_all": "అన్నీ",
  "showcase.filter_electrical": "ఎలక్ట్రికల్",
  "showcase.filter_plumbing": "ప్లంబింగ్",
  "showcase.cat_electrical": "ఎలక్ట్రికల్",
  "showcase.cat_plumbing": "ప్లంబింగ్",
  "showcase.cta_title": "సేవ కావాలా?",
  "showcase.cta_desc": "మీ అవసరాన్ని చర్చించడానికి JK కు కాల్ చేయండి లేదా WhatsApp చేయండి."
};

const newHi = {
  "showcase.eyebrow": "सेवा प्रदर्शन",
  "showcase.title": "हमारे द्वारा प्रदान की जाने वाली सेवाएँ देखें",
  "showcase.desc": "JK इलेक्ट्रिकल और प्लंबिंग सेवाओं द्वारा प्रदान की जाने वाली सामान्य इलेक्ट्रिकल और प्लंबिंग सेवाओं का दृश्य रूप।",
  "showcase.note": "चित्रणात्मक सेवा छवियां। वास्तविक कार्य फ़ोटो बाद में जोड़े जा सकते हैं।",
  "showcase.filter_all": "सभी",
  "showcase.filter_electrical": "इलेक्ट्रिकल",
  "showcase.filter_plumbing": "प्लंबिंग",
  "showcase.cat_electrical": "इलेक्ट्रिकल",
  "showcase.cat_plumbing": "प्लंबिंग",
  "showcase.cta_title": "क्या आपको सेवा चाहिए?",
  "showcase.cta_desc": "अपनी आवश्यकता पर चर्चा करने के लिए JK को कॉल या WhatsApp करें।"
};

fs.writeFileSync(enPath, JSON.stringify({ ...en, ...newEn }, null, 2));
fs.writeFileSync(tePath, JSON.stringify({ ...te, ...newTe }, null, 2));
fs.writeFileSync(hiPath, JSON.stringify({ ...hi, ...newHi }, null, 2));
console.log('Translations updated for Stage 7.');
