const MENU = {
  currency: "₺",
  categories: [
    ["daily", "BUGÜN NE YİYECEĞİZ?", "TODAY'S SPECIALS"],
    ["main", "ANA YEMEKLER", "MAIN DISHES"],
    ["appetizers", "APERATİFLER", "APPETIZERS"],
    ["toasts", "TOST ÇEŞİTLERİ", "TOASTS"],
    ["sandwiches", "SANDVİÇ ÇEŞİTLERİ", "SANDWICHES"],
    ["drinks", "İÇECEKLER", "DRINKS"],
    ["alcohol", "ALKOLLÜ İÇECEKLER", "ALCOHOLIC DRINKS"]
  ],
  items: [
    ["daily", "Günün yemeği 1", "Daily special 1", "", "", ""],
    ["daily", "Günün yemeği 2", "Daily special 2", "", "", ""],

    ["main", "Köfte Porsiyon", "Meatballs Portion", "Anne köftesi, patates, soğan", "Homestyle meatballs, fries, onion", ""],
    ["main", "Köfte Ekmek", "Meatball Sandwich", "Anne köftesi, domates, soğan, yeşillik", "Homestyle meatballs, tomato, onion, greens", ""],
    ["main", "İçli Köfte", "İçli Köfte", "Kızartma veya haşlama / adet", "Fried or boiled / per piece", ""],
    ["main", "Mantı", "Manti", "El açması", "Handmade Turkish dumplings", ""],
    ["main", "Dana Kavurma", "Beef Sauté", "", "", ""],
    ["main", "Et Sote", "Lamb Sauté", "Kuzu", "Lamb", ""],
    ["main", "Tavuk Sote", "Chicken Sauté", "", "", ""],
    ["main", "Vejetaryen Mantı", "Vegetarian Manti", "", "", ""],
    ["main", "Vejetaryen Köfte", "Vegetarian Meatballs", "", "", ""],
    ["main", "Vejetaryen İçli Köfte", "Vegetarian İçli Köfte", "", "", ""],

    ["appetizers", "Patates Kızartması", "French Fries", "", "", ""],
    ["appetizers", "Çıtır Tavuk", "Crispy Chicken", "", "", ""],
    ["appetizers", "Zeytinyağlı Sarma", "Stuffed Vine Leaves", "", "", ""],
    ["appetizers", "Kuru Patlıcan Dolması", "Stuffed Dried Eggplant", "", "", ""],
    ["appetizers", "Ev Yoğurdu", "Homemade Yogurt", "", "", ""],
    ["appetizers", "Paçanga", "Paçanga Pastry", "", "", ""],
    ["appetizers", "Cacık", "Cacık", "", "Yogurt with cucumber", ""],

    ["toasts", "Kaşarlı Tost", "Cheese Toast", "Kaşar, domates", "Cheese, tomato", ""],
    ["toasts", "Karışık Tost", "Mixed Toast", "Sucuk, kaşar, domates", "Turkish sausage, cheese, tomato", ""],
    ["toasts", "Paprika Tost", "Paprika Toast", "Papsos, sucuk, kaşar", "Papsos, Turkish sausage, cheese", ""],

    ["sandwiches", "No:1", "No.1", "Peynir, domates, roka, özel sos, cheddar", "Cheese, tomato, arugula, special sauce, cheddar", ""],
    ["sandwiches", "No:2", "No.2", "Peynir, domates, roka, özel sos, cheddar, hindi füme, pastırma veya ton balığı", "Cheese, tomato, arugula, special sauce, cheddar, smoked turkey, pastrami or tuna", ""],
    ["sandwiches", "No:3", "No.3", "Çıtır tavuk, özel sos, yeşillik", "Crispy chicken, special sauce, greens", ""],

    ["drinks", "Coca Cola", "Coca-Cola", "", "", ""],
    ["drinks", "Coca Cola Zero", "Coca-Cola Zero", "", "", ""],
    ["drinks", "Fanta", "Fanta", "", "", ""],
    ["drinks", "Sprite", "Sprite", "", "", ""],
    ["drinks", "Ice Tea", "Iced Tea", "", "", ""],
    ["drinks", "Soda", "Soda", "", "", ""],
    ["drinks", "Ayran", "Ayran", "", "", ""],
    ["drinks", "Şalgam", "Turnip Juice", "", "", ""],
    ["drinks", "Su", "Water", "", "", ""],
    ["drinks", "Kahveler", "Coffee", "Türk kahvesi, americano, espresso, latte, cappuccino, mocha, filtre kahve", "Turkish coffee, espresso, americano, latte, cappuccino, filter coffee", ""],

    ["alcohol", "Efes Pilsen 50 cl", "Efes Pilsen 50 cl", "", "", ""],
    ["alcohol", "Efes Pilsen 33 cl", "Efes Pilsen 33 cl", "", "", ""],
    ["alcohol", "Heineken 33 cl", "Heineken 33 cl", "", "", ""],
    ["alcohol", "Carlsberg 33 cl", "Carlsberg 33 cl", "", "", ""],
    ["alcohol", "Daura 33 cl", "Daura 33 cl", "", "", ""],
    ["alcohol", "Blue Moon 33 cl", "Blue Moon 33 cl", "", "", ""],
    ["alcohol", "Şarap", "Wine", "Çeşitleri sorunuz", "Please ask for available varieties", ""],
    ["alcohol", "Rakı", "Rakı", "Çeşitleri sorunuz", "Please ask for available varieties", ""]
  ]
};

window.showMenu = function(lang) {
  document.getElementById("languageScreen").classList.add("hidden");
  document.getElementById("menuScreen").classList.remove("hidden");
  document.getElementById("menuTitle").innerText = lang === "tr" ? "MENÜ" : "MENU";

  renderMenu(lang);
};

function renderMenu(lang) {
  const content = document.getElementById("menuContent");
  content.innerHTML = "";

  MENU.categories.forEach(category => {
    const [categoryId, trTitle, enTitle] = category;
    const sectionItems = MENU.items.filter(item => item[0] === categoryId);

    if (!sectionItems.length) return;

    const section = document.createElement("section");
    section.className = "category";
    if (categoryId === "daily") section.classList.add("daily-category");

    const h2 = document.createElement("h2");
    h2.textContent = lang === "tr" ? trTitle : enTitle;
    section.appendChild(h2);

    sectionItems.forEach(item => {
      const name = lang === "tr" ? item[1] : item[2];
      const desc = lang === "tr" ? item[3] : item[4];
      const price = item[5];

      const row = document.createElement("div");
      row.className = "item";

      row.innerHTML = `
        <div class="item-main">
          <span class="item-name">${name}</span>
          ${desc ? `<span class="item-desc-inline">${desc}</span>` : ""}
        </div>
        <div class="price">${price ? price + " " + MENU.currency : ""}</div>
      `;

      section.appendChild(row);
    });

    content.appendChild(section);
  });
}
