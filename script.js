function countdown() {
    const birthday = new Date("2024-03-09T00:00:00Z");
    const now = new Date().getTime();
    const difference = birthday - now;
  
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  
    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);
  }
  
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  setInterval(countdown, 1000);
  countdown();
  