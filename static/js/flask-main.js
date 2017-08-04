//date object for comparison
var t = new Date().getHours();

//selecting HTML element
var greetMessage = document.getElementById("greeting-message");

//compare morning/afternoon/evening/night hours with date object
if ((t >= 0) && (t <= 5)) {
  greetMessage.innerHTML = 'Good night';
} else if ((t >= 6) && (t <= 11)) {
  greetMessage.innerHTML = 'Good morning';
} else if ((t >= 12) && (t <= 17)) {
  greetMessage.innerHTML = 'Good afternoon';
} else if ((t >= 18) && (t <= 23)) {
  greetMessage.innerHTML = 'Good evening';
} else {
  greetMessage.innerHTML = 'Good night';
}
