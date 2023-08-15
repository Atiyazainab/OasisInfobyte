const registrationButton = document.getElementById("registrationButton");
const loginButton = document.getElementById("loginButton");

const registrationPage = document.getElementById("registrationPage");
const loginPage = document.getElementById("loginPage");
const loggedInPage = document.getElementById("loggedInPage");

const showPasswordButtonForReg = document.getElementById("showPasswordButtonForReg");
const registrationPasswordInput = document.getElementById("registrationPasswordInput");
const registrationUsernameInput = document.getElementById("registrationUsernameInput");
const registerUserButton = document.getElementById("registerUserButton");

const loginPasswordInput = document.getElementById("loginPasswordInput");
const loginUsernameInput = document.getElementById("loginUsernameInput");
const loginUserButton = document.getElementById("loginUserButton");
const logoutUserButton = document.getElementById("logoutUserButton");
const usernameInLoggedInPage = document.getElementById("usernameInLoggedInPage");

var userData = {};

function startRegistrationPage() {
    registrationButton.style.display = "none";
    loginButton.style.display = "block";
    registrationPage.style.display = "block";
    loginPage.style.display = "none";
    clearRegistrationForm();
}

function startLoginPage() {
    clearLoginForm();
    registrationButton.style.display = "block";
    loginButton.style.display = "none";
    loginPage.style.display = "block";
    registrationPage.style.display = "none";
    loggedInPage.style.display = "none";
}

function showPasswordForRegistration() {
    togglePasswordVisibility(registrationPasswordInput);
}

function showPasswordForLogin() {
    togglePasswordVisibility(loginPasswordInput);
}

function togglePasswordVisibility(inputField) {
    if (inputField.type === "password") {
        inputField.type = "text";
    } else {
        inputField.type = "password";
    }
}

function clearRegistrationForm() {
    registrationUsernameInput.value = '';
    registrationPasswordInput.value = '';
    showPasswordForRegistration.checked = false;
}

function clearLoginForm() {
    loginUsernameInput.value = '';
    loginPasswordInput.value = '';
    showPasswordForLogin.checked = false;
}

function registerUser() {
    const username = registrationUsernameInput.value;
    const password = registrationPasswordInput.value;

    if (userData[username]) {
        alert("Username already exists");
    } else if (!username || !password) {
        alert("Please enter both username and password");
    } else {
        userData[username] = password;
        alert("Successfully Registered");
        clearRegistrationForm();
        startLoginPage();
    }
}

function loginUser() {
    const username = loginUsernameInput.value;
    const password = loginPasswordInput.value;

    if (!username || !password) {
        alert("Please enter both username and password");
    } else if (!userData[username]) {
        alert("Invalid username");
    } else if (userData[username] !== password) {
        alert("Invalid password");
    } else {
        alert("Login Successful");
        clearLoginForm();
        usernameInLoggedInPage.textContent = `Username: ${username}`;
        loggedInPage.style.display = "block";
        loginPage.style.display = "none";
    }
}

function logoutUser() {
    loggedInPage.style.display = "none";
    startLoginPage();
}
