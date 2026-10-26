// Define pizza state

const pizza = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true,
};

function renderPizza() {  
  // pepperoni
  const peperonis = document.querySelectorAll(".pep");
  peperonis.forEach(pep => {
    pep.style.visibility = pizza.pepperoni ? "visible" : "hidden";
  });

  // mushrooms
  const champis = document.querySelectorAll(".mushroom");
  champis.forEach(champi => {
    champi.style.visibility = pizza.mushrooms ? "visible" : "hidden";
  });

  // pimientos
  const pimientos = document.querySelectorAll(".green-pepper");
  pimientos.forEach(pimiento => {
    pimiento.style.visibility = pizza.greenPeppers ? "visible" : "hidden";
  });

  // salsa
  const salsa = document.querySelector(".sauce");
  if (pizza.whiteSauce) {
    salsa.classList.add("sauce-white");
  } else {
    salsa.classList.remove("sauce-white");
  }

  // gluten
  const gluten = document.querySelector(".crust");
  if (pizza.glutenFreeCrust) {
    gluten.classList.add("crust-gluten-free");
  } else {
    gluten.classList.remove("crust-gluten-free");
  }
}

// peperoni
const btnPep = document.querySelector(".btn.btn-pepperoni");

btnPep.onclick = function () {
  pizza.pepperoni = !pizza.pepperoni;
  this.classList.toggle('active');

  renderPizza();
};

// champis
const btnChampis = document.querySelector(".btn.btn-mushrooms");

btnChampis.onclick = function () {
  pizza.mushrooms = !pizza.mushrooms;
  this.classList.toggle('active');

  renderPizza();
};

// pimientos
const btnPimientos = document.querySelector(".btn.btn-green-peppers");

btnPimientos.onclick = function () {
  pizza.greenPeppers = !pizza.greenPeppers;
  this.classList.toggle('active');

  renderPizza();
};

// salsa blanca
const btnSalsa = document.querySelector(".btn.btn-sauce");

btnSalsa.onclick = function () {
  pizza.whiteSauce = !pizza.whiteSauce;
  this.classList.toggle('active');

  renderPizza();
};

// masa gluten
const btnCrust = document.querySelector(".btn.btn-crust");

btnCrust.onclick = function () {
  pizza.glutenFreeCrust = !pizza.glutenFreeCrust;
  this.classList.toggle('active');

  renderPizza();
};