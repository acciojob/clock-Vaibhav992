//your JS code here. If required.
function updateTimer() {
    const now = new Date();

    // Format date & time like sample
    const formatted = now.toLocaleString();

    document.getElementById("timer").innerText = formatted;
}

// Run immediately
updateTimer();

// Update every second
setInterval(updateTimer, 1000);