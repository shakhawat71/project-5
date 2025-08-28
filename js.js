const callCoinElement = document.getElementById("call-coin");
let coins = parseInt(callCoinElement.innerText) || 100;
const callHistoryElement = document.getElementById("call-history");
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

    const entry = document.createElement("li");
    entry.innerText = `${serviceName} - ${serviceNumber}`;
    callHistoryElement.appendChild(entry);
  });
});