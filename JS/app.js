const input1El = document.querySelector("#input1");
const input2El = document.querySelector("#input2");
const input3El = document.querySelector("#input3");
const BtnAdd = document.querySelector("#BtnAdd");
const Btn3 = document.querySelector("#Btn3");
const calories = document.querySelector("#reasult__input");
const Sett = document.querySelector("#sett");
const addcalories = document.querySelector(".main__reasult__add");
const curcal = document.querySelector("#cuurencal");

const form_li = document.querySelector("#form__li");
const form_ul = document.querySelector("#form__ul");
const maincircle = document.querySelector(".main__reasult__circle");
BtnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (input1El.value == "") {
    input1El.style.borderColor = "red";
  } else if (input1El.value !== "") {
    input1El.style.borderColor = "black";
  }
  if (input2El.value == "") {
    input2El.style.borderColor = "red";
  } else if (input2El.value !== "") {
    input2El.style.borderColor = "black";
  }
  if (input1El.value !== "" && input2El.value !== "") {
    app();
  }
});
Sett.addEventListener("click", () => {
  addcalories.style.display = "flex";
  maincircle.style.display = "none";
  Sett.style.display = "none";
});
let chooseCalories = "2500";
Btn3.addEventListener("click", () => {
  if (input3El.value !== "") {
    addcalories.style.display = "none";
    maincircle.style.display = "flex";
    Sett.style.display = "flex";
    input3El.style.border = "none";
    chooseCalories = input3El.value;
    calories.value = chooseCalories + " " + "kcal";
  } else {
    input3El.style.border = "2px solid red";
  }
  ChangeColorCurrentCalories();
});

let currentCalories = 0;

let list = [];

function app() {
  curcal.innerHTML = currentCalories + " " + "kcal";
  const newFood = {
    name: input1El.value,
    kcal: Number(input2El.value),
  };
  addFoodItem(newFood);
  ChangeColorCurrentCalories();
  renderFood();
  RemoveFood();
}

function ChangeColorCurrentCalories() {
  if (currentCalories < Number(chooseCalories)) {
    curcal.style.color = "green";
  } else {
    curcal.style.color = "red";
  }
}

function addFoodItem(food) {
  list.push(food);
  currentCalories = currentCalories + food.kcal;
  curcal.innerHTML = `${currentCalories + " " + "kcal"}`;
  input1El.value = "";
  input2El.value = "";
}

window.addEventListener("load", renderFood);

function renderFood() {
  form_ul.innerHTML = "";
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] == "") {
      list.splice(i, 1);
      i--;
    }
  }
  list.forEach((task) => {
    let foodElement = document.createElement("li");
    foodElement.setAttribute("id", "form__li");
    foodElement.innerHTML = `<p>${task.name}</p>
    <h3>${task.kcal} kcal</h3>
    <i class="fa-solid fa-x" id="list__remove" data-id="${count++}" ></i>`;
    form_ul.appendChild(foodElement);
  });
}
function RemoveFood() {
  let listRemove = document.querySelectorAll("#list__remove");
  listRemove.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.target.parentNode.remove();
      let count = e.target.dataset.id;
      let listID = list[count];
      list.splice(count, 1, "");
      currentCalories = currentCalories - listID.kcal;
      curcal.innerHTML = `${currentCalories + " " + "kcal"}`;
      ChangeColorCurrentCalories();
    });
  });
}
