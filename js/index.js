const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navBar = document.querySelectorAll("a");
navBar[0].textContent = "Services"
navBar[1].textContent = "Product"
navBar[2].textContent = "Vision"
navBar[3].textContent = "Features"
navBar[4].textContent = "About"
navBar[5].textContent = "Contact"

// CTA SECTION DOM CODE
const ctaHeadline = document.querySelector('h1');
ctaHeadline.textContent = "DOM Is Awesome"

const ctaButton = document.querySelector("button");
ctaButton.textContent = "Get Started"

const ctaImage = document.querySelector("#cta-img");
ctaImage.src = "img/header-img.png"

ctaText = document.querySelector(".cta-text");
ctaText.style.marginRight = "0px"
ctaText.style.width = "46.3%"

//MIDDLE IMAGE DOM CODE
const middleImg = document.querySelector(".middle-img");
middleImg.src ="img/mid-page-accent.jpg"

//H4 DOM CODE
const blankSectionHeaders = document.querySelectorAll("h4");
blankSectionHeaders[0].textContent = "Features"
blankSectionHeaders[1].textContent = "About"
blankSectionHeaders[2].textContent = "Services"
blankSectionHeaders[3].textContent = "Product"
blankSectionHeaders[4].textContent = "Vision"
blankSectionHeaders[5].textContent = "Contact"


//CONTACT CLASS DOM CODE
let contactClass = document.querySelector(".contact")
contactClass.style.width = "20%"


//P DOM CODE
const blankSectionParagraphs = document.querySelectorAll("p");
blankSectionParagraphs[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
blankSectionParagraphs[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
blankSectionParagraphs[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
blankSectionParagraphs[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
blankSectionParagraphs[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
blankSectionParagraphs[5].textContent = "123 Way 456 Street Somewhere, USA"
blankSectionParagraphs[6].textContent = "1 (888) 888-8888"
blankSectionParagraphs[7].textContent = "sales@greatidea.io"
blankSectionParagraphs[8].textContent = "Copyright Great Idea! 2018"

