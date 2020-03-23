services = document.getElementById("services");
dropdown = document.getElementById("dropdown");

services.addEventListener("mouseover", show);
dropdown.addEventListener("mouseleave", hide);

function show () {
    dropdown.style.opacity = "1";
}

function hide () {
    dropdown.style.opacity = "0"
}

