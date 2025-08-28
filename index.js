// Life Features

const heartLifeElement = document.getElementById("heart-life");
let heartLife = parseInt(heartLifeElement.innerText) || 0;
const hearts = document.getElementsByClassName("heart-icon");
for (let heart of hearts) {
    heart.addEventListener("click", function() {
        heartLife++;
        heartLifeElement.innerText = heartLife;
    });
}

// calling features
const callCoinElement = document.getElementById("call-coin");
let coins = parseInt(callCoinElement.innerText) || 100;
const callHistoryElement = document.querySelector("#call-history-list");

// Add event listeners for Call buttons
document.querySelectorAll(".call-btn").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");

    const serviceName = card.querySelector(".serviceName").innerText;
    const serviceNumber = card.querySelector(".serviceNumber").innerText;

    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    coins -= 20;
    callCoinElement.innerText = coins;

    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    const now = new Date();
    const time = now.toLocaleTimeString();

    const entry = document.createElement("div");
    entry.className = "flex justify-between items-center mt-2 rounded-lg bg-gray-100 p-2";
    entry.innerHTML = `
      <div>
        <h1 class="font-semibold text-lg">${serviceName}</h1>
        <p class="text-gray-500">${serviceNumber}</p>
      </div>
      <p>${time}</p>
    `;
    callHistoryElement.appendChild(entry);
  });
});

document.querySelector("#clear-history-btn").addEventListener("click", function(){
  callHistoryElement.innerHTML = "";
});
