const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2020",
  },
};

// write your code here

// Start Header
const nav1 = document.querySelector("header nav a:first-child");
nav1.textContent = siteContent.nav["nav-item-1"];
nav1.style.color = "green";
const nav2 = document.querySelector("header nav a:nth-child(2)");
nav2.textContent = siteContent.nav["nav-item-2"];
nav2.style.color = "green";
const nav3 = document.querySelector("header nav a:nth-child(3)");
nav3.textContent = siteContent.nav["nav-item-3"];
nav3.style.color = "green";
const nav4 = document.querySelector("header nav a:nth-child(4)");
nav4.textContent = siteContent.nav["nav-item-4"];
nav4.style.color = "green";
const nav5 = document.querySelector("header nav a:nth-child(5)");
nav5.textContent = siteContent.nav["nav-item-5"];
nav5.style.color = "green";
const nav6 = document.querySelector("header nav a:last-child");
nav6.textContent = siteContent.nav["nav-item-6"];
nav6.style.color = "green";

const new1 = document.createElement("a");
new1.textContent = "new1";
new1.style.color = "green";
const new2 = document.createElement("a");
new2.textContent = "new2";
new2.style.color = "green";
const nav = document.querySelector("header nav");
nav.appendChild(new1);
nav.appendChild(new2);

const headImg = document.getElementById("logo-img");
headImg.setAttribute("src", siteContent.nav["img-src"]);
// End Header

// Start Main
const features = document.querySelector(
  ".main-content .top-content div:first-child > h4"
);
features.textContent = siteContent["main-content"]["features-h4"];
const featuresContent = document.querySelector(
  ".main-content .top-content div:first-child > p"
);
featuresContent.textContent = siteContent["main-content"]["features-content"];
const about = document.querySelector(
  ".main-content .top-content div:last-child > h4"
);
about.textContent = siteContent["main-content"]["about-h4"];
const aboutContent = document.querySelector(
  ".main-content .top-content div:last-child > p"
);
aboutContent.textContent = siteContent["main-content"]["about-content"];

const mainImg = document.getElementById("middle-img");
mainImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const services = document.querySelector(
  ".main-content .bottom-content div:first-child > h4"
);
services.textContent = siteContent["main-content"]["features-h4"];
const servicesContent = document.querySelector(
  ".main-content .bottom-content div:first-child > p"
);
servicesContent.textContent = siteContent["main-content"]["features-content"];
const product = document.querySelector(
  ".main-content .bottom-content div:nth-child(2) > h4"
);
product.textContent = siteContent["main-content"]["features-h4"];
const productContent = document.querySelector(
  ".main-content .bottom-content div:nth-child(2) > p"
);
productContent.textContent = siteContent["main-content"]["features-content"];
const vision = document.querySelector(
  ".main-content .bottom-content div:last-child > h4"
);
vision.textContent = siteContent["main-content"]["about-h4"];
const visionContent = document.querySelector(
  ".main-content .bottom-content div:last-child > p"
);
visionContent.textContent = siteContent["main-content"]["about-content"];
// End Main

// Start cta
const h1 = document.querySelector(".cta .cta-text > h1");
h1.textContent = siteContent.cta.h1;

const button = document.querySelector(".cta .cta-text > button");
button.textContent = siteContent.cta.button;

const ctaImg = document.querySelector(".cta > img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);
// End cta

//  Start Contact
const h4 = document.querySelector(".contact > h4");
h4.textContent = siteContent.contact["contact-h4"];
const conPara1 = document.querySelector(".contact > p:first-of-type");
conPara1.textContent = siteContent.contact.address;
const conPara2 = document.querySelector(".contact > p:nth-of-type(2)");
conPara2.textContent = siteContent.contact.phone;
const conPara3 = document.querySelector(".contact > p:last-of-type");
conPara3.textContent = siteContent.contact.email;
//  End Contact

// Start Footer
const footer = document.querySelector("footer > p");
footer.textContent = siteContent.footer.copyright;
// End Footer
