const _ = require('lodash');
let currentFormData = {};
const form = document.querySelector(".feedback-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {elements: { email, message }} = event.currentTarget;

    if (email.value === "" || message.value === "") {
        return console.log("Please fill in all the fields!");
      }
        console.log('Email: ' + email.value + '   Message: ' + message.value);
        localStorage.clear();
        email.value = '';
        message.value = '';
      };

form.addEventListener("input", _.throttle((event) => {
    const { name, value } = event.target;
    currentFormData[name] = value;
    localStorage.setItem("feedback-form-state", JSON.stringify(currentFormData));
    },500));

window.addEventListener('load', inputData);

function inputData() {
    const feedback = localStorage.getItem("feedback-form-state");
    const parseFeedback = JSON.parse(feedback);
    if (parseFeedback !== null) {
       form.email.value = parseFeedback.email;
       form.message.value = parseFeedback.message;
    }
    return;
};
