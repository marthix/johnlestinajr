fetch('http://www.johnlestinajr.com/data/testimonials.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
    var testimonials = json.testimonials;

    cycleTestimonials(testimonials);

    window.setInterval(function() {
      cycleTestimonials(testimonials);
    }, 6000)

  })


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
