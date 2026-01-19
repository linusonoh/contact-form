// Initialize EmailJS FIRST (VERY IMPORTANT)
(function () {
  emailjs.init("t-0sRjENbSBUjrPmU");
})();

// Get form and confirmation message
const form = document.getElementById('contactForm');
const confirmation = document.getElementById('confirmationMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous errors
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  let hasError = false;

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validation
  if (name.length < 2) {
    document.getElementById('nameError').textContent = 'Please enter your name';
    hasError = true;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email';
    hasError = true;
  }

  if (subject.length < 2) {
    document.getElementById('subjectError').textContent = 'Please enter a subject';
    hasError = true;
  }

  if (message.length < 5) {
    document.getElementById('messageError').textContent = 'Message must be at least 5 characters';
    hasError = true;
  }

  // Send email via EmailJS
  if (!hasError) {
    emailjs.send(
      "service_hq9y1lj",
      "template_00kf3rf",
      {
        from_name: name,
        from_email: email,
        phone: phone,
        subject: subject,
        message: message
      }
    )
    .then(() => {
      confirmation.style.display = 'block';
      form.reset();
    })
    .catch(error => {
      alert('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    });
  }
});
