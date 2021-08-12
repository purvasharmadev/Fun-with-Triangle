const inputs = document.querySelectorAll("#angle");
const isTriangleBtn = document.querySelector("#is-triangle");
const output = document.querySelector("#is-triangle-result");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngle = angle1 + angle2 + angle3;
  // console.log(sumOfAngle);
  return sumOfAngle;
}

function isTriangle() {
  const sumOfAngle = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  // console.log(sumOfAngle)
  if (sumOfAngle === 180) {
    // console.log("Yay! The angles form a triangle")
    output.innerText = "Yay! The angles form a triangle";
  } else {
    output.innerText = "Oh Oh! The angles don't form a triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
