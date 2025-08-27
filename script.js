import { characters } from "./characters.js";

let current = 0;

function showChar(index) {
    const char = characters[index];
    document.getElementById("char-name").textContent = char.name;
    document.getElementById("char-img").src = char.img;
    document.getElementById("char-role").textContent = char.role;
}

function nextChar() {
    current = (current + 1) % characters.length;
    showChar(current);
}

function preChar() {
    current = (current - 1 + characters.length) % characters.length;
    showChar(current);
}

document.querySelector(".next").addEventListener("click", nextChar);
document.querySelector(".prev").addEventListener("click", preChar);

showChar(current);