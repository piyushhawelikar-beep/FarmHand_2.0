const translations = {
  en: {
    dashboard: "Dashboard",
    weather: "Weather",
    postJob: "Post Job",
    notification: "Notifications",
    report: "Reports",
    about: "About Us",
    services: "Services",
    logout: "Logout",
    welcome: "Welcome to Farmhand!",
  },
  hi: {
    dashboard: "डैशबोर्ड",
    weather: "मौसम",
    postJob: "नौकरी पोस्ट करें",
    notification: "सूचनाएँ",
    report: "रिपोर्ट",
    about: "हमारे बारे में",
    services: "सेवाएँ",
    logout: "लॉग आउट",
    welcome: "फार्महैंड में आपका स्वागत है!",
  },
  mr: {
    dashboard: "डॅशबोर्ड",
    weather: "हवामान",
    postJob: "नोकरी पोस्ट करा",
    notification: "सूचना",
    report: "अहवाल",
    about: "आमच्याबद्दल",
    services: "सेवा",
    logout: "लॉग आउट",
    welcome: "फार्महँडमध्ये आपले स्वागत आहे!",
  }
};

// Apply language
function applyLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    el.textContent = translations[lang][key] || el.textContent;
  });
  localStorage.setItem("language", lang);
}

// Load saved language on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  applyLanguage(savedLang);
});
