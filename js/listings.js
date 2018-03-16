fetch('http://www.johnlestinajr.com/data/houses.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json){

    var forSaleHouses = json.houses.forSale;
    var soldHouses = json.houses.sold;

    render(data, 'forSaleGrid');
    render(soldHouses, 'soldGrid');

  })

function render(object, gridId) {

  if (Object.keys(object).length > 0) {
    for (i in object) {
      makeHouseHtml(object[i], gridId);
    }
  } else {
    comingSoon(gridId);
  }

}

function comingSoon(gridId) {

  var grid = document.getElementById(gridId);
  var soonText = document.createElement('h3');
  soonText.innerHTML = 'More houses coming soon.';
  grid.appendChild(soonText);

}

function makeHouseHtml(house, gridId) {

  var grid = document.getElementById(gridId)

  if (house.url !== '') {
    var houseLink = document.createElement('a');
    houseLink.href = house.url;
    houseLink.target = "_blank";
  } else {
    var houseLink = document.createElement('div');
  }

  houseLink.classList.add('house');
  houseLink.style.backgroundImage = 'url(' + house.img + ')';
  houseLink.style.backgroundPosition = 'center';
  houseLink.style.backgroundRepeat = 'no-repeat';
  houseLink.style.backgroundSize = 'cover';

  var housePrice = document.createElement('h2');
  housePrice.innerHTML = house.price;

  houseLink.appendChild(housePrice);
  grid.appendChild(houseLink);

}
