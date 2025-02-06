const eventContent = document.getElementById("event__content");
const eventParagraph = document.createElement("p");

eventParagraph.textContent = "Meetings are over for the season but will resume in the Spring. Check back for updates on the latest news and events!";



function seasonChange() {
    const today = new Date();
    const currentMonth = today.getMonth();

    if(currentMonth < 4 || currentMonth > 10){
        eventContent.insertBefore(eventParagraph, eventContent.firstChild);
    }
}

seasonChange();