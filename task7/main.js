const btnElem = document.getElementById("btn");
let elems = [...document.querySelectorAll(".elem")];

// при клике на кнопку по очереди появляются 3 элемента на странице
// в течение 1 секунды, таким образом задержка в 330мс
// при повторном клике так же по очереди элементы скрываются
function handleClick() {
    const timer = setInterval(function() {
        if(elems.length) {
            elems[0].classList.toggle("active");
            elems.shift();
        } else {
            clearInterval(timer);
            elems = [...document.querySelectorAll(".elem")].reverse();
        }
    }, 330); 
};

btnElem.addEventListener("click", handleClick);