document.getElementById("add-button").addEventListener("click", () =>{
    const inputField = document.getElementById("input-field");
    const screen = document.querySelector(".screen");

    const newReminder = document.createElement("p");
    newReminder.textContent = inputField.value;

    screen.appendChild(newReminder);
    inputField.value = ""; // Clear the input field
});