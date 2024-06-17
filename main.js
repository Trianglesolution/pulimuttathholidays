// Set the date we're counting down to
const countdownDate = new Date();
countdownDate.setMonth(countdownDate.getMonth() + 3);

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {

   // Get today's date and time
   const now = new Date().getTime();

   // Find the distance between now and the countdown date
   const distance = countdownDate - now;

   // Time calculations for days, hours, minutes, and seconds
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Output the result in the corresponding elements
   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;

   // If the countdown is finished, write some text
   if (distance < 0) {
      clearInterval(countdownFunction);
      document.querySelector(".container").innerHTML = "<h1>We are now live!</h1>";
   }
}, 1000);
