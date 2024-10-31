// Function to handle form submission and save data to localStorage
function submitForm() {
    // Retrieve values from form fields
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked')?.value;
    const interests = Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(checkbox => checkbox.value);
    const position = document.getElementById("position").value;
    const linkedin = document.getElementById("linkedin").value;
    const company = document.getElementById("company").value;

    // Save each field to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("message", message);
    localStorage.setItem("contactMethod", contactMethod);
    localStorage.setItem("interests", JSON.stringify(interests));  // Store as a JSON array
    localStorage.setItem("position", position);
    localStorage.setItem("linkedin", linkedin);
    localStorage.setItem("company", company);

    alert("Form has been submitted, and the data is stored in the local storage!");
}

// Function to clear all form data from localStorage
function clearLocalStorage() {
    localStorage.removeItem("name");
    localStorage.removeItem("message");
    localStorage.removeItem("contactMethod");
    localStorage.removeItem("interests");
    localStorage.removeItem("position");
    localStorage.removeItem("linkedin");
    localStorage.removeItem("company");

    alert("Local storage has been cleared");
}