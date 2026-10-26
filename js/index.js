// Define pizza state

const pizza = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true,
};

const basePrice = 10;

function renderPizza() {  
  const priceUlEl = document.querySelectorAll(".panel.price ul li")
  
  // pepperoni
  const peperonis = document.querySelectorAll(".pep");
  peperonis.forEach(pep => {
    pep.style.visibility = pizza.pepperoni ? "visible" : "hidden";
  });

  if(pizza.pepperoni) {
    priceUlEl[0].style.display = "inherit";
  } else {
    priceUlEl[0].style.display = "none";
  }

  // mushrooms
  const champis = document.querySelectorAll(".mushroom");
  champis.forEach(champi => {
    champi.style.visibility = pizza.mushrooms ? "visible" : "hidden";
  });

  if(pizza.mushrooms) {
    priceUlEl[1].style.display = "inherit";
  } else {
    priceUlEl[1].style.display = "none";
  }

  // pimientos
  const pimientos = document.querySelectorAll(".green-pepper");
  pimientos.forEach(pimiento => {
    pimiento.style.visibility = pizza.greenPeppers ? "visible" : "hidden";
  });

  if(pizza.greenPeppers) {
    priceUlEl[2].style.display = "inherit";
  } else {
    priceUlEl[2].style.display = "none";
  }

  // salsa
  const salsa = document.querySelector(".sauce");
  if (pizza.whiteSauce) {
    salsa.classList.add("sauce-white");
  } else {
    salsa.classList.remove("sauce-white");
  }

  if(pizza.whiteSauce) {
    priceUlEl[3].style.display = "inherit";
  } else {
    priceUlEl[3].style.display = "none";
  }

  // gluten
  const gluten = document.querySelector(".crust");
  if (pizza.glutenFreeCrust) {
    gluten.classList.add("crust-gluten-free");
  } else {
    gluten.classList.remove("crust-gluten-free");
  }

  if(pizza.glutenFreeCrust) {
    priceUlEl[4].style.display = "inherit";
  } else {
    priceUlEl[4].style.display = "none";
  }

  let total = document.querySelector(".panel.price strong");

  let totalSum = basePrice;
  if (pizza.pepperoni) {
    totalSum = totalSum + 1
  }
  if (pizza.mushrooms) {
    totalSum = totalSum + 1
  }
  if (pizza.greenPeppers) {
    totalSum = totalSum + 1
  }
  if (pizza.whiteSauce) {
    totalSum = totalSum + 3
  }
  if (pizza.glutenFreeCrust) {
    totalSum = totalSum + 5
  }

  total.textContent = `$${totalSum}`;

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

