// // "use strict";

// // alert("Скрипт подключен");

// // //Методы поиска по DOM-элементам

// // let images = document.getElementsByTagName("img");
// // console.log(images);
// // let coffeeList = document.getElementsByClassName("coffee-item");
// // console.log(coffeeList);
// // let coffee = document.getElementById("coffee-machine");
// // console.log(coffee);

// // //Современные методы

// // let atm = document.querySelector(".atm-container");
// // console.log(atm);

// // let coffeeItem = document.querrySelector(" .coffee-item");
// // console.log(coffeeItem);
// // let coffeeNames = document.querrySelectorAll("span");
// // console.log(coffeeNames);

// // let buttons = document.querySelectorAll(".coffee-item");
// // let cappuccinoButton = buttons[1];
// // console.log(cappuccinoButton);

// // let coffeeList - cappuccinoButton.parentElement;
// // console.log(coffeeList);

// // let nextCoffee = cappuccinoButton.nextElementSibling;
// // console.log(nextCoffee);

// // let previousCoffee = cappuccinoButton.previousElementSibling;
// // console.log(previousCoffee);

// // let cappuccinoChildren = cappuccinoButton.children;
// // console.log(cappuccinoChildren);

// // let cappuccinoText = cappuccinoButton.querySelector("span");
// // console.log(cappuccinoText);

// // //Изменения элементов
// // //Изменение CSS-стилей

// // let bigCup = document.querySelector(".cup");
// // console.log(bigCup.style.width);
// // bigCup.style.width = "300px";
// // bigCup.style.display = "none";
// // bigCup.style.display = ""; //Вернуть как было

// // bigCup.style.backgroundColor = "red";

// // bigCup.style.transition = "transform 5s";
// // setTimeout(function(){
// //   bigCup.style.transform = "rotate(180deg)"
// // }, 5000);

// //Изменение атрибутов

// // let bigCup = document.querySelector(".cup");
// // console.log( bigCup.hasAttribute("src") );
// // let cupSrc = document.getAttribute("src");
// // console.log(cupSrc);

// // bigCup.setAttribute("src", "img/cappuccino.png");
// // bigCup.removeAttribute("src");

// // let btns = document.querySelectorAll(".coffee-item");
// // let espresso = btns[2];
// // let espressoImage = espresso.querySelector("img");

// // let espressoSrc = espressoImage.getAttribute("src");

// // let bigCup = document.querySelector(".cup");
// // bigCup.setAttribute("src", espressoSrc);

// //Изменение внутреннего содержимого элемента

// let displayText = document.querySelector(".display-text");
// console.log(displayText.innerText);
// //displayText.innerText = "Ваш <b>Капучино</b> готовится";

// displayText.innerHTML = "Ваш <b>Латте</b> готовится";

// let coffeeList = document.querySelector(".coffee-list");
// for(let i = 0; i < 2; i++) {
//   coffeelist.innerHTML = coffeeList.innerHTML +  `
//   <div class="coffee-item">
//     <img src="img/americano.png" alt="Американо">
//     <span>Американо - 50 руб.</span>
//   </div>
// `;
// }

// // Изменение классов

// let changeBtn = document.querySelector(".btn");
// console.log(changeBtn.className);
// changeBtn.className = "btn btn-success btn-block";

// console.log(changeBtn.classList);

// changeBtn.classList.add("p-3") //Добавить класс
// changeBtn.classList.remove("m-2") //Удалить класс
// console.log(changeBtn.classList.contains("btn")); //Проверить наличие

// //Планирование


//   let coffeeOper = document.querySelector(".coffee-oper");
// setTimeout(function() {
//   coffeeOper.style.backgroundColor = "red";
// }, 3000);

// //coffeeOper.style.backgroundColor = "";
// //'coffeeOper' is not defined.

// setTimeout(function() {
//   coffeeOper.style.backgroundColor = "";
  
// }, 5000);

// setInterval(function() {
//   let coffeeList = document.querySelector(".display");
//   coffeeList.classList.toggle("bg-danger");
// }, 1000);

// displayInterval = setInterval(function() {
//   let display = document.querySelector(".display");
//   coffeeList.classList.toggle("bg-danger");
// }, 1000);

// setTimeout(function() {
//   clearInterval(displayInterval);
// }, 5000);

function changeDisplayText() {
  let displayText = document.querySelector(".display-text");
  displayText.innerHTML = 'Ваш кофе готовится';
}

setTimeout(changeDisplayText, 1000);



// setTimeout(function() {
//   changeDisplayText();
  
// }, 5000);

// События и слушатели событий

// click - нажатие левой клавиши мыши
// mouseover - наведение мышью на элемент
// mouseleave - наведение мыши на элемент
// mousedown - зажали левую кнопку мыши на элементе
// mouseup - отпустили левую кнопку мыши

// dbclick - двойное нажатие;
// contextmenu - нажатие правой кнопкой мыши

//focus - Начинается ввод в input

//change - Пользователь что-то ввел в input

//keydown - Нажатие кнопки на клавиатуре
//keyup - Отжали кнопку

//transitionend - событие окончания транзиции
//sibmit - отправка формы

//Вешаем событие с помощью атрибута HTML

//<div onclick="showMessage()">Нажми на меня</div>

// 2. Решаем события через св-во

//let changeBtn = document.querySelector(".btn");
 //changeBtn.onclick = function() {
   //alert("Даем сдачу");
 //}

//changeBtn.onclick = alert("Даем сдачу");

//3. Метод addEventListener(event, function)

//let changeBtn = document.querySelector(".btn");
//changeBtn.addEventListener("click", function() {
//console.log("Даем сдачу");
//});

//Снимаем слушателя событий
// let changeBtn = document.querySelector(".btn");
// changeBtn.onclick = function() {
// alert("Даем сдачу");
// }
//changeBtn.onclick = null;

// let changeBtn = document.querySelector(".btn");
// function handler(){
// alert("Даем сдачу");
// }
// changeBtn.addEventListener("click", handler);
// changeBtn.removeEventListener("click", handler);


  
  
