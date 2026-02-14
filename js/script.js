welcomeMessage();

function welcomeMessage() {
    let name = prompt("Welcome to Ziqri Company! What is your Name?");
    if (name == null || name.trim() === "") {
        name = "Guest"; 
    }
    document.getElementById('welcome-speech').innerHTML = `Hello, ${name}! Welcome to Ziqri Company.`;
}

function validateForm() {}