// Countdown Timer
const examDate = new Date("Feb 2, 2025 00:00:00").getTime();
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = examDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h";

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "EXAM DAY!";
    }
}, 1000);

// Daily Quote Section
const quotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Don’t stop until you’re proud.",
    "You are your only limit.",
    "The only way to achieve the impossible is to believe it is possible."
];

document.getElementById("quote").textContent = quotes[Math.floor(Math.random() * quotes.length)];

// Task List Section
function addTask() {
    const taskInput = document.getElementById("task-input").value;
    const taskList = document.getElementById("task-list");
    const li = document.createElement("li");
    li.textContent = taskInput;
    taskList.appendChild(li);
    document.getElementById("task-input").value = ""; // Clear input field
}

// Save Blog Section
function saveBlog() {
    const blogInput = document.getElementById("blog-input").value;
    const blogList = document.getElementById("blog-list");

    const blogPost = document.createElement("p");
    blogPost.textContent = blogInput;
    blogList.appendChild(blogPost);

    document.getElementById("blog-input").value = ""; // Clear blog input
}

// Save Daily Plan
function savePlan() {
    const dailyPlan = document.getElementById("daily-plan").value;
    const planOutput = document.getElementById("plan-output");

    const planPost = document.createElement("p");
    planPost.textContent = dailyPlan;
    planOutput.appendChild(planPost);

    document.getElementById("daily-plan").value = ""; // Clear input field
}
