const menuData = [
  {
    lang: "tr",
    type: "special",
    section: "Günün Özeli",
    item: "Ev Yapımı Köfte",
    description: "Patates ve salata ile",
    price: "520"
  },
  {
    lang: "tr",
    type: "item",
    section: "Sandviçler",
    item: "No.1",
    description: "Tavuklu sandviç",
    price: "420"
  },
  {
    lang: "tr",
    type: "item",
    section: "Sandviçler",
    item: "No.2",
    description: "Köfteli sandviç",
    price: "450"
  },
  {
    lang: "tr",
    type: "item",
    section: "İçecekler",
    item: "Ayran",
    description: "",
    price: "70"
  },
  {
    lang: "en",
    type: "special",
    section: "Today's Special",
    item: "Homemade Meatballs",
    description: "With potatoes and salad",
    price: "520"
  },
  {
    lang: "en",
    type: "item",
    section: "Sandwiches",
    item: "No.1",
    description: "Chicken sandwich",
    price: "420"
  },
  {
    lang: "en",
    type: "item",
    section: "Sandwiches",
    item: "No.2",
    description: "Meatball sandwich",
    price: "450"
  },
  {
    lang: "en",
    type: "item",
    section: "Drinks",
    item: "Ayran",
    description: "",
    price: "70"
  }
];

function showMenu(lang) {
  document.getElementById("landing").classList.remove("active");
  document.getElementById("menu").classList.add("active");

  document.getElementById("specialTitle").textContent =
    lang === "tr" ? "Günün Özeli" : "Today's Special";

  renderMenu(lang);
}

function goHome() {
  document.getElementById("menu").classList.remove("active");
  document.getElementById("landing").classList.add("active");
}

function renderMenu(lang) {
  const data = menuData.filter(x => x.lang === lang);
  const specials = data.filter(x => x.type === "special");
  const items = data.filter(x => x.type === "item");

  const specialList = document.getElementById("specialList");
  specialList.innerHTML = "";

  specials.forEach(x => {
    specialList.innerHTML += `
      <div class="special-item">
        <strong>${x.item}</strong>
        <p>${x.description}</p>
        <div class="price">${x.price}₺</div>
      </div>
    `;
  });

  const grouped = {};

  items.forEach(x => {
    if (!grouped[x.section]) grouped[x.section] = [];
    grouped[x.section].push(x);
  });

  const menuList = document.getElementById("menuList");
  menuList.innerHTML = "";

  Object.keys(grouped).forEach(section => {
    let html = `
      <div class="section">
        <h3>${section}</h3>
    `;

    grouped[section].forEach(x => {
      html += `
        <div class="item">
          <div>
            <strong>${x.item}</strong>
            ${x.description ? `<p>${x.description}</p>` : ""}
          </div>
          <div class="price">${x.price}₺</div>
        </div>
      `;
    });

    html += `</div>`;
    menuList.innerHTML += html;
  });
}
