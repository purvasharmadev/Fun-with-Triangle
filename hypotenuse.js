const angles = document.querySelectorAll("#angle");
const calBtn = document.querySelector("#calculate-hypotenuse");
const output = document.querySelector("#hypotenuse-result");

function calculateSumofSquares(a, b) {
  const sumOfSquare = a * a + b * b;
  return sumOfSquare;
}

function calculateHypotenuse() {
  const sumOfSquare = calculateSumofSquares(
    Number(angles[0].value),
    Number(angles[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
  // console.log(lengthOfHypotenuse);

  output.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse +" cm";
}

calBtn.addEventListener("click", calculateHypotenuse);
