fetch('http://www.johnlestinajr.com/data/houses.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json){

    var forSaleHouses = json.houses.forSale;
    var soldHouses = json.houses.sold;

    for (i in forSaleHouses) {
      makeHouseHtml(forSaleHouses[i], 'forSaleGrid');
    }

    for (i in soldHouses) {
      makeHouseHtml(soldHouses[i], 'soldGrid');
    }

  })

function makeHouseHtml(house, gridId) {
  var forSaleGrid = document.getElementById(gridId)
  var houseLink = document.createElement('a');
  houseLink.classList.add('house');
  houseLink.href = house.url;
  houseLink.style.backgroundImage = 'url(' + house.img + ')';
  houseLink.style.backgroundPosition = 'center';
  houseLink.style.backgroundRepeat = 'no-repeat';
  houseLink.style.backgroundSize = 'cover';

  var housePrice = document.createElement('h2');
  housePrice.innerHTML = house.price;

  // houseLink.appendChild(houseImg);
  houseLink.appendChild(housePrice);
  forSaleGrid.appendChild(houseLink);

  // <a class="house">
  //   <img src="http://placehold.it/800x800">
  //   <h2></h2>
  // </a>
}
