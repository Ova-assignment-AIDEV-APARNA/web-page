document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("msg").value.trim();

    // Simple email regex
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if (!name || !email || !msg) {
      alert("Please fill out all fields.");
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      alert(`Thank you, ${name}! Your message has been sent.`);
      form.reset();
    }
  });
});
