window.onload = function() {
  var mymap = L.map('mapid').setView([51.505, -0.09], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/bradonomics/cj23lm0ks00062rnx1nyyeiz9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYnJhZG9ub21pY3MiLCJhIjoiY2oyM2w2amwwMDAxbzJ3cGNyeXZtcW9mMyJ9.9Y_895vcYxlSa8L9Kyh_RA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
  }).addTo(mymap);
};
