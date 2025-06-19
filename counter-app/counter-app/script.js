let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", function () {
  count++;
  countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});

resetBtn.addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;
});
