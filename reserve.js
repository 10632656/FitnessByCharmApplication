function showMessage(input, message, type) {
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
    //to check if the value is empty or not
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
    //to validate email address
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	// if valid, submit the form.
	if (nameValid && emailValid) {
		alert("Demo only. No form was posted.");
	}
});