window.onload = function() {
  var position;
  getLocation();

  function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    var mymap = L.map('mapid').setView([position.coords.latitude, position.coords.longitude], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/bradonomics/cj23lm0ks00062rnx1nyyeiz9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYnJhZG9ub21pY3MiLCJhIjoiY2oyM2w2amwwMDAxbzJ3cGNyeXZtcW9mMyJ9.9Y_895vcYxlSa8L9Kyh_RA', {
      maxZoom: 18,
    }).addTo(mymap);

    var popup = L.popup();

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent('<div> <label>What Did You Find?</label> <input type="text" name="name" value="" id="name"> <input type="submit" name="submit" value="Save" class="button" id="submitspecies"></div>')
        .openOn(mymap);
        // console.log(e.latlng.lat);

        jQuery('#submitspecies').click(function(){
          $.post( "dal.php", { lat: e.latlng.lat, lng: e.latlng.lng, type: "" } );
        });

    }
    mymap.on('click', onMapClick);

  }

};
