const heartLifeElement = document.getElementById("heart-life");
let heartLife = parseInt(heartLifeElement.innerText) || 0;
const hearts = document.getElementsByClassName("heart-icon");
for (let heart of hearts) {
    heart.addEventListener("click", function() {
        heartLife++;
        heartLifeElement.innerText = heartLife;
    });
}
