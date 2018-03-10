window.setInterval(rotateTestimonials, 5000);

var testimonialTracker = 1;
function rotateTestimonials() {
  var testimonials = document.getElementsByClassName('quote');

  if (testimonialTracker >= testimonials.length) {
    testimonialTracker = 0;
  }

  for (var i = 0; i < testimonials.length; i++) {

    for (var j = 0; j < testimonials[i].children.length; j++) {

      if (i === testimonialTracker) {
        testimonials[i].classList.remove('hidden');
        testimonials[i].children[j].classList.remove('hidden');
      } else {
        testimonials[i].classList.add('hidden')
        testimonials[i].children[j].classList.add('hidden')
      }

    }

  }

  testimonialTracker++;

}
