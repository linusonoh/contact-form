// Initialize EmailJS
(function () {
  emailjs.init("YrwtF73M6J9hiZZXH");
})();

// DOM elements
const form = document.getElementById("myForm");
const btn = document.getElementById("submit-btn");
const statusMessage = document.getElementById("status-msg");

// Form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.innerText = "Sending...";
  btn.disabled = true;

  emailjs.sendForm(
    "service_otvqssm",   // Your EmailJS service ID
    "template_73d5prj",  // Your EmailJS template ID
    "#myForm"            // Form selector
  ).then(
    function (response) {
      statusMessage.style.display = "block";
      statusMessage.style.color = "green";
      statusMessage.innerText = "Message sent successfully!";
      form.reset();
    },
    function (error) {
      statusMessage.style.display = "block";
      statusMessage.style.color = "red";
      statusMessage.innerText = "Failed to send message.";
      console.error("FAILED...", error);
    }
  ).finally(function () {
    btn.innerText = "Send Email";
    btn.disabled = false;
  });
});
