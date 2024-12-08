document.getElementById("add-button").addEventListener("click", () =>{
    const inputField = document.getElementById("input-field");
    const screen = document.querySelector(".screen");

    const newReminder = document.createElement("p");
    newReminder.textContent = inputField.value;

    screen.appendChild(newReminder);
    inputField.value = ""; // Clear the input field
});

const reminders = [];

function addReminder(reminder) {
    reminders.push(reminder); // Add the new reminder to the array
}

let currentIndex = 0;

document.getElementById("add-button").addEventListener("click", () =>{
    const inputField = document.getElementById("input-field");
    const screen = document.querySelector(".screen");

    const newReminder = inputField.value;
    if (newReminder) {
        reminders.push(newReminder);
        screen.textContent = newReminder;
        currentIndex = reminders.length - 1;
        inputField.value = ""; // Clear the input field
    }
});

document.getElementById("prev-button").addEventListener("click", () =>{
    if (currentIndex > 0) {
        currentIndex--;
        document.querySelector(".screen").textContent = reminders[currentIndex];
        document.querySelector(".button-container span").textContent = currentIndex;
    }
});

document.getElementById("next-button").addEventListener("click", () =>{
    if (currentIndex < reminders.length - 1) {
        currentIndex++;
        document.querySelector(".screen").textContent = reminders[currentIndex];
        document.querySelector(".button-container span").textContent = currentIndex;
    }
});