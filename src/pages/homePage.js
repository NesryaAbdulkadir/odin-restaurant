import heroImg from "../assets/gourmet.jpg";
export function homePage() {
  const contentDiv = document.getElementById("content");
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("hero");
  const welcomeText = document.createElement("p");
  const heroHeading = document.createElement("h1");
  const heroParagraph = document.createElement("p");
  const heroImage = document.createElement("img");

  welcomeText.textContent = "Welcome to";
  heroHeading.textContent = "The Gourmet Bistro";
  heroParagraph.textContent = `We serve the finest dishes made from fresh, locally-sourced ingredients. Our talented chefs create culinary masterpieces that will delight your taste buds and leave you coming back for more.`;
  heroImage.src = heroImg;
  heroImage.alt = "A Gourmet Dish";
  heroImage.classList.add("hero-img");
  contentContainer.append(welcomeText, heroHeading, heroParagraph);
  contentDiv.append(contentContainer, heroImage);
  const homeBtn = document.getElementById("home");
  homeBtn.style.backgroundColor = "white";
  homeBtn.style.color = "black";
}
