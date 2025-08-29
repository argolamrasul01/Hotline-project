let favourite = 0;
const countfvrt = document.getElementById("count");
const icons = document.querySelectorAll(".heart");

for (const icon of icons) {
  icon.addEventListener("click", function () {
    if (icon.classList.contains("fa-regular")) {
      favourite++;
      countfvrt.innerText = favourite;
    }
  });
}

const phones = document.querySelectorAll(".call");
const name = document.querySelectorAll(".name");
const num = document.querySelectorAll(".number");
const historyContainer = document.querySelector(".history");
const coinsElement = document.getElementById("coin");
const clearBtn = document.getElementById("clear-btn");

let coins = 100;
for (let i = 0; i < phones.length; i++) {
  phones[i].addEventListener("click", function () {
    if (coins < 20) {
      alert("❌You need at least 20 coins to make a call.");
      return;
    } else {
      coins -= 20;
      coinsElement.innerText = coins;
      alert("📞Calling" + " " + name[i].textContent + " " + num[i].textContent);
    }

    const now = new Date().toLocaleTimeString();
    const div = document.createElement("div");
    div.className = "flex items-center justify-between m-2";
    div.innerHTML = `
      <div>
          <p class="text-lg text-semibold">${name[i].textContent}</p>
          <p class="text-lg text-[#5C5C5C]">${num[i].textContent}</p>
        </div>
        <div>
          <p>${now}</p>
        </div>
      `;
    historyContainer.appendChild(div);
  });
}

clearBtn.addEventListener("click", function () {
  historyContainer.innerHTML = ``;
});

// Copy - count
let count = 0;
let copiedCount = document.getElementById("copied-count");
const buttons = document.querySelectorAll(".copy-btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let number =
      buttons[i].parentElement.parentElement.querySelector(".number").innerText;
    navigator.clipboard.writeText(number);
    count++;
    copiedCount.innerText = count;
  });
}
