// selection element
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");
const result = document.getElementById("result");

// function display error
function showError(el, message) {
    el.innerHTML = message;
}

// function clear error
function clearError(el) {
    el.innerHTML = "";
}

// function validate name
function validateName() {
    let value = nameInput.value.trim();
    if (value.length < 2) {
        showError(nameError, "Name must be at least 2 characters");
        return false;
    }
    clearError(nameError);
    return true;
}

// function validate form
function validateForm() {
    let okName = validateName();
    return okName;
}

// prevent default reloading
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // clear result
    result.innerHTML = "";

    // validate form
    if (validateForm()) {
        result.innerHTML = "Form is Valid!";
        result.className = "ok";
    } else {
        result.innerHTML = "Please fix the errors.";
        result.className = "error";
    }
});
