const SHEET_ID = "1xSoVXs3ABjpSUiOMOxCmvBv3ptoLmapz6flkZfIIlcw";

const CATEGORIES = [
  ["daily", "BUGÜN NE YİYECEĞİZ?", "TODAY'S SPECIALS"],
  ["main", "ANA YEMEKLER", "MAIN DISHES"],
  ["appetizers", "APERATİFLER", "APPETIZERS"],
  ["toasts", "TOST ÇEŞİTLERİ", "TOASTS"],
  ["sandwiches", "SANDVİÇ ÇEŞİTLERİ", "SANDWICHES"],
  ["drinks", "İÇECEKLER", "DRINKS"],
  ["alcohol", "ALKOLLÜ İÇECEKLER", "ALCOHOLIC DRINKS"]
];

let MENU = {
  settings: { currency: "₺" },
  products: [],
  daily: []
};

function sheetUrl(sheetName) {
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
}

async function loadSheet(sheetName) {
  const res = await fetch(sheetUrl(sheetName));
  const text = await res.text();
  return csvToObjects(text);
}

function csvToObjects(csv) {
  const rows = parseCSV(csv);
  const headers = rows.shift().map(h => h.trim());
  return rows.map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i] ? row[i].trim() : "");
    return obj;
  });
}

function parseCSV(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let insideQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && insideQuotes && next === '"') {
      cell += '"';
      i++;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (cell || row.length) {
        row.push(cell);
        rows.push(row);
        row = [];
        cell = "";
      }
      if (char === "\r" && next === "\n") i++;
    } else {
      cell += char;
    }
  }

  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }

  return rows;
}

function hasText(value) {
  return value !== null && value !== undefined && String(value).trim() !== "";
}

function isTrue(value) {
  return String(value).trim().toUpperCase() === "TRUE";
}

function normalize(value) {
  return String(value || "")
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ");
}

function isExceptionProduct(item) {
  const name = normalize(item.tr_name);
  return name === "şarap" || name === "rakı";
}

function shouldShowProduct(item) {
  if (!isTrue(item.active)) return false;
  if (isExceptionProduct(item)) return true;
  return hasText(item.price) && Number(item.price) > 0;
}

function formatPrice(item) {
  if (isExceptionProduct(item) && !hasText(item.price)) {
    return "";
  }

  return hasText(item.price) && Number(item.price) > 0
    ? `${item.price} ${MENU.settings.currency || "₺"}`
    : "";
}

async function initMenu() {
  try {
    const [products, daily, settings] = await Promise.all([
      loadSheet("Products"),
      loadSheet("Daily"),
      loadSheet("Settings")
    ]);

    MENU.products = products;
    MENU.daily = daily;

    settings.forEach(row => {
      if (row.key) MENU.settings[row.key] = row.value;
    });
  } catch (err) {
    alert("Menü verisi Google Sheets'ten yüklenemedi. Paylaşım ayarını kontrol et.");
    console.error(err);
  }
}

window.showMenu = async function(lang) {
  if (MENU.products.length === 0) {
    await initMenu();
  }

  document.getElementById("languageScreen").classList.add("hidden");
  document.getElementById("menuScreen").classList.remove("hidden");
  document.getElementById("menuTitle").innerText = lang === "tr" ? "MENÜ" : "MENU";

  renderMenu(lang);
};

window.goBack = function() {
  document.getElementById("menuScreen").classList.add("hidden");
  document.getElementById("languageScreen").classList.remove("hidden");
};

function findProductByDailyRow(dailyRow) {
  const dailyName = normalize(dailyRow.tr_name);
  if (!dailyName) return null;

  return MENU.products.find(product => normalize(product.tr_name) === dailyName);
}

function getDailyItems() {
  return MENU.daily
    .filter(row => isTrue(row.active))
    .map(row => {
      const matched = findProductByDailyRow(row);

      if (matched) {
        return {
          category: "daily",
          order: row.order || matched.order,
          active: "TRUE",
          tr_name: matched.tr_name,
          en_name: matched.en_name,
          tr_description: matched.tr_description,
          en_description: matched.en_description,
          price: matched.price
        };
      }

      return {
        category: "daily",
        order: row.order,
        active: row.active,
        tr_name: row.tr_name,
        en_name: row.en_name,
        tr_description: row.tr_description,
        en_description: row.en_description,
        price: row.price
      };
    })
    .filter(item => shouldShowProduct(item))
    .sort((a, b) => Number(a.order || 999) - Number(b.order || 999));
}

function renderMenu(lang) {
  const content = document.getElementById("menuContent");
  content.innerHTML = "";

  CATEGORIES.forEach(category => {
    const [categoryId, trTitle, enTitle] = category;

    let items;

    if (categoryId === "daily") {
      items = getDailyItems();
    } else {
      items = MENU.products
        .filter(item => item.category === categoryId)
        .filter(item => shouldShowProduct(item))
        .sort((a, b) => Number(a.order || 999) - Number(b.order || 999));
    }

    if (!items.length) return;

    const section = document.createElement("section");
    section.className = "category";
    if (categoryId === "daily") section.classList.add("daily-category");

    const h2 = document.createElement("h2");
    h2.textContent = lang === "tr" ? trTitle : enTitle;
    section.appendChild(h2);

    items.forEach(item => {
      const name = lang === "tr" ? item.tr_name : (item.en_name || item.tr_name);
      const desc = lang === "tr" ? item.tr_description : item.en_description;
      const price = formatPrice(item);

      const row = document.createElement("div");
      row.className = "item";

      row.innerHTML = `
        <div class="item-main">
          ${hasText(name) ? `<span class="item-name">${name}</span>` : ""}
          ${hasText(desc) ? `<span class="item-desc-inline">${desc}</span>` : ""}
        </div>
        <div class="price">${price}</div>
      `;

      section.appendChild(row);
    });

    content.appendChild(section);
  });
}
