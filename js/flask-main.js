//hours object aanmaken
var t = new Date().getHours();
//selecteren van HTML elements
var greetMessage = document.getElementById("greeting-message");
var memes = document.getElementById("main-body");

//getHours vergelijken met uren voor gepaste begroeting
if ((t >= 0) && (t <= 5)) {
  greetMessage.innerHTML = 'Good night, <span class="primary-text">Hans!</span>';
} else if ((t >= 6) && (t <= 11)) {
  greetMessage.innerHTML = 'Good morning, <span class="primary-text">Hans!</span>!';
} else if ((t >= 12) && (t <= 17)) {
  greetMessage.innerHTML = 'Good afternoon, <span class="primary-text">Hans!</span>';
} else if ((t >= 18) && (t <= 23)) {
  greetMessage.innerHTML = 'Good evening, <span class="primary-text">Hans!</span>';
} else {
  greetMessage.innerHTML = 'Good night, <span class="primary-text">Hans!</span>';
}
