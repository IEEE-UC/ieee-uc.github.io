document.addEventListener('DOMContentLoaded', () => {
    const calendarContainer = document.getElementById('calendar');
    const eventsContainer = document.getElementById('events');
    const rosterContainer = document.getElementById('roster');

    // Fetch and display calendar events
    fetch('/api/calendar')
        .then(response => response.json())
        .then(data => {
            data.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.textContent = `${event.date}: ${event.title}`;
                calendarContainer.appendChild(eventElement);
            });
        });

    // Fetch and display events
    fetch('/api/events')
        .then(response => response.json())
        .then(data => {
            data.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.textContent = `${event.date}: ${event.title}`;
                eventsContainer.appendChild(eventElement);
            });
        });

    // Fetch and display roster
    fetch('/api/roster')
        .then(response => response.json())
        .then(data => {
            data.forEach(member => {
                const memberElement = document.createElement('div');
                memberElement.textContent = member.name;
                rosterContainer.appendChild(memberElement);
            });
        });
});