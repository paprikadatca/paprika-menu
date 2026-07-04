// 1) Google Sheets'te File > Share > Publish to web > CSV linkini al.
// 2) Aşağıdaki SHEET_CSV_URL içine yapıştır.
const SHEET_CSV_URL = "";

const SAMPLE_DATA = [
  {lang:"tr", section:"Sandviçler", item:"No.1", description:"Tavuklu sandviç", price:"420", active:"TRUE", order:"1"},
  {lang:"tr", section:"İçecekler", item:"Ayran", description:"", price:"70", active:"TRUE", order:"2"},
  {lang:"en", section:"Sandwiches", item:"No.1", description:"Chicken sandwich", price:"420", active:"TRUE", order:"1"},
  {lang:"en", section:"Drinks", item:"Ayran", description:"", price:"70", active:"TRUE", order:"2"}
];

const landing = document.getElementById("landing");
const menu = document.getElementById("menu");
const menuContent = document.getElementById("menuContent");
const back = document.getElementById("back");

function parseCSV(text){
  const rows = text.trim().split(/\r?\n/).map(line => line.split(",").map(v => v.trim()));
  const headers = rows.shift();
  return rows.map(row => Object.fromEntries(headers.map((h,i)=>[h,row[i] ?? ""])));
}

async function loadData(){
  if(!SHEET_CSV_URL) return SAMPLE_DATA;
  const res = await fetch(SHEET_CSV_URL + (SHEET_CSV_URL.includes("?") ? "&" : "?") + "t=" + Date.now(), {cache:"no-store"});
  if(!res.ok) throw new Error("Sheet okunamadı");
  return parseCSV(await res.text());
}

function render(lang, data){
  const items = data
    .filter(x => String(x.lang).toLowerCase() === lang && String(x.active).toUpperCase() === "TRUE")
    .sort((a,b) => Number(a.order || 0) - Number(b.order || 0));

  const grouped = items.reduce((acc, item) => {
    (acc[item.section] ||= []).push(item);
    return acc;
  }, {});

  menuContent.innerHTML = Object.entries(grouped).map(([section, items]) => `
    <section class="section">
      <h2>${section}</h2>
      ${items.map(i => `
        <div class="item">
          <div class="row"><div class="name">${i.item}</div><div class="price">${i.price ? i.price + "₺" : ""}</div></div>
          ${i.description ? `<div class="desc">${i.description}</div>` : ""}
        </div>
      `).join("")}
    </section>
  `).join("") || `<div class="error">Menü bilgisi bulunamadı.</div>`;
}

async function openMenu(lang){
  landing.classList.add("hidden");
  menu.classList.remove("hidden");
  menuContent.innerHTML = `<div class="error">Menü yükleniyor...</div>`;
  try { render(lang, await loadData()); }
  catch(e){ menuContent.innerHTML = `<div class="error">Menü şu an yüklenemedi.<br>Lütfen biraz sonra tekrar deneyin.</div>`; }
}

document.querySelectorAll("[data-lang]").forEach(btn => btn.addEventListener("click", () => openMenu(btn.dataset.lang)));
back.addEventListener("click", () => { menu.classList.add("hidden"); landing.classList.remove("hidden"); });
