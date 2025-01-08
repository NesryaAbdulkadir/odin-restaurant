import phoneIcon from "../assets/icons/phone.svg";
import emailIcon from "../assets/icons/email.svg";
import mapMarkerIcon from "../assets/icons/map-marker.svg";
import websiteIcon from "../assets/icons/link.svg";

export function contactPage() {
  const contactItems = [
    {
      icon: phoneIcon,
      text: "+91-1234567890",
    },
    {
      icon: emailIcon,
      text: "info@example.com",
    },
    {
      icon: mapMarkerIcon,
      text: "123 Main Street, Anytown, USA",
    },
    {
      icon: websiteIcon,
      text: "www.example.com",
    },
  ];

  const contentDiv = document.getElementById("content");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactHeader = document.createElement("h1");
  contactHeader.textContent = "Contact Us";

  const contactText = document.createElement("p");
  contactText.classList.add("contact-text");
  contactText.textContent = "We are always happy to help you.";

  const contactsDiv = document.createElement("div");
  contactsDiv.classList.add("contacts");

  contactItems.forEach((contactItem) => {
    const contactInfoDiv = document.createElement("div");
    contactInfoDiv.classList.add("contact-info");
    const icon = document.createElement("img");
    icon.classList.add("icon");
    icon.src = contactItem.icon;
    icon.alt = contactItem.text;
    const text = document.createElement("p");
    text.textContent = contactItem.text;
    contactInfoDiv.append(icon, text);
    contactsDiv.appendChild(contactInfoDiv);
    console.log(contactItem);
  });

  contactContainer.append(contactHeader, contactText, contactsDiv);

  contentDiv.appendChild(contactContainer);
}
