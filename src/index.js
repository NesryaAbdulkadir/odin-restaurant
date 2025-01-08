import "./style.css";
import { homePage } from "./pages/homePage";
import { menuPage } from "./pages/menuPage";
import { contactPage } from "./pages/contactPage";

document.addEventListener("DOMContentLoaded", homePage);

document.getElementById("menu").addEventListener("click", () => {
  clearContent();
  const menuBtn = document.getElementById("menu");
  menuBtn.style.backgroundColor = "white";
  menuBtn.style.color = "black";
  const homeBtn = document.getElementById("home");
  homeBtn.style.backgroundColor = "black";
  homeBtn.style.color = "white";
  const contactBtn = document.getElementById("contact");
  contactBtn.style.backgroundColor = "black";
  contactBtn.style.color = "white";
  menuPage();
});

document.getElementById("home").addEventListener("click", () => {
  clearContent();
  const homeBtn = document.getElementById("home");
  homeBtn.style.backgroundColor = "white";
  homeBtn.style.color = "black";
  const menuBtn = document.getElementById("menu");
  menuBtn.style.backgroundColor = "black";
  menuBtn.style.color = "white";
  const contactBtn = document.getElementById("contact");
  contactBtn.style.backgroundColor = "black";
  contactBtn.style.color = "white";

  homePage();
});

document.getElementById("contact").addEventListener("click", () => {
  clearContent();
  const contactBtn = document.getElementById("contact");
  contactBtn.style.backgroundColor = "white";
  contactBtn.style.color = "black";
  const menuBtn = document.getElementById("menu");
  menuBtn.style.backgroundColor = "black";
  menuBtn.style.color = "white";
  const homeBtn = document.getElementById("home");
  homeBtn.style.backgroundColor = "black";
  homeBtn.style.color = "white";
  contactPage();
});

function clearContent() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
}
