fetch('http://www.johnlestinajr.com/data/houses.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json){

    var houses = json.houses;

    for (i in houses) {
      makeHouseHtml(houses[i]);
    }

  })

function makeHouseHtml(house) {
  console.log(house);
  var forSaleGrid = document.getElementById('forSaleGrid')
  var houseLink = document.createElement('a');
  houseBox.classList.add('house');

  var houseImg = document.createElement('img');
  houseImg.src = house.img;

  houseLink.appendChild(houseImg);
  houseLink.appendChild(housePrice);
  forSaleGrid.appendChild(houseLink);

  // <a class="house">
  //   <img src="http://placehold.it/800x800">
  //   <h2></h2>
  // </a>
}
