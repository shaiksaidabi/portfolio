// Initialize EmailJS (replace YOUR_PUBLIC_KEY with your real key)
emailjs.init("YOUR_PUBLIC_KEY");

// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("area").value,
  };

  // Send using EmailJS (replace with your Service ID & Template ID)
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
    .then(function(response) {
      alert("✅ Message sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
    }, function(error) {
      alert("❌ Failed to send. Try again.");
      console.error("FAILED...", error);
    });
});
