const mainBlock = document.querySelector("main");

// Случайное число от 10 до 100
const randomNum = Math.floor(Math.random() * (100 - 10) + 10);

for (let i = 0; i < randomNum; i++) {
    const squareElem = document.createElement("div");
    squareElem.classList.add("square");
    
    mainBlock.appendChild(squareElem); // создали квадратик и добавили его на страницу

    const max = 100;
    // задаем квадрату случайное положение на странице
    squareElem.style.top =  `${Math.floor(Math.random()*(max + 1))}%`; 
    squareElem.style.left = `${Math.floor(Math.random()*max + 1)}%`;
}
