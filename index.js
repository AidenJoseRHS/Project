let button = document.getElementById("button")
let img = document.getElementById("img")
let megaEl = document.getElementById("mega-el")
let count = 0
let counter = 1

function functioner() {
 count += counter;
megaEl.textContent = count;
}
functioner()

function  evo() {
    counter += 1
}