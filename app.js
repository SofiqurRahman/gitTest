// @ts-nocheck

const heading = document.getElementById("heading");
const headingBtn = document.getElementById("headingBtn");

headingBtn.addEventListener("click", () => {
  if (heading.innerText === "Git Tutorial") {
    heading.innerText = "Git Tutorial Changed";
  } else {
    heading.innerText = "Git Tutorial";
  }
});