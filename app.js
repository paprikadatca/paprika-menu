let currentLang = "tr";

const menuData = {
  settings: {
    currency: "₺"
  },

  categories: [
    { id: "daily", tr_name: "BUGÜN NE YİYECEĞİZ?", en_name: "TODAY'S SPECIALS", order: 1 },
    { id: "main", tr_name: "ANA YEMEKLER", en_name: "MAIN DISHES", order: 2 },
    { id: "appetizers", tr_name: "APERATİFLER", en_name: "APPETIZERS", order: 3 },
    { id: "toasts", tr_name: "TOST ÇEŞİTLERİ", en_name: "TOASTS", order: 4 },
    { id: "sandwiches", tr_name: "SANDVİÇ ÇEŞİTLERİ", en_name: "SANDWICHES", order: 5 },
    { id: "drinks", tr_name: "İÇECEKLER", en_name: "DRINKS", order: 6 },
    { id: "alcohol", tr_name: "ALKOLLÜ İÇECEKLER", en_name: "ALCOHOLIC DRINKS", order: 7 }
  ],

  items: [
    { category_id:"daily", order:1, tr_name:"Günün yemeği", en_name:"Daily special", tr_description:"", en_description:"", price:"" },

    { category_id:"main", order:1, tr_name:"Köfte Porsiyon", en_name:"Meatballs Portion", tr_description:"Anne köftesi, patates, soğan", en_description:"Homestyle meatballs, fries, onion", price:"" },
    { category_id:"main", order:2, tr_name:"Köfte Ekmek", en_name:"Meatball Sandwich", tr_description:"Anne köftesi, domates, soğan, yeşillik", en_description:"Homestyle meatballs, tomato, onion, greens", price:"" },
    { category_id:"main", order:3, tr_name:"İçli Köfte", en_name:"İçli Köfte", tr_description:"Kızartma veya haşlama / adet", en_description:"Fried or boiled / per piece", price:"" },
    { category_id:"main", order:4, tr_name:"Mantı", en_name:"Manti", tr_description:"El açması", en_description:"Handmade Turkish dumplings", price:"" },
    { category_id:"main", order:5, tr_name:"Dana Kavurma", en_name:"Beef Kavurma", tr_description:"", en_description:"", price:"" },
    { category_id:"main", order:6, tr_name:"Et Sote", en_name:"Lamb Sauté", tr_description:"Kuzu", en_description:"Lamb", price:"" },
    { category_id:"main", order:7, tr_name:"Tavuk Sote", en_name:"Chicken Sauté", tr_description:"", en_description:"", price:"" },
    { category_id:"main", order:8, tr_name:"Vejetaryen Mantı", en_name:"Vegetarian Manti", tr_description:"", en_description:"", price:"" },
    { category_id:"main", order:9, tr_name:"Vejetaryen Köfte", en_name:"Vegetarian Meatballs", tr_description:"", en_description:"", price:"" },
    { category_id:"main", order:10, tr_name:"Vejetaryen İçli Köfte", en_name:"Vegetarian İçli Köfte", tr_description:"", en_description:"", price:"" },

    { category_id:"appetizers", order:1, tr_name:"Patates Kızartması", en_name:"French Fries", tr_description:"", en_description:"", price:"" },
    { category_id:"appetizers", order:2, tr_name:"Çıtır Tavuk", en_name:"Crispy Chicken", tr_description:"", en_description:"", price:"" },
    { category_id:"appetizers", order:3, tr_name:"Zeytinyağlı Sarma", en_name:"Stuffed Vine Leaves", tr_description:"", en_description:"", price:"" },
    { category_id:"appetizers", order:4, tr_name:"Kuru Patlıcan Dolması", en_name:"Stuffed Dried Eggplant", tr_description:"", en_description:"", price:"" },
    { category_id:"appetizers", order:5, tr_name:"Ev Yoğurdu", en_name:"Homemade Yogurt", tr_description:"", en_description:"", price:"" },
    { category_id:"appetizers", order:6, tr_name:"Paçanga", en_name:"Paçanga Pastry", tr_description:"", en_description:"", price:"" },
    { category_id:"appetizers", order:7, tr_name:"Cacık", en_name:"Cacık", tr_description:"", en_description:"Yogurt with cucumber", price:"" },

    { category_id:"toasts", order:1, tr_name:"Kaşarlı Tost", en_name:"Cheese Toast", tr_description:"Kaşar, domates", en_description:"Cheese, tomato", price:"" },
    { category_id:"toasts", order:2, tr_name:"Karışık Tost", en_name:"Mixed Toast", tr_description:"Sucuk, kaşar, domates", en_description:"Turkish sausage, cheese, tomato", price:"" },
    { category_id:"toasts", order:3, tr_name:"Paprika Tost", en_name:"Paprika Toast", tr_description:"Papsos, sucuk, kaşar", en_description:"Papsos, Turkish sausage, cheese", price:"" },

    { category_id:"sandwiches", order:1, tr_name:"No:1", en_name:"No.1", tr_description:"Peynir, domates, roka, özel sos, cheddar", en_description:"Cheese, tomato, arugula, special sauce, cheddar", price:"" },
    { category_id:"sandwiches", order:2, tr_name:"No:2", en_name:"No.2", tr_description:"Peynir, domates, roka, özel sos, cheddar, hindi füme, pastırma veya ton balığı", en_description:"Cheese, tomato, arugula, special sauce, cheddar, smoked turkey, pastrami or tuna", price:"" },
    { category_id:"sandwiches", order:3, tr_name:"No:3", en_name:"No.3", tr_description:"Çıtır tavuk, özel sos, yeşillik", en_description:"Crispy chicken, special sauce, greens", price:"" },

    { category_id:"drinks", order:1, tr_name:"Coca Cola", en_name:"Coca-Cola", tr_description:"", en_description:"", price:"" },
    { category_id:"drinks", order:2, tr_name:"Coca Cola Zero", en_name:"Coca-Cola Zero", tr_description:"", en_description:"", price:"" },
    { category_id:"drinks", order:3, tr_name:"Fanta", en_name:"Fanta", tr_description:"", en_description:"", price:"" },
    { category_id:"drinks", order:4, tr_name:"Sprite", en_name:"Sprite", tr_description:"", en_description:"", price:"" },
    { category_id:"drinks", order:5, tr_name:"Ice Tea", en_name:"Iced Tea", tr_description:"", en_description:"", price:"" },
    { category_id:"drinks", order:6, tr_name:"Soda", en_name:"Soda", tr_description:"", en_description:"", price:"" },
    { category_id:"drinks", order:7, tr_name:"Ayran", en_name:"Ayran", tr_description:"", en_description:"", price:"" },
    { category_id:"drinks", order:8, tr_name:"Şalgam", en_name:"Turnip Juice", tr_description:"", en_description:"", price:"" },
    { category_id:"drinks", order:9, tr_name:"Su", en_name:"Water", tr_description:"", en_description:"", price:"" },
    { category_id:"drinks", order:10, tr_name:"Kahveler", en_name:"Coffee", tr_description:"Türk kahvesi, americano, espresso, latte, cappuccino, mocha, filtre kahve", en_description:"Turkish coffee, espresso, americano, latte, cappuccino, filter coffee", price:"" },

    { category_id:"alcohol", order:1, tr_name:"Efes Pilsen 50 cl", en_name:"Efes Pilsen 50 cl", tr_description:"", en_description:"", price:"" },
    { category_id:"alcohol", order:2, tr_name:"Efes Pilsen 33 cl", en_name:"Efes Pilsen 33 cl", tr_description:"", en_description:"", price:"" },
    { category_id:"alcohol", order:3, tr_name:"Heineken 33 cl", en_name:"Heineken 33 cl", tr_description:"", en_description:"", price:"" },
    { category_id:"alcohol", order:4, tr_name:"Carlsberg 33 cl", en_name:"Carlsberg 33 cl", tr_description:"", en_description:"", price:"" },
    { category_id:"alcohol", order:5, tr_name:"Daura 33 cl", en_name:"Daura 33 cl", tr_description:"", en_description:"", price:"" },
    { category_id:"alcohol", order:6, tr_name:"Blue Moon 33 cl", en_name:"Blue Moon 33 cl", tr_description:"", en_description:"", price:"" },
    { category_id:"alcohol", order:7, tr_name:"Şarap", en_name:"Wine", tr_description:"Çeşitleri sorunuz", en_description:"Please ask for available varieties", price:"" },
    { category_id:"alcohol", order:8, tr_name:"Rakı", en_name:"Rakı", tr_description:"Çeşitleri sorunuz", en_description:"Please ask for available varieties", price:"" }
  ]
};

function showMenu(lang) {
  currentLang = lang;

  document.getElementById("languageScreen").classList.add("hidden");
  document.getElementById("menuScreen").classList.remove("hidden");

  renderMenu();
}

function hasText(value) {
  if (value === null || value === undefined) return false;
  const text = String(value).trim();
  return text !== "" && text !== "0";
}

function getItemName(item) {
  if (currentLang === "tr") return item.tr_name;
  return hasText(item.en_name) ? item.en_name : item.tr_name;
}

function getItemDescription(item) {
  if (currentLang === "tr") return item.tr_description;
  return hasText(item.en_description) ? item.en_description : "";
}

function getCategoryName(category) {
  return currentLang === "tr" ? category.tr_name : category.en_name;
}

function renderMenu() {
  const content = document.getElementById("menuContent");
  content.innerHTML = "";

  const currency =
    menuData.settings && menuData.settings.currency
      ? menuData.settings.currency
      : "₺";

  document.getElementById("menuTitle").innerText =
    currentLang === "tr" ? "MENÜ" : "MENU";

  const categories = menuData.categories
    .filter(cat => hasText(cat.id))
    .sort((a, b) => Number(a.order) - Number(b.order));

  categories.forEach(category => {
    const categoryItems = menuData.items
      .filter(item => item.category_id === category.id && hasText(getItemName(item)))
      .sort((a, b) => Number(a.order) - Number(b.order));

    if (categoryItems.length === 0) return;

    const section = document.createElement("section");
    section.className = "category";
    if (category.id === "daily") section.classList.add("daily-category");

    const title = document.createElement("h2");
    title.innerText = getCategoryName(category);
    section.appendChild(title);

    categoryItems.forEach(item => {
      const row = document.createElement("div");
      row.className = "item";

      const main = document.createElement("div");
      main.className = "item-main";

      const name = document.createElement("span");
      name.className = "item-name";
      name.innerText = getItemName(item);

      const descText = getItemDescription(item);
      const desc = document.createElement("span");
      desc.className = "item-desc-inline";
      desc.innerText = hasText(descText) ? descText : "";

      main.appendChild(name);
      if (hasText(descText)) main.appendChild(desc);

      const price = document.createElement("div");
      price.className = "price";

      const priceValue = Number(item.price);
      price.innerText = priceValue > 0 ? priceValue + " " + currency : "";

      row.appendChild(main);
      row.appendChild(price);
      section.appendChild(row);
    });

    content.appendChild(section);
  });
}
