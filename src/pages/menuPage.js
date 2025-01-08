export function menuPage() {
  const MenuItem = [
    {
      name: "Truffle Risotto",
      description:
        "Arborio rice, white truffles, Parmesan cheese, vegetable or chicken broth, shallots, white wine, butter.",
      price: "$100",
    },
    {
      name: "Beef Wellington",
      description:
        "Ingredients: Beef fillet, puff pastry, mushrooms (duxelles), prosciutto, Dijon mustard, egg yolk, thyme.",
      price: "$100",
    },
    {
      name: "Seared Scallops",
      description:
        "Ingredients: Fresh scallops, butter, garlic, lemon juice, white wine, parsley, salt, and pepper.",
      price: "$100",
    },
    {
      name: "Duck Confit",
      description:
        "Ingredients: Duck legs, duck fat, garlic, thyme, bay leaves, salt, and pepper.",
      price: "$100",
    },
    {
      name: "Lobster Thermidor",
      description:
        "Ingredients: Lobster meat, heavy cream, egg yolks, Dijon mustard, shallots, white wine, Gruyère cheese, paprika.",
      price: "$100",
    },
    {
      name: "Wild Mushroom Tart",
      description:
        "Ingredients: Puff pastry, wild mushrooms (e.g., chanterelles, shiitake), goat cheese, garlic, thyme, cream, and eggs.",
      price: "$100",
    },
    {
      name: "Grilled Asparagus with Hollandaise",
      description:
        "Ingredients: Fresh asparagus, butter, egg yolks, lemon juice, Dijon mustard, salt, and pepper.",
      price: "$100",
    },
    {
      name: "Chocolate Fondant",
      description:
        "Ingredients: Dark chocolate, butter, sugar, eggs, flour, and vanilla extract.",
      price: "$100",
    },
    {
      name: "Charcuterie Board",
      description:
        "Ingredients: Assorted cured meats (e.g., salami, prosciutto), cheeses (e.g., Brie, cheddar), olives, pickles, nuts, artisan bread.",
      price: "$100",
    },
    {
      name: "Pistachio Crusted Lamb Chops",
      description:
        "Ingredients: Lamb chops, pistachios, breadcrumbs, garlic, rosemary, olive oil, salt, and pepper.",
      price: "$100",
    },
  ];
  const contentDiv = document.getElementById("content");
  const pageContainer = document.createElement("div");
  pageContainer.classList.add("page-container");
  const header = document.createElement("h1");
  header.classList.add("menu-header");
  header.textContent = "Menu";
  pageContainer.append(header);
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  const sideMenu = document.createElement("ul");
  sideMenu.classList.add("side-menu");
  const mainMenu = document.createElement("ul");
  mainMenu.classList.add("main-menu");
  MenuItem.forEach((item) => {
    const sideMenuItem = document.createElement("li");
    const button = document.createElement("button");
    sideMenuItem.append(button);
    button.innerText = item.name;
    sideMenu.append(button);
    button.addEventListener("click", () => {
      mainMenu.innerHTML = "";
      displayItems(item);
    });
  });
  function displayItems(item) {
    const mainMenuItem = document.createElement("li");
    mainMenuItem.classList.add("menu-item");
    const mainMenuHeader = document.createElement("h1");
    const mainMenuParagraph = document.createElement("p");
    const mainMenuPrice = document.createElement("p");
    mainMenuPrice.classList.add("price");
    mainMenuHeader.innerText = item.name;
    mainMenuParagraph.innerText = item.description;
    mainMenuPrice.innerText = item.price;
    mainMenuItem.append(mainMenuHeader, mainMenuParagraph, mainMenuPrice);
    mainMenu.append(mainMenuItem);
    menuContainer.append(mainMenu);
  }
  displayItems(MenuItem[0]);
  menuContainer.append(sideMenu, mainMenu);
  pageContainer.append(menuContainer);
  contentDiv.append(pageContainer);
}
