/* =====================================================
   MAULI SPA - MAIN JAVASCRIPT
   ===================================================== */

'use strict';

/* ---- TRANSLATIONS ---- */
const translations = {
  hi: {
    heroSub: "प्राचीन आयुर्वेदिक पद्धति",
    heroTitle: "अपने शरीर और आत्मा को\nपुनः ऊर्जावान बनाएं",
    heroDesc: "प्राचीन आयुर्वेदिक परंपरा से पाएं संपूर्ण स्वास्थ्य",
    bookSession: "अपना सत्र बुक करें",
    viewCatalogue: "कैटलॉग देखें",
    topDemand: "सबसे लोकप्रिय थेरेपी",
    featuredServices: "हमारी विशेष सेवाएं",
    whyMauli: "माउली आयुर्वेदिक मसाज क्यों?",
    whyDesc: "हम दूसरों से अलग क्यों हैं?",
    startJourney: "आज ही अपनी वेलनेस यात्रा शुरू करें",
  },
  en: {
    heroSub: "Ancient Ayurvedic Tradition",
    heroTitle: "Rejuvenate Your\nSoul and Body",
    heroDesc: "Achieve complete wellness through ancient Ayurvedic wisdom",
    bookSession: "Book Your Session",
    viewCatalogue: "View Catalogue",
    topDemand: "Top Demanding Therapies",
    featuredServices: "Our Featured Services",
    whyMauli: "Why Mauli Ayurvedic Massage Therapy?",
    whyDesc: "What makes us different from others?",
    startJourney: "Start Your Wellness Journey Today",
  },
  mr: {
    heroSub: "प्राचीन आयुर्वेदिक परंपरा",
    heroTitle: "तुमच्या शरीर आणि आत्म्याला\nताजेतवाने करा",
    heroDesc: "प्राचीन आयुर्वेदिक ज्ञानाने संपूर्ण आरोग्य मिळवा",
    bookSession: "तुमचे सत्र बुक करा",
    viewCatalogue: "कॅटलॉग पहा",
    topDemand: "सर्वात लोकप्रिय थेरपी",
    featuredServices: "आमच्या विशेष सेवा",
    whyMauli: "माउली आयुर्वेदिक मसाज का?",
    whyDesc: "आम्ही इतरांपेक्षा वेगळे का आहोत?",
    startJourney: "आज तुमचा वेलनेस प्रवास सुरू करा",
  },
  ta: {
    heroSub: "பண்டைய ஆயுர்வேத மரபு",
    heroTitle: "உங்கள் உடல் மற்றும் ஆன்மாவை\nமீண்டும் புத்துயிர் பெறுங்கள்",
    heroDesc: "பண்டைய ஆயுர்வேத ஞானம் மூலம் முழுமையான ஆரோக்கியம் பெறுங்கள்",
    bookSession: "உங்கள் அமர்வை முன்பதிவு செய்யுங்கள்",
    viewCatalogue: "கேட்டலாக் பார்க்கவும்",
    topDemand: "மிகவும் பிரபலமான சிகிச்சைகள்",
    featuredServices: "எங்கள் சிறப்பு சேவைகள்",
    whyMauli: "மௌலி ஆயுர்வேத மசாஜ் ஏன்?",
    whyDesc: "நாங்கள் மற்றவர்களிடமிருந்து எப்படி வேறுபடுகிறோம்?",
    startJourney: "இன்றே உங்கள் ஆரோக்கிய பயணத்தை தொடங்குங்கள்",
  },
  te: {
    heroSub: "పురాతన ఆయుర్వేద సంప్రదాయం",
    heroTitle: "మీ శరీరం మరియు ఆత్మను\nపునరుత్తేజపరచుకోండి",
    heroDesc: "పురాతన ఆయుర్వేద జ్ఞానం ద్వారా సంపూర్ణ ఆరోగ్యం పొందండి",
    bookSession: "మీ సెషన్ బుక్ చేయండి",
    viewCatalogue: "కేటలాగ్ చూడండి",
    topDemand: "అత్యంత ప్రజాదరణ చికిత్సలు",
    featuredServices: "మా ప్రత్యేక సేవలు",
    whyMauli: "మౌలి ఆయుర్వేద మసాజ్ ఎందుకు?",
    whyDesc: "మేము ఇతరులకంటే ఎందుకు భిన్నంగా ఉంటాము?",
    startJourney: "ఈరోజే మీ వెల్నెస్ యాత్ర ప్రారంభించండి",
  },
  bn: {
    heroSub: "প্রাচীন আয়ুর্বেদিক ঐতিহ্য",
    heroTitle: "আপনার শরীর ও আত্মাকে\nপুনরুজ্জীবিত করুন",
    heroDesc: "প্রাচীন আয়ুর্বেদিক জ্ঞান দিয়ে সম্পূর্ণ সুস্থতা পান",
    bookSession: "আপনার সেশন বুক করুন",
    viewCatalogue: "ক্যাটালগ দেখুন",
    topDemand: "সবচেয়ে জনপ্রিয় থেরাপি",
    featuredServices: "আমাদের বিশেষ সেবা",
    whyMauli: "মৌলি আয়ুর্বেদিক ম্যাসাজ কেন?",
    whyDesc: "আমরা অন্যদের থেকে কীভাবে আলাদা?",
    startJourney: "আজই আপনার ওয়েলনেস যাত্রা শুরু করুন",
  },
  gu: {
    heroSub: "પ્રાચીન આયુર્વેદિક પરંપરા",
    heroTitle: "તમારા શરીર અને આત્માને\nફરીથી ઉર્જાવાન બનાવો",
    heroDesc: "પ્રાચીન આયુર્વેદિક જ્ઞાન દ્વારા સંપૂર્ણ સ્વાસ્થ્ય મેળવો",
    bookSession: "તમારો સત્ર બુક કરો",
    viewCatalogue: "કૅટલૉગ જુઓ",
    topDemand: "સૌથી લોકપ્રિય ઉપચાર",
    featuredServices: "અમારી વિશેષ સેવાઓ",
    whyMauli: "માઉળી આયુર્વેદિક મસાજ શા માટે?",
    whyDesc: "અમે અન્ય લોકોથી કેવી રીતે અલગ છીએ?",
    startJourney: "આજે જ તમારી વેલ્નેસ યાત્રા શરૂ કરો",
  },
  kn: {
    heroSub: "ಪ್ರಾಚೀನ ಆಯುರ್ವೇದ ಸಂಪ್ರದಾಯ",
    heroTitle: "ನಿಮ್ಮ ದೇಹ ಮತ್ತು ಆತ್ಮವನ್ನು\nಪುನಶ್ಚೇತನಗೊಳಿಸಿ",
    heroDesc: "ಪ್ರಾಚೀನ ಆಯುರ್ವೇದ ಜ್ಞಾನದಿಂದ ಸಂಪೂರ್ಣ ಆರೋಗ್ಯ ಪಡೆಯಿರಿ",
    bookSession: "ನಿಮ್ಮ ಸೆಷನ್ ಬುಕ್ ಮಾಡಿ",
    viewCatalogue: "ಕ್ಯಾಟಲಾಗ್ ನೋಡಿ",
    topDemand: "ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಚಿಕಿತ್ಸೆಗಳು",
    featuredServices: "ನಮ್ಮ ವಿಶೇಷ ಸೇವೆಗಳು",
    whyMauli: "ಮೌಲಿ ಆಯುರ್ವೇದ ಮಸಾಜ್ ಏಕೆ?",
    whyDesc: "ನಾವು ಇತರರಿಂದ ಹೇಗೆ ಭಿನ್ನ?",
    startJourney: "ಇಂದೇ ನಿಮ್ಮ ವೆಲ್ನೆಸ್ ಯಾತ್ರೆ ಪ್ರಾರಂಭಿಸಿ",
  }
};

/* ---- THERAPY DATA ---- */
const therapies = [
  {
    name: "Spa Pack",
    desc: "Complete wellness experience with cleansing, scrub, steam, and massage.",
    longDesc: "Hamare signature Spa Pack mein aapko ek complete wellness journey milti hai. Cleansing se shuru hokar scrub, relaxing steam, aur deep ayurvedic massage tak — ye sab mila kar aapke shareer ko andar se saaf aur bahar se glow karta hai.",
    price: "₹3,999",
    duration: "Body Pack",
    physicalBenefits: ["Deep cleansing aur detoxification", "Skin softening aur glow", "Muscle tension se rahat", "Better blood circulation"],
    mentalBenefits: ["Complete relaxation", "Stress aur anxiety se mukti", "Mind ko freshness"],
    forWhom: "Unke liye jo complete rejuvenation chahte hain — corporate professionals, brides-to-be, ya koi bhi jo full body makeover chahta ho.",
    isVideo: true,
    img: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumb: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop"
  },
  {
    name: "Potli Massage",
    desc: "Hot herbal pouch massage for deep pain relief and relaxation.",
    longDesc: "Potli Massage mein garam jadi-bootiyon ki potli se massage ki jaati hai. Ye herbal heat deep muscles mein jaati hai aur chronic pain, arthritis, aur stiffness ko door karti hai. Ye ek traditional Ayurvedic technique hai jo centuries se use ho rahi hai.",
    price: "₹2,999",
    duration: "90 mins",
    physicalBenefits: ["Joint pain aur arthritis mein rahat", "Muscle stiffness kam hoti hai", "Deep heat se circulation improve", "Skin ko poshhik tatv milte hain"],
    mentalBenefits: ["Deep relaxation aur calm feeling", "Better sleep quality", "Stress hormones kam hote hain"],
    forWhom: "Joint pain, arthritis patients, elderly people, ya koi bhi jo deep pain relief chahta ho.",
    isVideo: true,
    img: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumb: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop"
  },
  {
    name: "Couple Massage",
    desc: "A shared wellness experience for two. Relax and reconnect together.",
    longDesc: "Couple Massage ek romantic aur rejuvenating experience hai jo aap apne partner ke saath share kar sakte hain. Dono ke liye ek saath side-by-side massage sessions, customized to individual needs. Perfect for anniversaries, birthdays, ya simply to reconnect.",
    price: "₹2,899",
    duration: "60 mins each",
    physicalBenefits: ["Full body relaxation", "Muscle tension release", "Improved circulation"],
    mentalBenefits: ["Emotional bonding strengthen", "Shared relaxation experience", "Stress se mukti"],
    forWhom: "Couples jo saath mein quality time aur wellness experience share karna chahte hain. Perfect anniversary ya birthday gift!",
    isVideo: false,
    thumb: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop"
  },
  {
    name: "Medicinal Oil Massage",
    desc: "Therapeutic Ayurvedic oil massage tailored to your body constitution.",
    longDesc: "Hamare Medicinal Oil Massage mein aapke dosha (body constitution) ke hisaab se specific Ayurvedic oils select ki jaati hain. Ye oils deep tissue mein penetrate karti hain aur healing process accelerate karti hain. Completely customized therapy.",
    price: "₹2,499",
    duration: "75 mins",
    physicalBenefits: ["Dosha balance restore", "Deep tissue nourishment", "Joint lubrication improve", "Toxin removal (Detox)"],
    mentalBenefits: ["Mind-body balance", "Mental clarity improve", "Anxiety kam hoti hai"],
    forWhom: "Jinhe specific health concerns hain — vata, pitta ya kapha imbalance, ya jo authentic Ayurvedic experience chahte hain.",
    isVideo: false,
    thumb: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop"
  },
  {
    name: "Deep Tissue Massage",
    desc: "Targeted deep pressure to relieve chronic muscle tension and pain.",
    longDesc: "Deep Tissue Massage mein deep, firm pressure use ki jaati hai chronic muscle tension aur knots ko target karne ke liye. Ye therapy especially un logo ke liye beneficial hai jinhe chronic pain, injury recovery, ya intense physical activity se muscle soreness hai.",
    price: "₹2,199",
    duration: "70 mins",
    physicalBenefits: ["Chronic muscle tension eliminate", "Injury recovery accelerate", "Posture improve", "Blood pressure reduce"],
    mentalBenefits: ["Deep relaxation", "Pain se freed hoke mental peace", "Better body awareness"],
    forWhom: "Athletes, physically active people, office workers jinhe chronic back/neck pain ho, ya koi bhi jo deep muscle relief chahta ho.",
    isVideo: false,
    thumb: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
  },
  {
    name: "Aloe Vera Gel Massage",
    desc: "Cooling aloe vera gel massage for skin hydration and soothing relief.",
    longDesc: "Aloe Vera Gel Massage mein pure aloe vera gel ka use hota hai jo skin ko deep hydrate karta hai aur inflammation reduce karta hai. Ye especially summer mein ya sunburn ke baad bahut soothing hoti hai. Skin ko soft, supple aur glowing banata hai.",
    price: "₹1,999",
    duration: "60 mins",
    physicalBenefits: ["Deep skin hydration", "Inflammation aur redness reduce", "Sunburn se rahat", "Skin texture improve"],
    mentalBenefits: ["Cooling aur soothing sensation", "Immediate relaxation", "Skin glow se confidence boost"],
    forWhom: "Dry skin, sensitive skin ya un logo ke liye jo natural aur chemical-free skin treatment chahte hain.",
    isVideo: false,
    thumb: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop"
  },
  {
    name: "Cream Massage",
    desc: "Luxurious cream-based massage for nourished and glowing skin.",
    longDesc: "Cream Massage mein premium moisturizing cream use ki jaati hai jo massage ke saath skin mein absorb hoti jaati hai. Ye skin ko instantly soft aur nourished feel karata hai. Luxury spa experience ke saath effective body massage.",
    price: "₹1,799",
    duration: "60 mins",
    physicalBenefits: ["Intense skin moisturization", "Smooth aur soft skin", "Cell renewal promote", "Body aches reduce"],
    mentalBenefits: ["Pampered feeling", "Stress release", "Mind ko luxury experience"],
    forWhom: "Dry skin treatment ke saath relaxation chahne walo ke liye. Perfect for winter season ya occasion se pehle.",
    isVideo: false,
    thumb: "https://images.unsplash.com/photo-1559841644-08984562005b?w=600&h=400&fit=crop"
  },
  {
    name: "Til Tel Massage",
    desc: "Traditional sesame oil massage for warmth, strength and deep nourishment.",
    longDesc: "Til Tel (Sesame Oil) Massage ek traditional Ayurvedic abhyanga hai. Sesame oil naturally warming hota hai aur deep tissues mein penetrate karta hai. Ye vata dosha balance karta hai, joints ko lubricant karta hai, aur overall strength deta hai.",
    price: "₹1,499",
    duration: "60 mins",
    physicalBenefits: ["Vata dosha balance", "Joint strength improve", "Bone density support", "Winter mein warmth provide"],
    mentalBenefits: ["Grounding aur calming effect", "Anxiety reduce", "Better sleep"],
    forWhom: "Specially elderly people, winter mein jo warmth chahte hain, ya jinhe vata imbalance (anxiety, dryness) ki samasya ho.",
    isVideo: false,
    thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
  },
  {
    name: "Powder Massage",
    desc: "Udvartana — dry herbal powder massage for weight management and detox.",
    longDesc: "Powder Massage ya Udvartana mein dry herbal powder se vigorous massage ki jaati hai. Ye ek unique Ayurvedic technique hai jo fat tissue ko break karne, lymphatic system ko stimulate karne, aur deep detoxification mein help karti hai.",
    price: "₹1,299",
    duration: "45 mins",
    physicalBenefits: ["Fat reduction mein help", "Lymphatic drainage improve", "Skin texture exfoliation", "Cellulite reduce"],
    mentalBenefits: ["Energized feeling", "Confidence boost", "Body awareness improve"],
    forWhom: "Weight management goals wale, jo natural detox chahte hain, ya oily/thick skin type wale.",
    isVideo: false,
    thumb: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
  },
  {
    name: "Facial",
    desc: "Deep cleansing Ayurvedic facial for glowing, radiant skin.",
    longDesc: "Hamare Ayurvedic Facial mein natural herbs aur ingredients se aapki skin ko deep cleanse kiya jaata hai. Dead skin cells remove hoti hain, pores clean hote hain, aur natural glow restore hoti hai. Completely skin-type specific treatment.",
    price: "₹999",
    duration: "60 mins",
    physicalBenefits: ["Deep pore cleansing", "Dead skin cell removal", "Natural glow restore", "Acne aur pigmentation reduce"],
    mentalBenefits: ["Refreshed aur confident feel", "Self-care ritual satisfaction"],
    forWhom: "Dull, tired skin ke liye. Event se pehle instant glow ke liye perfect. All skin types.",
    isVideo: false,
    thumb: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop"
  },
  {
    name: "Back Pain Massage",
    desc: "Targeted relief for back pain, muscle tension and spine alignment.",
    longDesc: "Back Pain Massage specifically back muscles, spine, aur lower back ko target karti hai. Ye specially IT professionals, drivers, aur unke liye designed hai jo long hours baithte hain. Dard se turant rahat aur long-term relief dono milte hain.",
    price: "₹999",
    duration: "30 mins",
    physicalBenefits: ["Back pain instant relief", "Muscle spasm reduce", "Spine alignment improve", "Posture correction"],
    mentalBenefits: ["Pain se mukti ke baad peace of mind", "Better concentration", "Work performance improve"],
    forWhom: "Office workers, IT professionals, drivers — jinhe chronic ya acute back pain hoti hai.",
    isVideo: false,
    thumb: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop"
  },
  {
    name: "Leg Pain Massage",
    desc: "Relief for tired, achy legs — ideal for people on their feet all day.",
    longDesc: "Leg Pain Massage un logo ke liye perfect hai jo puri din khari rehti hain, bahut chalti hain, ya jinhe varicose veins ki samasya hai. Ye massage blood circulation improve karti hai, swelling reduce karti hai, aur muscles relax karti hai.",
    price: "₹999",
    duration: "30 mins",
    physicalBenefits: ["Leg pain aur cramps reduce", "Swelling aur inflammation reduce", "Blood circulation boost", "Varicose veins mein rahat"],
    mentalBenefits: ["Tired feeling se rahat", "Energy levels boost"],
    forWhom: "Teachers, shopkeepers, nurses, hospitality staff — jo din bhar khade rehte hain. Also good for athletes.",
    isVideo: false,
    thumb: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop"
  },
  {
    name: "Foot Massage",
    desc: "Reflexology-based foot massage to rejuvenate entire body through pressure points.",
    longDesc: "Foot Massage sirf pair ka massage nahi hai — reflexology ke hisaab se aapke pair mein poore shareer ke pressure points hain. In points ko daba kar hum various organs ko stimulate karte hain. Ye therapy insomnia, digestive issues, aur stress mein effective hai.",
    price: "₹499",
    duration: "20 mins",
    physicalBenefits: ["Pain relief through reflex points", "Better sleep (insomnia)","Digestive health improve", "Headache relief"],
    mentalBenefits: ["Instant relaxation", "Mental fatigue reduce", "Mood elevate"],
    forWhom: "Quick relaxation ke liye anyone. Especially jo standing jobs mein hain ya jinhe heel pain ho.",
    isVideo: false,
    thumb: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop"
  },
  {
    name: "Head Massage",
    desc: "Shiroabhyanga — traditional Indian head massage for stress and hair health.",
    longDesc: "Head Massage (Shiroabhyanga) ek ancient Indian tradition hai. Garam oil se scalp, neck, aur shoulder ka massage karke yeh brain ko direct soothe karta hai. Migraine, hair fall, aur insomnia ke liye particularly effective.",
    price: "₹499",
    duration: "25 mins",
    physicalBenefits: ["Migraine aur headache relief", "Hair fall reduce", "Scalp health improve", "Neck stiffness release"],
    mentalBenefits: ["Immediate stress relief", "Mental clarity", "Better concentration", "Insomnia mein help"],
    forWhom: "Students, professionals jo mental stress mein hain, migraine patients, ya jo hair health improve karna chahte hain.",
    isVideo: false,
    thumb: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop"
  }
];

/* ---- GALLERY IMAGES ---- */
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=800&fit=crop", alt: "Spa Room" },
  { src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop", alt: "Massage Room" },
  { src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=700&fit=crop", alt: "Relaxation Area" },
  { src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=500&fit=crop", alt: "Wellness Space" },
  { src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=900&fit=crop", alt: "Therapy Room" },
  { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop", alt: "Treatment Area" },
  { src: "https://images.unsplash.com/photo-1559841644-08984562005b?w=600&h=600&fit=crop", alt: "Natural Oils" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop", alt: "Herbal Products" },
  { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop", alt: "Spa Products" },
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=500&fit=crop", alt: "Sauna" },
  { src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=800&fit=crop", alt: "Foot Spa" },
  { src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop", alt: "Facial Treatment" },
];

/* =====================================================
   STATE
   ===================================================== */
let currentLang = 'hi';
let currentHeroSlide = 0;
let heroSlides = [];
let heroDots = [];
let heroInterval;
let lightboxIndex = 0;

/* =====================================================
   INIT
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  detectLanguage();
  initVisitCounter();
  initHero();
  renderTherapyCards();
  renderGallery();
  handleOfferNotification();
  initScrollEffects();

  // Set min date for booking form
  const dateInput = document.getElementById('contactDate');
  if (dateInput) {
    dateInput.min = new Date().toISOString().split('T')[0];
  }
});

/* =====================================================
   LANGUAGE DETECTION
   ===================================================== */
function detectLanguage() {
  // Try saved preference first
  const saved = localStorage.getItem('mauliLang');
  if (saved) { setLang(saved); return; }
  // Delhi/NCR → Hindi, else try browser lang or default Hindi
  const browserLang = navigator.language || 'hi';
  const langMap = { 'hi': 'hi', 'mr': 'mr', 'ta': 'ta', 'te': 'te', 'bn': 'bn', 'gu': 'gu', 'kn': 'kn' };
  const base = browserLang.split('-')[0];
  const detected = langMap[base] || 'hi';
  setLang(detected);
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('mauliLang', lang);
  document.getElementById('currentLang').textContent = lang.toUpperCase();
  document.documentElement.lang = lang;

  const t = translations[lang] || translations['hi'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key].replace(/\n/g, '<br>');
    }
  });

  closeLangDropdown();
}

function toggleLang() {
  document.getElementById('langDropdown').classList.toggle('show');
}

function closeLangDropdown() {
  document.getElementById('langDropdown').classList.remove('show');
}

document.addEventListener('click', e => {
  if (!e.target.closest('#langSwitcher')) closeLangDropdown();
});

/* =====================================================
   VISIT COUNTER
   ===================================================== */
function initVisitCounter() {
  let count = parseInt(localStorage.getItem('mauliVisits') || '0') + 1;
  localStorage.setItem('mauliVisits', count);
  // Simulate real-time with base number
  const baseCount = 12847 + count;
  animateCounter(document.getElementById('visitCount'), baseCount);
}

function animateCounter(el, target) {
  let current = target - 50;
  const step = Math.ceil((target - current) / 40);
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { el.textContent = target.toLocaleString('en-IN'); clearInterval(timer); }
    else el.textContent = current.toLocaleString('en-IN');
  }, 30);
}

/* =====================================================
   HERO SLIDER
   ===================================================== */
function initHero() {
  heroSlides = Array.from(document.querySelectorAll('.hero-slide'));
  const dotsContainer = document.getElementById('heroDots');

  heroSlides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i+1}`);
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
    heroDots.push(dot);
  });

  startHeroSlider();
}

function startHeroSlider() {
  heroInterval = setInterval(() => {
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    updateHeroSlide();
  }, 6000);
}

function goToSlide(idx) {
  clearInterval(heroInterval);
  currentHeroSlide = idx;
  updateHeroSlide();
  startHeroSlider();
}

function updateHeroSlide() {
  heroSlides.forEach((s, i) => s.classList.toggle('active', i === currentHeroSlide));
  heroDots.forEach((d, i) => d.classList.toggle('active', i === currentHeroSlide));
}

/* =====================================================
   PAGE NAVIGATION
   ===================================================== */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Close mobile menu
  document.getElementById('mainNav').classList.remove('mobile-open');
  document.getElementById('hamburger').classList.remove('open');
}

function setActive(el) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  el.classList.add('active');
}

/* =====================================================
   MOBILE MENU
   ===================================================== */
function toggleMobileMenu() {
  const nav = document.getElementById('mainNav');
  const btn = document.getElementById('hamburger');
  nav.classList.toggle('mobile-open');
  btn.classList.toggle('open');
}

/* =====================================================
   OFFER NOTIFICATION
   ===================================================== */
function handleOfferNotification() {
  const shown = sessionStorage.getItem('mauliOfferShown');
  if (shown) {
    document.getElementById('offerNotification').classList.add('hidden');
    return;
  }
  // Auto close after 6 seconds
  setTimeout(() => {
    const notif = document.getElementById('offerNotification');
    if (notif) {
      notif.style.animation = 'none';
      notif.style.transform = 'translate(-50%, -50%) scale(0)';
      notif.style.transition = 'transform 0.3s';
    }
  }, 6000);
}

function closeOffer() {
  const notif = document.getElementById('offerNotification');
  notif.style.transform = 'translate(-50%, -50%) scale(0)';
  notif.style.transition = 'transform 0.3s ease';
  sessionStorage.setItem('mauliOfferShown', '1');
  setTimeout(() => notif.classList.add('hidden'), 300);
  // Redirect to therapies on click
  showPage('therapies');
  setActive(document.querySelectorAll('.nav-link')[1]);
}

document.getElementById('offerNotification')?.addEventListener('click', function(e) {
  if (e.target !== document.querySelector('.offer-close')) {
    closeOffer();
  }
});

/* =====================================================
   THERAPY CARDS
   ===================================================== */
function renderTherapyCards() {
  const grid = document.getElementById('therapiesGrid');
  if (!grid) return;

  grid.innerHTML = therapies.map((t, i) => `
    <div class="therapy-card" tabindex="0" aria-label="${t.name}">
      <div class="therapy-card-media">
        ${t.isVideo
          ? `<video autoplay muted loop playsinline>
               <source src="${t.img}" type="video/mp4">
             </video>`
          : `<img src="${t.thumb}" alt="${t.name}" loading="lazy">`
        }
        <div class="therapy-card-overlay">
          <button class="see-more-btn" onclick="openTherapyModal(${i})">
            <i class="fas fa-eye"></i> See More
          </button>
        </div>
      </div>
      <div class="therapy-card-body">
        <h3>${t.name}</h3>
        <p>${t.desc}</p>
        <div class="therapy-meta">
          <span class="therapy-price">${t.price}</span>
          <span class="therapy-dur"><i class="fas fa-clock"></i> ${t.duration}</span>
        </div>
        <button class="btn-gold btn-sm" onclick="showPage('contact')" style="margin-top:12px;width:100%;justify-content:center;">Book Now</button>
      </div>
    </div>
  `).join('');

  // Keyboard support
  grid.querySelectorAll('.therapy-card').forEach((card, i) => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter') openTherapyModal(i);
    });
  });
}

/* =====================================================
   THERAPY MODAL
   ===================================================== */
function openTherapyModal(index) {
  const t = therapies[index];
  const content = `
    <h2 class="modal-therapy-name">${t.name}</h2>
    <div class="modal-meta">
      <span class="modal-price">${t.price}</span>
      <span class="modal-dur"><i class="fas fa-clock"></i> ${t.duration}</span>
    </div>
    <img src="${t.thumb}" alt="${t.name}" style="width:100%;border-radius:12px;margin-bottom:16px;max-height:200px;object-fit:cover;">
    <p class="modal-desc">${t.longDesc}</p>
    <div class="modal-benefits">
      <h4>🏋️ Physical Benefits</h4>
      <ul>${t.physicalBenefits.map(b => `<li>${b}</li>`).join('')}</ul>
      <h4>🧠 Mental Benefits</h4>
      <ul>${t.mentalBenefits.map(b => `<li>${b}</li>`).join('')}</ul>
      <h4>👤 Who is it for?</h4>
      <p style="color:#666;font-size:0.92rem;margin-top:8px;">${t.forWhom}</p>
    </div>
    <div class="modal-cta">
      <button class="btn-gold btn-full" onclick="showPage('contact');closeTherapyModal()">Book Now — ${t.price}</button>
    </div>
  `;
  document.getElementById('modalContent').innerHTML = content;
  document.getElementById('therapyModal').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeTherapyModal() {
  document.getElementById('therapyModal').classList.remove('show');
  document.body.style.overflow = '';
}

function closeModal(e) {
  if (e.target === document.getElementById('therapyModal')) closeTherapyModal();
}

/* =====================================================
   GALLERY
   ===================================================== */
function renderGallery() {
  const grid = document.getElementById('masonryGrid');
  if (!grid) return;

  grid.innerHTML = galleryImages.map((img, i) => `
    <div class="masonry-item" onclick="openLightbox(${i})">
      <img src="${img.src}" alt="${img.alt}" loading="lazy">
      <div class="masonry-item-overlay">
        <i class="fas fa-expand-alt"></i>
      </div>
    </div>
  `).join('');
}

function openLightbox(index) {
  lightboxIndex = index;
  document.getElementById('lightboxImg').src = galleryImages[index].src;
  document.getElementById('lightbox').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('show');
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + galleryImages.length) % galleryImages.length;
  const img = document.getElementById('lightboxImg');
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = galleryImages[lightboxIndex].src;
    img.style.opacity = 1;
    img.style.transition = 'opacity 0.3s';
  }, 150);
}

// Keyboard lightbox navigation
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (lb && lb.classList.contains('show')) {
    if (e.key === 'ArrowRight') lightboxNav(1);
    if (e.key === 'ArrowLeft') lightboxNav(-1);
    if (e.key === 'Escape') closeLightbox();
  }
  if (document.getElementById('therapyModal').classList.contains('show')) {
    if (e.key === 'Escape') closeTherapyModal();
  }
});

/* =====================================================
   FAQ ACCORDION
   ===================================================== */
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');

  // Close all in same container
  const container = btn.closest('.faq-list, .contact-faqs');
  if (container) {
    container.querySelectorAll('.faq-q').forEach(q => {
      q.classList.remove('open');
      q.nextElementSibling.classList.remove('show');
    });
  }

  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('show');
  }
}

/* =====================================================
   CONTACT FORM
   ===================================================== */
function submitForm() {
  const name = document.getElementById('contactName').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();

  if (!name) {
    showFieldError('contactName', 'Aapka naam zaroori hai');
    return;
  }
  if (!phone || phone.length < 10) {
    showFieldError('contactPhone', 'Valid mobile number daalein');
    return;
  }

  const service = document.getElementById('contactService').value;
  const date = document.getElementById('contactDate').value;
  const time = document.getElementById('contactTime').value;
  const msg = document.getElementById('contactMsg').value;

  // Build WhatsApp message
  const waMsg = encodeURIComponent(
    `Namaskar! Mauli Spa se booking ki request hai.\n\n` +
    `👤 Name: ${name}\n` +
    `📱 Phone: ${phone}\n` +
    `💆 Service: ${service || 'Yet to decide'}\n` +
    `📅 Date: ${date || 'Flexible'}\n` +
    `⏰ Time: ${time}\n` +
    `💬 Message: ${msg || 'None'}\n\n` +
    `Please confirm my appointment. Thank you! 🙏`
  );

  // Show success
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('successMsg').style.display = 'block';

  // Open WhatsApp after 1 second
  setTimeout(() => {
    window.open(`https://wa.me/919307360513?text=${waMsg}`, '_blank');
  }, 1000);
}

function showFieldError(fieldId, msg) {
  const field = document.getElementById(fieldId);
  field.style.borderColor = '#FC8181';
  field.focus();
  let err = field.parentNode.querySelector('.field-error');
  if (!err) {
    err = document.createElement('span');
    err.className = 'field-error';
    err.style.cssText = 'color:#FC8181;font-size:0.78rem;font-family:var(--font-ui);margin-top:4px;display:block;';
    field.parentNode.appendChild(err);
  }
  err.textContent = msg;
  setTimeout(() => {
    field.style.borderColor = '';
    if (err.parentNode) err.parentNode.removeChild(err);
  }, 3000);
}

/* =====================================================
   SCROLL EFFECTS
   ===================================================== */
function initScrollEffects() {
  const header = document.getElementById('mainHeader');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    header.classList.toggle('scrolled', scrollY > 50);
    backToTop.classList.toggle('show', scrollY > 400);
  }, { passive: true });

  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  const animatables = document.querySelectorAll(
    '.why-card, .benefit-item, .testimonial-card, .plan-card, .more-card, .tip-card'
  );
  animatables.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.5s ${i * 0.07}s ease, transform 0.5s ${i * 0.07}s ease`;
    observer.observe(el);
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* =====================================================
   NEWSLETTER
   ===================================================== */
document.querySelectorAll('.newsletter-form button').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.previousElementSibling;
    if (!input.value || !input.value.includes('@')) {
      input.style.borderColor = '#FC8181';
      input.placeholder = 'Valid email daalein!';
      setTimeout(() => { input.style.borderColor = ''; }, 2000);
      return;
    }
    btn.textContent = '✓ Done!';
    btn.disabled = true;
    input.value = '';
    setTimeout(() => {
      btn.textContent = 'Subscribe';
      btn.disabled = false;
    }, 3000);
  });
});

/* =====================================================
   TOUCH SWIPE FOR HERO
   ===================================================== */
let touchStartX = 0;
document.querySelector('.hero')?.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });

document.querySelector('.hero')?.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    else currentHeroSlide = (currentHeroSlide - 1 + heroSlides.length) % heroSlides.length;
    updateHeroSlide();
  }
}, { passive: true });
