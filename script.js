document.getElementById("add-button").addEventListener("click", () =>{
    const inputField = document.getElementById("input-field");
    const screen = document.querySelector(".screen");

    const newReminder = document.createElement("p");
    newReminder.textContent = inputField.value;

    screen.appendChild(newReminder);
    inputField.value = ""; // Clear the input field
});

/*let currentIndex = 0;
const reminders = [];

document.getElementById("add-button").addEventListener("click", () => {
    const inputField = document.getElementById("input-field");
    const screen = document.querySelector(".screen");

    const newReminder = inputField.value;
    reminders.push(newReminder);

    screen.textContent = newReminder;
    document.querySelector(".button-container span").textContent = currentIndex;

    inputField.value = ""; // Clear the input field
});

document.getElementById("prev-button").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        document.querySelector(".screen").textContent = reminders[currentIndex];
        document.querySelector(".button-container span").textContent = currentIndex;
    }
}); //works

document.getElementById("next-button").addEventListener("click", () => {
    if (currentIndex < reminders.length - 1) {
        currentIndex++;
        document.querySelector(".screen").textContent = reminders[currentIndex];
        document.querySelector(".button-container span").textContent = currentIndex;
    }
}); //works


document.getElementById("add-button").addEventListener("click", () => {
    const inputField = document.getElementById("input-field");
    const screen = document.querySelector(".screen");

    const newReminder = inputField.value;
    reminders.push(newReminder);

    console.log("Reminders:", reminders); // Check if reminders are added
    console.log("Current Index:", currentIndex); // Check the current index

    currentIndex = reminders.length - 1; // Update the current index to the latest reminder
    screen.textContent = reminders[currentIndex]; // Display the latest reminder
    document.querySelector(".button-container span").textContent = currentIndex; // Update the counter

    inputField.value = ""; // Clear the input field
});*/     //gets the counter in the center to go up but it stops the reminders from being displayed on the screen