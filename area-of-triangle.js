const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calBtn = document.querySelector("#calculate-area");
const output = document.querySelector("#area-result");

function calculateArea() {
  console.log("Clicked!");
  const b = base.value;
  const h = height.value;
  const result = (Number(b) * Number(h)) / 2;
  console.log(result);
  output.innerText = "The area of the trianlge is " + result + " cm²";
}

calBtn.addEventListener("click", calculateArea);
