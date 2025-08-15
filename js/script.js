document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.getElementById("welcome-text");
    const nameInput = prompt("Please enter your name:");
    if (nameInput) {
        welcomeText.textContent = `Hi ${nameInput}, Welcome To Website`;
    }

    const form = document.getElementById("contact-form");
    const output = document.getElementById("output");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let message = document.getElementById("message-text").value.trim();

        if (!name || !email || !phone || !message) {
            alert("Please fill all fields!");
            return;
        }

        output.innerHTML = `
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;

        form.reset();
    });
});
