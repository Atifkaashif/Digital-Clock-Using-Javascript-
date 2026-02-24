function updateClock() {
    const now = new Date();

    const days = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = days[now.getDay()];
    let ampm = "AM";

    if (hours >= 12) {
        ampm = "PM";
        if (hours > 12) hours -= 12;
    }

    if (hours === 0) hours = 12;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("ampm").innerText = ampm;
    document.getElementById("day").innerText = day;
}

setInterval(updateClock, 1000);
updateClock();
