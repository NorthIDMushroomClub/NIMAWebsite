const eventContent = document.getElementById("event__content");
const eventParagraph = document.createElement("p");

eventParagraph.textContent = "Meetings are over for the season but will resume in the Spring. Check back for updates on the latest news and events!";



function seasonChange() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const eventContent = document.getElementById("event__content"); // Ensure it's retrieved inside the function

    if (eventContent && (currentMonth < 3 || currentMonth > 9)) {
        eventContent.insertBefore(eventParagraph, eventContent.firstChild);
    }
}

// Ensure the DOM is fully loaded before running the function
document.addEventListener("DOMContentLoaded", seasonChange);
