// translations.js
const translations = {
  en: {
    dashboard: "Dashboard",
    jobs: "Jobs",
    post: "Post Job",
    notification: "Notifications",
    weather: "Weather",
    settings: "Settings",
    welcome: "Welcome to FarmHand",
    quick_stats: "Quick Stats",
    farmers: "Farmers",
    active_jobs: "Active Jobs",
    notifications: "Notifications",
    weather_info: "Weather Information",
    temp: "Temperature",
    humidity: "Humidity",
    wind: "Wind",
    post_job: "Post a Job",
    job_type: "Job Type",
    harvesting: "Harvesting",
    ploughing: "Ploughing",
    sowing: "Sowing",
    irrigation: "Irrigation",
    cutting: "Cutting",
    machine: "Machine Worker",
    others: "Others",
    date: "Date",
    time: "Work Time",
    location: "Location",
    payment: "Payment",
    payment_mode: "Payment Mode",
    submit: "Submit"
  },
  hi: {
    dashboard: "डैशबोर्ड",
    jobs: "नौकरियां",
    post: "नौकरी पोस्ट करें",
    notification: "सूचनाएं",
    weather: "मौसम",
    settings: "सेटिंग्स",
    welcome: "फार्महैंड में आपका स्वागत है",
    quick_stats: "त्वरित आँकड़े",
    farmers: "किसान",
    active_jobs: "सक्रिय नौकरियां",
    notifications: "सूचनाएं",
    weather_info: "मौसम की जानकारी",
    temp: "तापमान",
    humidity: "आर्द्रता",
    wind: "हवा",
    post_job: "नौकरी पोस्ट करें",
    job_type: "नौकरी का प्रकार",
    harvesting: "फसल काटना",
    ploughing: "जोताई",
    sowing: "बुवाई",
    irrigation: "सिंचाई",
    cutting: "कटाई",
    machine: "मशीन कार्यकर्ता",
    others: "अन्य",
    date: "तारीख",
    time: "काम का समय",
    location: "स्थान",
    payment: "भुगतान",
    payment_mode: "भुगतान का तरीका",
    submit: "जमा करें"
  },
  mr: {
    dashboard: "डॅशबोर्ड",
    jobs: "नोकऱ्या",
    post: "नोकरी पोस्ट करा",
    notification: "सूचना",
    weather: "हवामान",
    settings: "सेटिंग्ज",
    welcome: "फार्महँड मध्ये आपले स्वागत आहे",
    quick_stats: "जलद आकडेवारी",
    farmers: "शेतकरी",
    active_jobs: "सक्रिय नोकऱ्या",
    notifications: "सूचना",
    weather_info: "हवामान माहिती",
    temp: "तापमान",
    humidity: "आर्द्रता",
    wind: "वारा",
    post_job: "नोकरी पोस्ट करा",
    job_type: "नोकरीचा प्रकार",
    harvesting: "पिक कापणी",
    ploughing: "नांगरणी",
    sowing: "पेरणी",
    irrigation: "सिंचन",
    cutting: "कापणी",
    machine: "मशीन कामगार",
    others: "इतर",
    date: "तारीख",
    time: "कामाचा वेळ",
    location: "स्थान",
    payment: "पेमेंट",
    payment_mode: "पेमेंट मोड",
    submit: "सबमिट"
  }
};

// Load saved language from localStorage
const savedLang = localStorage.getItem("language") || "en";
changeLanguage(savedLang);

function changeLanguage(lang) {
  localStorage.setItem("language", lang);
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}
