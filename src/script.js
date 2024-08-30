console.log("Hello World!");
let passions = document.querySelector("#passions");
let skills = document.querySelector("#skills");
let impact = document.querySelector("#impact");
let values = document.querySelector("#values");
const btn = document.querySelector("#submit-btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("results");
  // console.log(passions.value);
  console.log(passions.value.split(","));
  console.log(skills.value.split(","));
  console.log(impact.value.split(","));
  console.log(values.value.split(","));
  //   console.log(typeof passions.value);

  // console.log(arr);
});
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

btn.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
let resultTxt = document.querySelector(".resultTxt");
let passionsCircle = document.querySelector(".passions-circle");
let skillsCircle = document.querySelector(".skills-circle");
let valuesCircle = document.querySelector(".values-circle");
let missionsCircle = document.querySelector(".missions-circle");
// console.log(passionsCircle);
passionsCircle.addEventListener("click", () => {
  // console.log("circle clicked");
  passionsCircle.style.backgroundColor = "red";
  let passionsArray = passions.value.split(",");
  if (passionsArray.includes("")) {
    console.log("Error occured , check input");
  }
  console.log(...passionsArray);
  let passionsArrayElements = [...passionsArray];
  resultTxt.innerHTML = passionsArrayElements;
  console.log(resultTxt.innerHTML);
});
skillsCircle.addEventListener("click", () => {
  // console.log("circle clicked");
  skillsCircle.style.backgroundColor = "green";
  let skillsArray = skills.value.split(",");
  if (skillsArray.includes("")) {
    console.log("Error occured , check input");
  }
  console.log(...skillsArray);
  let skillsArrayElements = [...skillsArray];
  resultTxt.innerHTML = skillsArrayElements;
  console.log(resultTxt.innerHTML);
});
valuesCircle.addEventListener("click", () => {
  // console.log("circle clicked");
  let valArray = values.value.split(",");
  console.log(valArray);
  if (valArray.includes("")) {
    console.log("Error occured , check input");
  }
  console.log(...valArray);
  let valArrayElements = [...valArray];
  resultTxt.innerHTML = valArrayElements;
  console.log(resultTxt.innerHTML);
  valuesCircle.style.backgroundColor = "blue";
});
missionsCircle.addEventListener("click", () => {
  // console.log("circle clicked");
  let impactArray = impact.value.split(",");
  if (impactArray.includes("")) {
    console.log("Error occured , check input");
  }
  console.log(...impactArray);
  let impactArrayElements = [...impactArray];
  resultTxt.innerHTML = impactArrayElements;
  console.log(resultTxt.innerHTML);
  missionsCircle.style.backgroundColor = "light-yellow";
});
