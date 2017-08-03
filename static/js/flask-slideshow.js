var btnPrev = document.getElementById('btn-previous');
var btnNext = document.getElementById('btn-next');
var slide = document.getElementById('slide');
var counter = 0;

var slides = ['./static/img/birbs/1.jpg',
              './static/img/birbs/2.jpg',
              './static/img/birbs/3.jpg',
              './static/img/birbs/4.jpg',
              './static/img/birbs/5.jpg',
              './static/img/birbs/6.jpg',
              './static/img/birbs/7.jpg',
              './static/img/birbs/8.jpg',
              './static/img/birbs/9.jpg',
              './static/img/birbs/10.jpg',
              './static/img/birbs/11.jpg',
              './static/img/birbs/12.jpg',
              './static/img/birbs/13.jpg',
              './static/img/birbs/14.jpg',
              './static/img/birbs/15.jpg',
              './static/img/birbs/16.jpg',
              './static/img/birbs/17.jpg',
              './static/img/birbs/18.jpg',
              './static/img/birbs/19.jpg',];

//btnPrev.addEventListener('click', prevPicture);
//btnNext.addEventListener('click', nextPicture);

function nextPicture() {
  slide.src = slides[counter];

  if (counter < slides.length - 1) {
    counter++;
  } else {
    counter = 0;
  }

  setTimeout("nextPicture()", 3000);
}

nextPicture();
