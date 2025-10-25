// Load saved settings
window.onload = function() {
  const lang = localStorage.getItem("language") || "en";
  const theme = localStorage.getItem("theme") || "light";

  document.getElementById("language").value = lang;
  document.getElementById("theme").value = theme;

  applySettings(lang, theme);
};

// Save settings
function saveSettings() {
  const lang = document.getElementById("language").value;
  const theme = document.getElementById("theme").value;

  localStorage.setItem("language", lang);
  localStorage.setItem("theme", theme);

  applySettings(lang, theme);
}

// Apply language + theme globally
function applySettings(lang, theme) {
  // Apply theme
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  // Apply translations
  document.querySelectorAll("[data-translate]").forEach(el => {
    el.innerText = translations[lang][el.getAttribute("data-translate")];
  });
}

// Translation data
const translations = {
  en: {
    welcome: "Welcome to FarmHand",
    jobs: "Jobs",
    reports: "Reports",
    weather: "Weather",
    services: "Services",
    logout: "Logout",
    post: "Post Job",
    jobTitle: "Job Title",
    location: "Location",
    date: "Date",
    time: "Time",
    workers: "Number of Workers",
    machines: "Machine Required",
    payment: "Payment",
    submit: "Submit",
    enterLocation: "Enter Your Location"
  },
  hi: {
    welcome: "फार्महैंड में आपका स्वागत है",
    jobs: "नौकरियां",
    reports: "रिपोर्ट्स",
    weather: "मौसम",
    services: "सेवाएं",
    logout: "लॉग आउट",
    post: "नौकरी पोस्ट करें",
    jobTitle: "काम का शीर्षक",
    location: "स्थान",
    date: "तारीख",
    time: "समय",
    workers: "मजदूरों की संख्या",
    machines: "आवश्यक मशीन",
    payment: "भुगतान",
    submit: "जमा करें",
    enterLocation: "अपना स्थान दर्ज करें"
  },
  mr: {
    welcome: "फार्महँड मध्ये आपले स्वागत आहे",
    jobs: "नोकऱ्या",
    reports: "अहवाल",
    weather: "हवामान",
    services: "सेवा",
    logout: "लॉगआऊट",
    post: "नोकरी पोस्ट करा",
    jobTitle: "कामाचे शीर्षक",
    location: "स्थान",
    date: "तारीख",
    time: "वेळ",
    workers: "कामगारांची संख्या",
    machines: "आवश्यक मशीन",
    payment: "पेमेंट",
    submit: "सबमिट",
    enterLocation: "आपले स्थान टाका"
  }
};
// Load saved settings
window.onload = function() {
  const lang = localStorage.getItem("language") || "en";
  const theme = localStorage.getItem("theme") || "light";
  const mic = localStorage.getItem("mic") || "off";

  document.getElementById("language").value = lang;
  document.getElementById("theme").value = theme;
  document.getElementById("mic").value = mic;

  applySettings(lang, theme, mic);
};

// Save settings
function saveSettings() {
  const lang = document.getElementById("language").value;
  const theme = document.getElementById("theme").value;
  const mic = document.getElementById("mic").value;

  localStorage.setItem("language", lang);
  localStorage.setItem("theme", theme);
  localStorage.setItem("mic", mic);

  applySettings(lang, theme, mic);
}

// Apply language + theme + mic
function applySettings(lang, theme, mic) {
  // Apply theme
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  // Apply translations
  document.querySelectorAll("[data-translate]").forEach(el => {
    el.innerText = translations[lang][el.getAttribute("data-translate")];
  });

  // Apply mic option
  if (mic === "on") {
    enableMic();
  } else {
    disableMic();
  }
}

// Enable mic globally
function enableMic() {
  document.querySelectorAll("input[data-mic='true']").forEach(input => {
    if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("mic-btn")) {
      const btn = document.createElement("button");
      btn.innerText = "🎤";
      btn.classList.add("mic-btn");
      btn.onclick = () => startSpeechToText(input);
      input.after(btn);
    }
  });
}

// Disable mic
function disableMic() {
  document.querySelectorAll(".mic-btn").forEach(btn => btn.remove());
}

// Simple speech-to-text
function startSpeechToText(input) {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Speech Recognition not supported in this browser");
    return;
  }
  const recognition = new webkitSpeechRecognition();
  recognition.lang = localStorage.getItem("language") === "hi" ? "hi-IN" :
                     localStorage.getItem("language") === "mr" ? "mr-IN" : "en-IN";

  recognition.start();
  recognition.onresult = function(event) {
    input.value = event.results[0][0].transcript;
  };
}
