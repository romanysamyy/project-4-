let nav = document.getElementById(`navbar`);
window.addEventListener("scroll", function () {
  let scrollPosition = document.documentElement.scrollTop;
  if (scrollPosition >= 0 && scrollPosition < 10) {
    let cssNavRules = nav.style.cssText;
    let num = cssNavRules.indexOf(`animation: sticky-slide-down 1s forwards;`);
    nav.style.cssText = cssNavRules.slice(0, Number(num) - 1);
  } else {
    nav.style.cssText += `animation: sticky-slide-down 1s forwards;`;
  }
});

// Model//
// -- one --//
var green = document.getElementById("green");
var black = document.getElementById("black");
var orange = document.getElementById("orange");
var blue = document.getElementById("blue");
var img = document.getElementById("img");
//-- end one --//
// -- one --//
green.onclick = function () {
  img.setAttribute("src", "img/Genava Table.jpg");
};

black.onclick = function () {
  img.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};

orange.onclick = function () {
  img.setAttribute("src", "img/Munich moudler chir.jpg");
  console.log("fyfd8");
};

blue.onclick = function () {
  img.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};
//-- end one --//
/* -- two -- */
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var imgs = document.getElementById("imgs");
/* !-- end two */

/* -- two -- */
one.onclick = function () {
  imgs.setAttribute("src", "img/Genava Table.jpg");
};

two.onclick = function () {
  imgs.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};

three.onclick = function () {
  imgs.setAttribute("src", "img/Munich moudler chir.jpg");
  console.log("fyfd8");
};

four.onclick = function () {
  imgs.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};
/* !-- end two */

/* -- three -- */
var what = document.getElementById("what");
var woow = document.getElementById("woow");
var on = document.getElementById("on");
var yab = document.getElementById("yab");
var pho = document.getElementById("pho");
/* !-- end three */

/* -- three -- */
what.onclick = function () {
  pho.setAttribute("src", "img/Genava Table.jpg");
};

woow.onclick = function () {
  pho.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};

on.onclick = function () {
  pho.setAttribute("src", "img/Munich moudler chir.jpg");
  console.log("fyfd8");
};

yab.onclick = function () {
  pho.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};
/* !-- end three */

/* -- four -- */
var cherone = document.getElementById("cherone");
var chertwo = document.getElementById("chertwo");
var cherthree = document.getElementById("cherthree");
var cherfour = document.getElementById("cherfour");
var Mo = document.getElementById("Mo");
/* !-- end four */

/* -- four -- */
cherone.onclick = function () {
  Mo.setAttribute("src", "img/Genava Table.jpg");
};

chertwo.onclick = function () {
  Mo.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};

cherthree.onclick = function () {
  Mo.setAttribute("src", "img/Munich moudler chir.jpg");
  console.log("fyfd8");
};

cherfour.onclick = function () {
  Mo.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};
/* !-- end four */

/* -- five -- */
var Genavagreen = document.getElementById("Genavagreen");
var Genavablack = document.getElementById("Genavablack");
var Genavaorange = document.getElementById("Genavaorange");
var Genavablue = document.getElementById("Genavablue");
var Genava = document.getElementById("Genava");
/* !-- end five */

/* -- five -- */
Genavagreen.onclick = function () {
  Genava.setAttribute("src", "img/Genava Table.jpg");
};

Genavablack.onclick = function () {
  Genava.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};

Genavaorange.onclick = function () {
  Genava.setAttribute("src", "img/Munich moudler chir.jpg");
  console.log("fyfd8");
};

Genavablue.onclick = function () {
  Genava.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};
/* !-- end five */

/* -- six -- */
var Tablegreen = document.getElementById("Tablegreen");
var Tableyellow = document.getElementById("Tableyellow");
var Tableorange = document.getElementById("Tableorange");
var Tableblue = document.getElementById("Tableblue");
var Table = document.getElementById("Table");
/* !-- end six */

/* -- six -- */
Tablegreen.onclick = function () {
  Table.setAttribute("src", "img/Genava Table.jpg");
};

Tableyellow.onclick = function () {
  Table.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};

Tableorange.onclick = function () {
  Table.setAttribute("src", "img/Munich moudler chir.jpg");
  console.log("fyfd8");
};

Tableblue.onclick = function () {
  Table.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};
/* !-- end six */

/* -- seven -- */
var Kibogreen = document.getElementById("Kibogreen");
var Kiboblack = document.getElementById("Kiboblack");
var Kiboorange = document.getElementById("Kiboorange");
var Kiboblue = document.getElementById("Kiboblue");
var Kibo = document.getElementById("Kibo");
/* !-- end seven */

/* -- seven -- */
Kibogreen.onclick = function () {
  Kibo.setAttribute("src", "img/Genava Table.jpg");
};

Kiboblack.onclick = function () {
  Kibo.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};

Kiboorange.onclick = function () {
  Kibo.setAttribute("src", "img/Munich moudler chir.jpg");
  console.log("fyfd8");
};

Kiboblue.onclick = function () {
  Kibo.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};
/* !-- end seven */

/* -- eight -- */
var moudlergreen = document.getElementById("moudlergreen");
var moudlerblack = document.getElementById("moudlerblack");
var moudlerorange = document.getElementById("moudlerorange");
var moudlerblue = document.getElementById("moudlerblue");
var moudler = document.getElementById("moudler");
/* !-- end eight */

/* -- eight -- */
moudlergreen.onclick = function () {
  moudler.setAttribute("src", "img/Genava Table.jpg");
};

moudlerblack.onclick = function () {
  moudler.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};

moudlerorange.onclick = function () {
  moudler.setAttribute("src", "img/Munich moudler chir.jpg");
  console.log("fyfd8");
};

moudlerblue.onclick = function () {
  moudler.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};
/* !-- end eight */

/* -- nine -- */
var chirgreen = document.getElementById("chirgreen");
var chirblack = document.getElementById("chirblack");
var chirorange = document.getElementById("chirorange");
var chirblue = document.getElementById("chirblue");
var chir = document.getElementById("chir");
/* !-- end nine */

/* -- nine -- */
chirgreen.onclick = function () {
  chir.setAttribute("src", "img/Genava Table.jpg");
};

chirblack.onclick = function () {
  chir.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};

chirorange.onclick = function () {
  chir.setAttribute("src", "img/Munich moudler chir.jpg");
  console.log("fyfd8");
};

chirblue.onclick = function () {
  chir.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};
/* !-- end nine */

/* -- ten -- */
var cargreen = document.getElementById("cargreen");
var carblack = document.getElementById("carblack");
var carorange = document.getElementById("carorange");
var car = document.getElementById("car");

/* !-- end ten */

/* -- ten -- */
cargreen.onclick = function () {
  car.setAttribute("src", "img/Genava Table.jpg");
};

carblack.onclick = function () {
  car.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};

carorange.onclick = function () {
  car.setAttribute("src", "img/Munich moudler chir.jpg");
  console.log("fyfd8");
};

/* !-- end ten */

/* -- eleven -- */
var carsgreen = document.getElementById("carsgreen");
var carsblack = document.getElementById("carsblack");
var carsorange = document.getElementById("carsorange");
var cars = document.getElementById("cars");

/* !-- end eleven */

/* -- eleven -- */
carsgreen.onclick = function () {
  cars.setAttribute("src", "img/Genava Table.jpg");
};

carsblack.onclick = function () {
  cars.setAttribute("src", "img/Kibo Sofa.jpg");
  console.log("fyfd8");
};

carsorange.onclick = function () {
  cars.setAttribute("src", "img/Munich moudler chir.jpg");
  console.log("fyfd8");
};

/* !-- end eleven */
