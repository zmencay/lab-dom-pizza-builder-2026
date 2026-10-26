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