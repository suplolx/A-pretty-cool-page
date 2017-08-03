var themeSheet = document.getElementById('theme');
var themeIcon = document.getElementById('theme-icon');
var themeBtn = document.getElementById('theme-button');

if (localStorage.getItem('settings') === null) {

  let settings = {
    theme: "auto"
  };

}


themeBtn.addEventListener('click', function() {
  if (themeIcon.className === 'fa fa-sun-o') {
    themeSheet.setAttribute('href', "./static/css/flask-custom-darktheme.css");
    themeIcon.className = "fa fa-moon-o";
  } else {
    themeSheet.setAttribute('href', "./static/css/flask-custom.css");
    themeIcon.className = "fa fa-sun-o";
  }
})

var t = new Date().getHours();

if ((t >= 18) || (t <= 6)) {
  themeSheet.setAttribute('href', "./static/css/flask-custom-darktheme.css");
  themeIcon.className = "fa fa-moon-o";
} else {
  themeSheet.setAttribute('href', "./static/css/flask-custom.css");
  themeIcon.className = "fa fa-sun-o";
}
