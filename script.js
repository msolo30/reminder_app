let score = 0;
let reminders = [];
const input = document.querySelector("#name");
let scoreContainer = document.querySelector(".score");
let reminder = document.querySelector(".displayer");
const save = document.querySelector(".addbutton")
const left = document.querySelector(".buttonleft")
const right = document.querySelector(".buttonright")

save.addEventListener('click', () => {
    let reminderText = input.value;
    reminders.push({ score: score, text: reminderText });
    let newReminder = document.createElement("p");
    newReminder.classList.add("big-text");
    newReminder.textContent = reminderText;
    reminder.appendChild(newReminder);
});

right.addEventListener('click', () => {
    score++;
    scoreContainer.textContent = score;
    reminder.innerHTML = '';
    reminders.forEach(r => {
        if (r.score === score) {
            let newReminder = document.createElement("p");
            newReminder.classList.add("big-text");
            newReminder.textContent = r.text;
            reminder.appendChild(newReminder);
        }
    });
});

left.addEventListener('click', () => {
    if (score > 0) {
        score--;
        scoreContainer.textContent = score;
        reminder.innerHTML = '';
        reminders.forEach(r => {
            if (r.score === score) {
                let newReminder = document.createElement("p");
                newReminder.classList.add("big-text");
                newReminder.textContent = r.text;
                reminder.appendChild(newReminder);
            }
        });
    }
});