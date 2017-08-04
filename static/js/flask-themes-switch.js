//selecting HTML elements
var themeSheet = document.getElementById('theme');
var themeIcon = document.getElementById('theme-icon');
var themeBtn = document.getElementById('theme-button');

//checking if settings are stored in local storage
//NOT YET IMPLEMENTED
if (localStorage.getItem('settings') === null) {
  let settings = {
    theme: "auto"
  };

}

//eventlistener for button to switch between stylesheets (dark/normal theme)
themeBtn.addEventListener('click', function() {
  if (themeIcon.className === 'fa fa-sun-o') {
    themeSheet.setAttribute('href', "./static/css/flask-custom-darktheme.css");
    themeIcon.className = "fa fa-moon-o";
  } else {
    themeSheet.setAttribute('href', "./static/css/flask-custom.css");
    themeIcon.className = "fa fa-sun-o";
  }
})

//creating date object
var t = new Date().getHours();

//comparing date object to day/night hours for automatic themes
if ((t >= 18) || (t <= 6)) {
  themeSheet.setAttribute('href', "./static/css/flask-custom-darktheme.css");
  themeIcon.className = "fa fa-moon-o";
} else {
  themeSheet.setAttribute('href', "./static/css/flask-custom.css");
  themeIcon.className = "fa fa-sun-o";
}
