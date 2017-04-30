allMarkers = [{lat:34.73,lng:-86.5,speciesID:1,timeStamp:'33'},{lat:34.73,lng:-86.5,speciesID:1},{lat:34.73,lng:-86.5,speciesID:1},{lat:34.73,lng:-86.5,speciesID:1}];

function mapIcons(mymap,icons) {

  var KudzuIcon = L.icon({
      iconUrl: 'images/leaf-green.png',
      iconSize:     [38, 95], // size of the icon
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  var redIcon = L.icon({
      iconUrl: 'images/leaf-red.png',
      iconSize:     [38, 95], // size of the icon
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  var orangeIcon = L.icon({
      iconUrl: 'images/leaf-orange.png',
      iconSize:     [38, 95], // size of the icon
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  L.icon = function (options) {
    return new L.Icon(options);
  };

  // L.marker([34.73, -86.5], {icon: greenIcon}).addTo(mymap);
  // L.marker([34.72, -86.6], {icon: redIcon}).addTo(mymap);
  // L.marker([34.71, -86.7], {icon: orangeIcon}).addTo(mymap);

  $.each(allMarkers, function( i, marker ) {
    L.marker([marker.lat, marker.lng], {icon: icons["" + marker.speciesID]}).addTo(mymap);
  });

}
