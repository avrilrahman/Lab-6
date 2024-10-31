// Function to handle form submission and save data to localStorage
function submitForm() {
    // Retrieve values from form fields
    const name = document.getElementById("name").value;
    const linkedin = document.getElementById("email").value;
    const company = document.getElementById("message").value;

    // Save each field to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);

    alert("Form has been submitted, and the data is stored in the local storage!");
}

// Function to clear all form data from localStorage
function clearLocalStorage() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("message");

    alert("Local storage has been cleared");
}