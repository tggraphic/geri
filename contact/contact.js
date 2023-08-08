// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const successMessage = document.querySelector(".success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = form.querySelector("#name");
        const emailInput = form.querySelector("#email");
        const messageInput = form.querySelector("#message");

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // Simulate form submission (replace this with actual form submission logic)
        // For demonstration purposes, we'll just show a success message
        showSuccessMessage();
    });

    function showSuccessMessage() {
        form.style.display = "none";
        successMessage.style.display = "block";
    }
});
