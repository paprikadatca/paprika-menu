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

let DATA = {
  settings: { currency: "₺" },
  products: [],
  daily: []
};

function sheetUrl(sheetName) {
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
}

async function loadSheet(sheetName) {
  const response = await fetch(sheetUrl(sheetName));
  const csv = await response.text();
  return csvToObjects(csv);
}

function csvToObjects(csv) {
  const rows = parseCSV(csv);
  const headers = rows.shift().map(h => h.trim());

  return rows.map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index] ? row[index].trim() : "";
    });
    return obj;
  });
}

function parseCSV(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i++;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
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

function hasValidPrice(item) {
  return hasText(item.price) && Number(item.price) > 0;
}

function shouldShowProduct(item) {
  if (!isTrue(item.active)) return false;
  if (isExceptionProduct(item)) return true;
  return hasValidPrice(item);
}

function shouldShowDaily(item) {
  if (!hasText(item.tr_name) && !hasText(item.en_name)) return false;
  if (isExceptionProduct(item)) return true;
  return hasValidPrice(item);
}

function priceText(item) {
  if (!hasValidPrice(item)) return "";
  return `${item.price} ${DATA.settings.currency || "₺"}`;
}

async function loadData() {
  const [products, daily, settings] = await Promise.all([
    loadSheet("Products"),
    loadSheet("Daily"),
    loadSheet("Settings")
  ]);

  DATA.products = products;
  DATA.daily = daily;

  settings.forEach(row => {
    if (hasText(row.key)) DATA.settings[row.key] = row.value;
  });
}

window.showMenu = async function(lang) {
  try {
    if (DATA.products.length === 0) {
      await loadData();
    }

    document.getElementById("languageScreen").classList.add("hidden");
    document.getElementById("menuScreen").classList.remove("hidden");
    document.getElementById("menuTitle").innerText = lang === "tr" ? "MENÜ" : "MENU";

    renderMenu(lang);
  } catch (error) {
    console.error(error);
    alert("Menü verisi yüklenemedi. Google Sheets paylaşım ayarını kontrol et.");
  }
};

window.goBack = function() {
  document.getElementById("menuScreen").classList.add("hidden");
  document.getElementById("languageScreen").classList.remove("hidden");
};

function findMatchingProduct(dailyItem) {
  const dailyName = normalize(dailyItem.tr_name);
  if (!dailyName) return null;

  return DATA.products.find(product => normalize(product.tr_name) === dailyName);
}

function dailyItems() {
  return DATA.daily
    .filter(row => hasText(row.tr_name) || hasText(row.en_name))
    .map(row => {
      const matched = findMatchingProduct(row);

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
        active: "TRUE",
        tr_name: row.tr_name,
        en_name: row.en_name,
        tr_description: row.tr_description,
        en_description: row.en_description,
        price: row.price
      };
    })
    .filter(item => shouldShowDaily(item))
    .sort((a, b) => Number(a.order || 999) - Number(b.order || 999));
}

function renderMenu(lang) {
  const content = document.getElementById("menuContent");
  content.innerHTML = "";

  CATEGORIES.forEach(category => {
    const [categoryId, trTitle, enTitle] = category;

    const items =
      categoryId === "daily"
        ? dailyItems()
        : DATA.products
            .filter(item => item.category === categoryId)
            .filter(item => shouldShowProduct(item))
            .sort((a, b) => Number(a.order || 999) - Number(b.order || 999));

    if (!items.length) return;

    const section = document.createElement("section");
    section.className = "category";
    if (categoryId === "daily") section.classList.add("daily-category");

    const title = document.createElement("h2");
    title.textContent = lang === "tr" ? trTitle : enTitle;
    section.appendChild(title);

    items.forEach(item => {
      const name = lang === "tr" ? item.tr_name : item.en_name || item.tr_name;
      const desc = lang === "tr" ? item.tr_description : item.en_description;

      const row = document.createElement("div");
      row.className = "item";

      row.innerHTML = `
        <div class="item-main">
          ${hasText(name) ? `<span class="item-name">${name}</span>` : ""}
          ${hasText(desc) ? `<span class="item-desc-inline">${desc}</span>` : ""}
        </div>
        <div class="price">${priceText(item)}</div>
      `;

      section.appendChild(row);
    });

    content.appendChild(section);
  });
}
