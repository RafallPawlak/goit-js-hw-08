let _ = require('lodash');
let currentFormData = {};
const form = document.querySelector(".feedback-form");


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {elements: { email, message }} = event.currentTarget;

    if (email.value === "" || message.value === "") {
        return alert("Please fill in all the fields!");
      }
  const storageObj = JSON.parse(localStorage.getItem("feedback-form-state"));
        console.log(storageObj);
        localStorage.clear();
        event.currentTarget.reset();
      };

form.addEventListener("input", _.throttle((event) => {
    const { name, value } = event.target;
    currentFormData[name] = value;
    localStorage.setItem("feedback-form-state", JSON.stringify(currentFormData));
    },500));

window.addEventListener('load', inputData);

function inputData() {
   const feedback = localStorage.getItem("feedback-form-state");
  if (feedback !== null) {
   form.email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email || '';
    form.message.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message || '';
  }
};
