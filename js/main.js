var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
        var testimonials = data.testimonials;

        if (Object.keys(testimonials).length > 0) {

          cycleTestimonials(testimonials);

          window.setInterval(function() {
            cycleTestimonials(testimonials);
          }, 6000)

        }
    }
};

xmlhttp.open("GET", 'http://www.johnlestinajr.com/data/testimonials.json', true);
xmlhttp.send();


var testimonialTracker = 0;
function cycleTestimonials(testimonials) {

  var keys = Object.keys(testimonials);

  if (testimonialTracker >= keys.length) {
    testimonialTracker = 0;
  }

  buildHtml(testimonials[keys[testimonialTracker]]);
  testimonialTracker++;

}

function buildHtml(testimonial) {

  var testimonialBox = document.getElementById('testimonials')
  testimonialBox.innerHTML = '';

  var quoteDiv = document.createElement('div');
  quoteDiv.classList.add('quote');

  var quoteP = document.createElement('p');
  quoteP.innerHTML = testimonial.quote;

  var name = document.createElement('h1');
  name.innerHTML = '- ' + testimonial.name;

  quoteDiv.appendChild(quoteP);
  quoteDiv.appendChild(name);
  testimonialBox.appendChild(quoteDiv);

}
