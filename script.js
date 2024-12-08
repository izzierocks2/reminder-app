document.getElementById("add-button").addEventListener("click", () =>{
    const inputField = document.getElementById("input-field");
    const reminderList = document.getElementById("reminder-list");

    const newReminder = document.createElement("li");
    newReminder.textContent = inputField.value;

    reminderList.appendChild(newReminder);
    inputField.value = ""; // Clear the input field
});