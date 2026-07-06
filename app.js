window.showMenu = function(lang) {
  document.getElementById("languageScreen").classList.add("hidden");
  document.getElementById("menuScreen").classList.remove("hidden");
  document.getElementById("menuTitle").innerText = lang === "tr" ? "MENÜ" : "MENU";

  const menuContent = document.getElementById("menuContent");

  menuContent.innerHTML = `
    <section class="category daily-category">
      <h2>${lang === "tr" ? "BUGÜN NE YİYECEĞİZ?" : "TODAY'S SPECIALS"}</h2>
      <div class="item"><div class="item-main"><span class="item-name">${lang === "tr" ? "Günün yemeği" : "Daily special"}</span></div><div class="price"></div></div>
    </section>

    <section class="category">
      <h2>${lang === "tr" ? "ANA YEMEKLER" : "MAIN DISHES"}</h2>
      <div class="item"><div class="item-main"><span class="item-name">${lang === "tr" ? "Köfte Porsiyon" : "Meatballs Portion"}</span><span class="item-desc-inline">${lang === "tr" ? "Anne köftesi, patates, soğan" : "Homestyle meatballs, fries, onion"}</span></div><div class="price"></div></div>
      <div class="item"><div class="item-main"><span class="item-name">${lang === "tr" ? "Tavuk Sote" : "Chicken Sauté"}</span></div><div class="price"></div></div>
    </section>

    <section class="category">
      <h2>${lang === "tr" ? "SANDVİÇ ÇEŞİTLERİ" : "SANDWICHES"}</h2>
      <div class="item"><div class="item-main"><span class="item-name">No:1</span><span class="item-desc-inline">${lang === "tr" ? "Peynir, domates, roka, özel sos, cheddar" : "Cheese, tomato, arugula, special sauce, cheddar"}</span></div><div class="price"></div></div>
      <div class="item"><div class="item-main"><span class="item-name">No:2</span></div><div class="price"></div></div>
    </section>
  `;
};
