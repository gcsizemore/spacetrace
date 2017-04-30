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
      //* Create the popup to ask about invasive species.
      popup
        .setLatLng(e.latlng)
        .setContent('<div> <label>What Did You Find?</label> <select id="species">  <option value="1">Kudzu</option>  <option value="2">Termites</option>  <option value="3">Nerds</option>  <option value="4">Fire Ants</option>  <option value="5">Johnson Grass</option>  <option value="6">Crab Grass</option></select> <input type="submit" name="submit" value="Save" class="button" id="submitspecies"></div>')
        .openOn(mymap);

      //* Send data when the save button is click
      jQuery('#submitspecies').click(function() {
        var species = $( "select#species" ).val();
        $.post("dal.php", {
          action: "insertMarker",
          lat: e.latlng.lat,
          lng: e.latlng.lng,
          species: species
        });
      });

    }

    mymap.on('click', onMapClick);

  }

};
