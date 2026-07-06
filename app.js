const MENU = {
  tr: {
    todayTitle: "BUGÜN NE YİYECEĞİZ?",
    drinksTitle: "İÇECEKLER",
    today: [
      { name: "Günün yemeği 1", desc: "", price: "" },
      { name: "Günün yemeği 2", desc: "", price: "" },
      { name: "Günün yemeği 3", desc: "", price: "" },
      { name: "Günün yemeği 4", desc: "", price: "" },
      { name: "Günün yemeği 5", desc: "", price: "" }
    ],
    sections: {
      mainDishes: {
        title: "ANA YEMEKLER",
        items: [
          ["Köfte Porsiyon", "Anne Köftesi, Patates, Soğan", ""],
          ["Köfte Ekmek", "Anne Köftesi, Domates, Soğan, Yeşillik", ""],
          ["İçli Köfte", "Kızartma veya Haşlama (adet)", ""],
          ["Mantı", "(El Açması)", ""],
          ["Dana Kavurma", "", ""],
          ["Et Sote", "(Kuzu)", ""],
          ["Tavuk Sote", "", ""],
          ["Vejetaryen Mantı", "", ""],
          ["Vejetaryen Köfte", "", ""],
          ["Vejetaryen İçli Köfte", "", ""]
        ]
      },
      appetizers: {
        title: "APERATİFLER",
        items: [
          ["Patates Kızartması", "", ""],
          ["Çıtır Tavuk", "", ""],
          ["Zeytinyağlı Sarma", "", ""],
          ["Kuru Patlıcan Dolması", "", ""],
          ["Ev Yoğurdu", "", ""],
          ["Paçanga", "", ""],
          ["Cacık", "", ""]
        ]
      },
      toasts: {
        title: "TOST ÇEŞİTLERİ",
        items: [
          ["Kaşarlı Tost", "Kaşar, Domates", ""],
          ["Karışık Tost", "Sucuk, Kaşar, Domates", ""],
          ["Paprika Tost", "Papsos, Sucuk, Kaşar", ""]
        ]
      },
      sandwiches: {
        title: "SANDVİÇ ÇEŞİTLERİ",
        items: [
          ["No:1", "Peynir, Domates, Roka, Özel Sos, Cheddar", ""],
          ["No:2", "Peynir, Domates, Roka, Özel Sos, Cheddar, Hindi Füme, Pastırma veya Ton Balığı", ""],
          ["No:3", "Çıtır Tavuk, Özel Sos, Yeşillik", ""]
        ]
      },
      drinks: {
        title: "",
        items: [
          ["Coca Cola", "", ""],
          ["Coca Cola Zero", "", ""],
          ["Fanta", "", ""],
          ["Sprite", "", ""],
          ["Ice Tea", "", ""],
          ["Soda", "", ""],
          ["Ayran", "", ""],
          ["Şalgam", "", ""],
          ["Su", "", ""],
          ["Kahveler", "(Türk Kahvesi, Americano, Espresso, Latte, Cappuccino, Mocha, Filtre Kahve)", ""]
        ]
      },
      alcohol: {
        title: "ALKOLLÜ İÇECEKLER",
        items: [
          ["Efes Pilsen 50 cl", "", ""],
          ["Efes Pilsen 33 cl", "", ""],
          ["Heineken 33 cl", "", ""],
          ["Carlsberg 33 cl", "", ""],
          ["Daura 33 cl", "", ""],
          ["Blue Moon 33 cl", "", ""],
          ["Şarap", "(Çeşitleri sorunuz)", ""],
          ["Rakı", "(Çeşitleri sorunuz)", ""]
        ]
      }
    }
  },

  en: {
    todayTitle: "TODAY’S SPECIALS?",
    drinksTitle: "DRINKS",
    today: [
      { name: "Daily special 1", desc: "", price: "" },
      { name: "Daily special 2", desc: "", price: "" },
      { name: "Daily special 3", desc: "", price: "" },
      { name: "Daily special 4", desc: "", price: "" },
      { name: "Daily special 5", desc: "", price: "" }
    ],
    sections: {
      mainDishes: {
        title: "MAIN DISHES",
        items: [
          ["Meatballs (Portion)", "Homestyle Meatballs, French Fries, Onion", ""],
          ["Meatball Sandwich", "Homestyle Meatballs, Tomato, Onion, Lettuce", ""],
          ["İçli Köfte (Stuffed Bulgur Shell)", "Bulgur shell filled with seasoned minced beef. Fried or Boiled (per piece)", ""],
          ["Manti", "(Handmade Turkish Dumplings)", ""],
          ["Beef Sauté", "", ""],
          ["Lamb Sauté", "", ""],
          ["Chicken Sauté", "", ""],
          ["Vegetarian Manti", "", ""],
          ["Vegetarian Meatballs", "", ""],
          ["Vegetarian İçli Köfte", "", ""]
        ]
      },
      appetizers: {
        title: "APPETIZERS",
        items: [
          ["French Fries", "", ""],
          ["Crispy Chicken", "", ""],
          ["Stuffed Vine Leaves", "", ""],
          ["Stuffed Dried Eggplant", "", ""],
          ["Homemade Yogurt", "", ""],
          ["Paçanga Pastry", "", ""],
          ["Cacık", "(Yogurt with Cucumber)", ""]
        ]
      },
      toasts: {
        title: "TOASTS",
        items: [
          ["Cheese Toast", "Cheddar Cheese, Tomato", ""],
          ["Mixed Toast", "Sucuk (Turkish Sausage), Cheddar Cheese, Tomato", ""],
          ["Paprika Toast", "Papsos, Sucuk (Turkish Sausage), Cheddar Cheese", ""]
        ]
      },
      sandwiches: {
        title: "SANDWICHES",
        items: [
          ["No.1", "Cheddar Cheese, Tomato, Arugula, Special Sauce", ""],
          ["No.2", "Cheddar Cheese, Tomato, Arugula, Special Sauce, Smoked Turkey, Pastrami or Tuna", ""],
          ["No.3", "Crispy Chicken, Special Sauce, Lettuce", ""]
        ]
      },
      drinks: {
        title: "",
        items: [
          ["Coca-Cola", "", ""],
          ["Coca-Cola Zero", "", ""],
          ["Fanta", "", ""],
          ["Sprite", "", ""],
          ["Iced Tea", "", ""],
          ["Soda", "", ""],
          ["Ayran", "", ""],
          ["Turnip Juice", "", ""],
          ["Water", "", ""],
          ["Coffee", "(Turkish Coffee, Espresso, Americano, Latte, Cappuccino, Ice Americano, Ice Latte)", ""]
        ]
      },
      alcohol: {
        title: "ALCOHOLIC DRINKS",
        items: [
          ["Efes Pilsen 50 cl", "", ""],
          ["Efes Pilsen 33 cl", "", ""],
          ["Heineken 33 cl", "", ""],
          ["Carlsberg 33 cl", "", ""],
          ["Daura 33 cl", "", ""],
          ["Blue Moon 33 cl", "", ""],
          ["Wine", "(Please ask for available varieties)", ""],
          ["Rakı", "(Please ask for available varieties)", ""]
        ]
      }
    }
  }
};

function openMenu(lang) {
  document.getElementById("landing").classList.remove("active");
  document.getElementById("menuPage").classList.add("active");

  const data = MENU[lang];

  document.getElementById("todayTitle").textContent = data.todayTitle;
  document.getElementById("drinksTitle").textContent = data.drinksTitle;

  renderToday(data.today);
  renderBlock("mainDishes", data.sections.mainDishes);
  renderBlock("appetizers", data.sections.appetizers);
  renderBlock("toasts", data.sections.toasts);
  renderBlock("sandwiches", data.sections.sandwiches);
  renderBlock("drinks", data.sections.drinks);
  renderBlock("alcohol", data.sections.alcohol);
}

function goLanding() {
  document.getElementById("menuPage").classList.remove("active");
  document.getElementById("landing").classList.add("active");
}

function renderToday(items) {
  const box = document.getElementById("todayBox");
  box.innerHTML = "";

  items.forEach(item => {
    box.innerHTML += `
      <div class="today-row">
        <div>
          <div class="name">${item.name}</div>
          ${item.desc ? `<div class="desc">${item.desc}</div>` : ""}
        </div>
        <div class="price">${item.price ? item.price + "₺" : "₺"}</div>
      </div>
    `;
  });
}

function renderBlock(targetId, section) {
  const target = document.getElementById(targetId);

  let html = `<div class="block">`;

  if (section.title) {
    html += `<h2>${section.title}</h2>`;
  }

  section.items.forEach(item => {
    html += `
      <div class="menu-row">
        <div>
          <div class="name">${item[0]}</div>
          ${item[1] ? `<div class="desc">${item[1]}</div>` : ""}
        </div>
        <div class="price">${item[2] ? item[2] + "₺" : "₺"}</div>
      </div>
    `;
  });

  html += `</div>`;
  target.innerHTML = html;
}
