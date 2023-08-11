
//-----------navigation bar
const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const close = document.querySelector("#close");

//show navigation bar
if (bar) {
    bar.addEventListener("click", function () {
        nav.classList.add("active");
    });
}

//close navigation bar
if (close) {
    close.addEventListener("click", function () {
        nav.classList.remove("active");
    });
}