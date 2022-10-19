const wrapper = document.querySelector(".wrapper");

let pressed = false;
let startX = 0;

wrapper.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.clientX;
    wrapper.style.cursor = "grabbing";
});

wrapper.addEventListener("mouseleave", (e) => {
    pressed = false;
});

window.addEventListener("mouseup", (e) => {
    pressed = false;
    wrapper.style.cursor = "grab";
});

wrapper.addEventListener("mousemove", (e) => {
    if (!pressed) {
        return;
    }

    wrapper.scrollLeft += startX - e.clientX; 
});