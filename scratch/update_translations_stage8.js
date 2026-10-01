import fs from 'fs';

const enPath = './src/i18n/en.json';
const tePath = './src/i18n/te.json';
const hiPath = './src/i18n/hi.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const te = JSON.parse(fs.readFileSync(tePath, 'utf8'));
const hi = JSON.parse(fs.readFileSync(hiPath, 'utf8'));

const newEn = {
  "reviews.eyebrow": "CUSTOMER FEEDBACK",
  "reviews.title": "What Our Customers Say",
  "reviews.desc": "Verified customer feedback will be added here as it becomes available.",
  "reviews.empty_msg": "Real customer reviews will be displayed here.",
  "reviews.cta": "Have you used our service? Contact us to share your feedback.",
  
  "faq.title": "Frequently Asked Questions",
  "faq.desc": "Quick answers about our electrical and plumbing services.",
  
  "faq.q1": "What areas do you serve?",
  "faq.a1": "We provide electrical and plumbing services in Ravulapalem and nearby villages and towns, with an approximate service area of 50 km. Service availability may depend on the location.",
  
  "faq.q2": "Do you provide emergency electrical and plumbing services?",
  "faq.a2": "Yes. JK Electrical & Plumbing Services provides 24/7 emergency service for electrical and plumbing requirements.",
  
  "faq.q3": "What electrical services do you provide?",
  "faq.a3": "Services include house wiring, electrical repairs, light and fan installation, switch and socket repairs, MCB installation or replacement, short-circuit repair, inverter installation and wiring, fault finding, maintenance, and other electrical work.",
  
  "faq.q4": "What plumbing services do you provide?",
  "faq.a4": "Services include tap repair or replacement, shower installation and repair, toilet repair and installation, sink installation and repair, water and pipe leakage repair, pipe installation and replacement, bathroom plumbing, water tank connections, drainage blockage repair, and plumbing maintenance.",
  
  "faq.q5": "Do you provide both electrical and plumbing services?",
  "faq.a5": "Yes. JK Electrical & Plumbing Services provides both electrical and plumbing services.",
  
  "faq.q6": "How can I request a service?",
  "faq.a6": "You can contact Jithendra directly by phone or WhatsApp and explain the electrical or plumbing requirement.",
  
  "faq.q7": "Do you provide services for homes?",
  "faq.a7": "Yes. Residential and home-service requirements are a primary focus. Commercial electrical and plumbing services are also included in the service list.",
  
  "faq.q8": "How can I check whether my location is covered?",
  "faq.a8": "Contact us by phone or WhatsApp with your location. We can confirm service availability for your area.",
  
  "faq.q9": "Is pricing available on the website?",
  "faq.a9": "Service requirements can vary, so pricing is not listed as a fixed amount on the website. Contact us with your requirement for further discussion.",
  
  "faq.q10": "How can I contact JK Electrical & Plumbing Services?",
  "faq.a10": "Call 9542292199 or contact us through WhatsApp.",
  
  "faq.cta_title": "Need Electrical or Plumbing Service?",
  "faq.cta_desc": "Contact JK Electrical & Plumbing Services directly for your requirement."
};

const newTe = {
  "reviews.eyebrow": "కస్టమర్ ఫీడ్‌బ్యాక్",
  "reviews.title": "మా కస్టమర్లు ఏమంటున్నారు",
  "reviews.desc": "ధృవీకరించబడిన కస్టమర్ ఫీడ్‌బ్యాక్ అందుబాటులోకి వచ్చినప్పుడు ఇక్కడ జోడించబడుతుంది.",
  "reviews.empty_msg": "నిజమైన కస్టమర్ సమీక్షలు ఇక్కడ ప్రదర్శించబడతాయి.",
  "reviews.cta": "మీరు మా సేవను ఉపయోగించారా? మీ అభిప్రాయాన్ని పంచుకోవడానికి మమ్మల్ని సంప్రదించండి.",
  
  "faq.title": "తరచుగా అడిగే ప్రశ్నలు",
  "faq.desc": "మా ఎలక్ట్రికల్ మరియు ప్లంబింగ్ సేవల గురించి శీఘ్ర సమాధానాలు.",
  
  "faq.q1": "మీరు ఏ ప్రాంతాల్లో సేవలు అందిస్తారు?",
  "faq.a1": "మేము రావులపాలెం మరియు సుమారు 50 కిమీ పరిధిలోని సమీప గ్రామాలు మరియు పట్టణాల్లో ఎలక్ట్రికల్ మరియు ప్లంబింగ్ సేవలను అందిస్తాము. సేవ లభ్యత స్థానంపై ఆధారపడి ఉంటుంది.",
  
  "faq.q2": "మీరు అత్యవసర ఎలక్ట్రికల్ మరియు ప్లంబింగ్ సేవలను అందిస్తారా?",
  "faq.a2": "అవును. JK ఎలక్ట్రికల్ & ప్లంబింగ్ సర్వీసెస్ ఎలక్ట్రికల్ మరియు ప్లంబింగ్ అవసరాల కోసం 24/7 అత్యవసర సేవను అందిస్తుంది.",
  
  "faq.q3": "మీరు ఏ ఎలక్ట్రికల్ సేవలను అందిస్తారు?",
  "faq.a3": "సేవలలో హౌస్ వైరింగ్, ఎలక్ట్రికల్ మరమ్మతులు, లైట్ మరియు ఫ్యాన్ ఇన్‌స్టాలేషన్, స్విచ్ మరియు సాకెట్ మరమ్మతులు, MCB ఇన్‌స్టాలేషన్ లేదా రీప్లేస్‌మెంట్, షార్ట్-సర్క్యూట్ రిపేర్, ఇన్‌వర్టర్ ఇన్‌స్టాలేషన్ మరియు వైరింగ్, ఫాల్ట్ ఫైండింగ్, నిర్వహణ మరియు ఇతర ఎలక్ట్రికల్ పనులు ఉన్నాయి.",
  
  "faq.q4": "మీరు ఏ ప్లంబింగ్ సేవలను అందిస్తారు?",
  "faq.a4": "సేవలలో ట్యాప్ రిపేర్ లేదా రీప్లేస్‌మెంట్, షవర్ ఇన్‌స్టాలేషన్ మరియు రిపేర్, టాయిలెట్ రిపేర్ మరియు ఇన్‌స్టాలేషన్, సింక్ ఇన్‌స్టాలేషన్ మరియు రిపేర్, వాటర్ మరియు పైప్ లీకేజీ రిపేర్, పైప్ ఇన్‌స్టాలేషన్ మరియు రీప్లేస్‌మెంట్, బాత్రూమ్ ప్లంబింగ్, వాటర్ ట్యాంక్ కనెక్షన్లు, డ్రైనేజీ బ్లాకేజ్ రిపేర్ మరియు ప్లంబింగ్ మెయింటెనెన్స్ ఉన్నాయి.",
  
  "faq.q5": "మీరు ఎలక్ట్రికల్ మరియు ప్లంబింగ్ సేవలను అందిస్తారా?",
  "faq.a5": "అవును. JK ఎలక్ట్రికల్ & ప్లంబింగ్ సర్వీసెస్ ఎలక్ట్రికల్ మరియు ప్లంబింగ్ సేవలను అందిస్తుంది.",
  
  "faq.q6": "నేను సేవను ఎలా అభ్యర్థించగలను?",
  "faq.a6": "మీరు ఫోన్ లేదా వాట్సాప్ ద్వారా నేరుగా జితేంద్రను సంప్రదించి, ఎలక్ట్రికల్ లేదా ప్లంబింగ్ అవసరాన్ని వివరించవచ్చు.",
  
  "faq.q7": "మీరు ఇళ్ల కోసం సేవలను అందిస్తారా?",
  "faq.a7": "అవును. రెసిడెన్షియల్ మరియు హోమ్-సర్వీస్ అవసరాలు ప్రధాన దృష్టి. వాణిజ్య ఎలక్ట్రికల్ మరియు ప్లంబింగ్ సేవలు కూడా సేవా జాబితాలో చేర్చబడ్డాయి.",
  
  "faq.q8": "నా స్థానం కవర్ చేయబడిందో లేదో నేను ఎలా తనిఖీ చేయగలను?",
  "faq.a8": "మీ స్థానంతో ఫోన్ లేదా WhatsApp ద్వారా మమ్మల్ని సంప్రదించండి. మేము మీ ప్రాంతానికి సేవా లభ్యతను నిర్ధారించగలము.",
  
  "faq.q9": "వెబ్‌సైట్‌లో ధరలు అందుబాటులో ఉన్నాయా?",
  "faq.a9": "సేవా అవసరాలు మారవచ్చు, కాబట్టి ధర వెబ్‌సైట్‌లో స్థిరమైన మొత్తంగా జాబితా చేయబడలేదు. తదుపరి చర్చ కోసం మీ అవసరంతో మమ్మల్ని సంప్రదించండి.",
  
  "faq.q10": "నేను JK ఎలక్ట్రికల్ & ప్లంబింగ్ సర్వీసెస్‌ను ఎలా సంప్రదించగలను?",
  "faq.a10": "9542292199 కు కాల్ చేయండి లేదా WhatsApp ద్వారా మమ్మల్ని సంప్రదించండి.",
  
  "faq.cta_title": "ఎలక్ట్రికల్ లేదా ప్లంబింగ్ సేవ కావాలా?",
  "faq.cta_desc": "మీ అవసరం కోసం JK ఎలక్ట్రికల్ & ప్లంబింగ్ సర్వీసెస్‌ను నేరుగా సంప్రదించండి."
};

const newHi = {
  "reviews.eyebrow": "ग्राहक प्रतिक्रिया",
  "reviews.title": "हमारे ग्राहक क्या कहते हैं",
  "reviews.desc": "सत्यापित ग्राहक प्रतिक्रिया उपलब्ध होने पर यहां जोड़ी जाएगी।",
  "reviews.empty_msg": "वास्तविक ग्राहक समीक्षाएं यहां प्रदर्शित की जाएंगी।",
  "reviews.cta": "क्या आपने हमारी सेवा का उपयोग किया है? अपनी प्रतिक्रिया साझा करने के लिए हमसे संपर्क करें।",
  
  "faq.title": "अक्सर पूछे जाने वाले प्रश्न",
  "faq.desc": "हमारी इलेक्ट्रिकल और प्लंबिंग सेवाओं के बारे में त्वरित उत्तर।",
  
  "faq.q1": "आप किन क्षेत्रों में सेवा प्रदान करते हैं?",
  "faq.a1": "हम रावुलपालेम और आस-पास के गांवों और कस्बों में लगभग 50 किमी के सेवा क्षेत्र के साथ इलेक्ट्रिकल और प्लंबिंग सेवाएं प्रदान करते हैं। सेवा की उपलब्धता स्थान पर निर्भर हो सकती है।",
  
  "faq.q2": "क्या आप आपातकालीन इलेक्ट्रिकल और प्लंबिंग सेवाएं प्रदान करते हैं?",
  "faq.a2": "हाँ। JK इलेक्ट्रिकल एंड प्लंबिंग सर्विसेज इलेक्ट्रिकल और प्लंबिंग आवश्यकताओं के लिए 24/7 आपातकालीन सेवा प्रदान करती है।",
  
  "faq.q3": "आप कौन सी इलेक्ट्रिकल सेवाएं प्रदान करते हैं?",
  "faq.a3": "सेवाओं में हाउस वायरिंग, इलेक्ट्रिकल मरम्मत, लाइट और पंखे की स्थापना, स्विच और सॉकेट की मरम्मत, MCB स्थापना या प्रतिस्थापन, शॉर्ट-सर्किट मरम्मत, इन्वर्टर स्थापना और वायरिंग, फॉल्ट फाइंडिंग, रखरखाव और अन्य इलेक्ट्रिकल काम शामिल हैं।",
  
  "faq.q4": "आप कौन सी प्लंबिंग सेवाएं प्रदान करते हैं?",
  "faq.a4": "सेवाओं में नल की मरम्मत या प्रतिस्थापन, शॉवर स्थापना और मरम्मत, शौचालय की मरम्मत और स्थापना, सिंक स्थापना और मरम्मत, पानी और पाइप रिसाव की मरम्मत, पाइप स्थापना और प्रतिस्थापन, बाथरूम प्लंबिंग, पानी की टंकी कनेक्शन, जल निकासी रुकावट की मरम्मत और प्लंबिंग रखरखाव शामिल हैं।",
  
  "faq.q5": "क्या आप इलेक्ट्रिकल और प्लंबिंग दोनों सेवाएं प्रदान करते हैं?",
  "faq.a5": "हाँ। JK इलेक्ट्रिकल एंड प्लंबिंग सर्विसेज इलेक्ट्रिकल और प्लंबिंग दोनों सेवाएं प्रदान करती है।",
  
  "faq.q6": "मैं सेवा का अनुरोध कैसे कर सकता हूँ?",
  "faq.a6": "आप फोन या व्हाट्सएप द्वारा सीधे जितेंद्र से संपर्क कर सकते हैं और इलेक्ट्रिकल या प्लंबिंग की आवश्यकता बता सकते हैं।",
  
  "faq.q7": "क्या आप घरों के लिए सेवाएं प्रदान करते हैं?",
  "faq.a7": "हाँ। आवासीय और घरेलू सेवा आवश्यकताएँ प्राथमिक फोकस हैं। वाणिज्यिक इलेक्ट्रिकल और प्लंबिंग सेवाएं भी सेवा सूची में शामिल हैं।",
  
  "faq.q8": "मैं कैसे जांच सकता हूं कि मेरा स्थान कवर किया गया है या नहीं?",
  "faq.a8": "अपने स्थान के साथ फोन या व्हाट्सएप द्वारा हमसे संपर्क करें। हम आपके क्षेत्र के लिए सेवा की उपलब्धता की पुष्टि कर सकते हैं।",
  
  "faq.q9": "क्या वेबसाइट पर मूल्य निर्धारण उपलब्ध है?",
  "faq.a9": "सेवा की आवश्यकताएं भिन्न हो सकती हैं, इसलिए मूल्य निर्धारण को वेबसाइट पर एक निश्चित राशि के रूप में सूचीबद्ध नहीं किया गया है। आगे की चर्चा के लिए अपनी आवश्यकता के साथ हमसे संपर्क करें।",
  
  "faq.q10": "मैं JK इलेक्ट्रिकल एंड प्लंबिंग सर्विसेज से कैसे संपर्क कर सकता हूं?",
  "faq.a10": "9542292199 पर कॉल करें या व्हाट्सएप के माध्यम से हमसे संपर्क करें।",
  
  "faq.cta_title": "इलेक्ट्रिकल या प्लंबिंग सेवा की आवश्यकता है?",
  "faq.cta_desc": "अपनी आवश्यकता के लिए सीधे JK इलेक्ट्रिकल और प्लंबिंग सेवाओं से संपर्क करें।"
};

fs.writeFileSync(enPath, JSON.stringify({ ...en, ...newEn }, null, 2));
fs.writeFileSync(tePath, JSON.stringify({ ...te, ...newTe }, null, 2));
fs.writeFileSync(hiPath, JSON.stringify({ ...hi, ...newHi }, null, 2));
console.log('Translations updated for Stage 8.');
