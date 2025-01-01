function updateClock() {
    const timeElement = document.getElementById('time');
    const dayElement = document.getElementById('day');
    
    const now = new Date();
    
    // Get the hours and minutes
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    // Format time (e.g., 9:05 instead of 9:5)
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;

    // Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[now.getDay()];

    // Set the time and day
    timeElement.innerHTML = `${hours}:${minutes}`;
    dayElement.innerHTML = day;

    // Animating the visibility of time
    timeElement.style.animation = 'switchTime 1s infinite alternate';
    dayElement.style.animation = 'slideUp 1.5s ease-out';

    // Call updateClock every minute
    setTimeout(updateClock, 60000);  // Update the clock every minute
}

// Initial call to display the clock
updateClock();
