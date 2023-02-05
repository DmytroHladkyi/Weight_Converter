let kgRef = document.getElementById("kg");
let lbRef = document.getElementById("lb");
let ozRef = document.getElementById("oz");

let convertFromKg = () => {
  let kg = kgRef.value;
  //toFixed(2) limits the decimals to 2 digits.
  lbRef.value = (kg * 2.205).toFixed(2);
  ozRef.value = (kg * 35.274).toFixed(2);
};

let convertFromLb = () => {
  let lb = lbRef.value;
  kgRef.value = (lb / 2.205).toFixed(2);
  ozRef.value = (lb * 16).toFixed(2);
};

let convertFromOz = () => {
  let oz = ozRef.value;
  kgRef.value = (oz / 35.274).toFixed(2);
  lbRef.value = (oz / 16).toFixed(2);
};

kgRef.addEventListener("input", convertFromKg);
lbRef.addEventListener("input", convertFromLb);
ozRef.addEventListener("input", convertFromOz);
window.addEventListener("load", convertFromKg);

// addEventListener to metoda, dzięki której możemy wywołać jakąś funkcję w momencie, kiedy zostanie wykryte jakieś zdarzenie (event). Zdarzeniem może być kliknięcie przycisku, przewinięcie strony czy najechanie kursorem na jakiś element. Za pomocą „listenera” możemy obsługiwać zdarzenia wywołane myszą, klawiaturą czy zachowaniem samej strony internetowej (np. możemy wywołać funkcję dopiero po załadowaniu wszystkich elementów strony).