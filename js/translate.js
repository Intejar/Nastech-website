const translation = {
  en: {
    home: " Home ",
    services: ` Services `,
    maintainance: "Under Maintainance !",
    wireless: "Wireless Solution",
    security: "Security Solution",
    software: "Software Solution",
    audio: "Audio visual Solution",
    project: "Project",
    brand: "Brands",
    about: "About Us",
    contact: "Contact Us",
  },

  ar: {
    home: "بيت",
    services: `خدمات`,
    maintainance: `! تحت الصيانة`,
    wireless: "حلول اللاسلكية",
    security: "حلول الأمان",
    software: "حلول البرمجيات",
    audio: "حلول الصوت والصورة",
    project: "مشروع",
    brand: "العلامات التجارية",
    about: "معلومات عنا",
    contact: "اتصل بنا",
  },
};

// const languageSelecttop = document.getElementById("language-select");

let home = document.getElementById("home");
let services = document.getElementById("services");
let flag = document.getElementById("selected-language");
let maintainance = document.getElementById("maintainance-h");
let wireless = document.getElementById("wireless");
let security = document.getElementById("security");
let software = document.getElementById("software");
let audio = document.getElementById("audio");
let project = document.getElementById("project");
let brand = document.getElementById("brands");
let about = document.getElementById("aboutus");
let contact = document.getElementById("contact");

const setLanguage = (language) => {
  localStorage.setItem("language", language); // Store language preference
  updateUI(language); // Update UI based on selected language
};

const updateUI = (language) => {
  // Update flag icon and dropdown indicator
  if (language == "ar") {
    console.log("m", maintainance);
    flag.innerHTML = `<img src="img/flag.png"> <i class="fal fa-angle-down">`;
    home.innerText = translation.ar.home;
    services.innerHTML = `<a class="nav-link" data-toggle="collapse" href="#menu2" >${translation.ar.services} <i class="fal fa-angle-down"></i></a>`;
    maintainance.innerText = translation.ar.maintainance;
    wireless.innerText = translation.ar.wireless;
    security.innerText = translation.ar.security;
    software.innerText = translation.ar.software;
    audio.innerText = translation.ar.audio;
    project.innerText = translation.ar.project;
    brand.innerText = translation.ar.brand;
    about.innerText = translation.ar.about;
    contact.innerText = translation.ar.contact;
  } else if (language == "en") {
    flag.innerHTML = `<img src="img/united-states.png"> <i class="fal fa-angle-down">`;
    home.innerText = translation.en.home;
    services.innerHTML = `<a class="nav-link" data-toggle="collapse" href="#menu2" >Services <i class="fal fa-angle-down"></i></a>`;
    maintainance.innerText = translation.en.maintainance;
    wireless.innerText = translation.en.wireless;
    security.innerText = translation.en.security;
    software.innerText = translation.en.software;
    audio.innerText = translation.en.audio;
    project.innerText = translation.en.project;
    brand.innerText = translation.en.brand;
    about.innerText = translation.en.about;
    contact.innerText = translation.en.contact;
  }
};

// Function to initialize language preference on page load
const initializeLanguage = () => {
  let storedLanguage = localStorage.getItem("language");
  if (storedLanguage) {
    updateUI(storedLanguage); // Update UI based on stored language preference
  } else {
    // Default language settings if no preference is stored
    setLanguage("en"); // Set English as default language
  }
};

// Call initializeLanguage() when the page loads
document.addEventListener("DOMContentLoaded", initializeLanguage);
