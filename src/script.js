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
