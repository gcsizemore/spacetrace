window.onload = function() {
  var position;
  var selectList;
  var icons;
  var allMarkers = [];
  var newMarkers = [];

  function getAllUpdates() {
    $.post("dal.php", {
        action: "getAllMarkers"
      })
      .done(function(data) {
        dataObj = JSON.parse(data);
        allMarkers = dataObj[0];
        newMarkers = dataObj[1];
      });
  }

  var buildDeferred = $.Deferred();
  buildDeferred.done(buildSelect()).done(getLocation());

  function buildSelect() {

    $.post("dal.php", {
        action: "getAllSpecies"
      })
      .done(function(data) {
        selectList = '';
        iconList = '{';
        dataObj = JSON.parse(data);
        for (var i = 0; i < dataObj.length; i++) {
          var obj = dataObj[i];
          selectList += '<option value=' + obj['id'] + '>' + obj['name'] + '</option>';
          iconList += '"' + obj['id'] + '" : "' + obj['name'] + 'Icon",';
        }
        iconList += '"0":"error"}';
        icons = JSON.parse(iconList);
      });

  }

  function refreshView() {
    getAllUpdates();
    buildSelect();
  }

  refreshView();

  function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    var mymap = L.map('mapid').setView([position.coords.latitude, position.coords.longitude], 10);

    L.tileLayer('https://api.mapbox.com/styles/v1/bradonomics/cj23lm0ks00062rnx1nyyeiz9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYnJhZG9ub21pY3MiLCJhIjoiY2oyM2w2amwwMDAxbzJ3cGNyeXZtcW9mMyJ9.9Y_895vcYxlSa8L9Kyh_RA', {
      maxZoom: 18,
    }).addTo(mymap);

    //* Call species icons from js/map_icons.js
    mapIcons(mymap, icons);

    var popup = L.popup();

    function onMapClick(e) {
      //* Create the popup to ask about invasive species.
      popup
        .setLatLng(e.latlng)
        .setContent('<div> <label>What Did You Find?</label> <select id=\'species\'>' + selectList + '</select>' +
          '<input type="submit" name="submit" value="Save" class="button" id="submitspecies"></div>')
        .openOn(mymap);

      jQuery('#submitspecies').click(function() {
        mymap.closePopup();
        $.post("dal.php", {
          action: "insertMarker",
          lat: e.latlng.lat,
          lng: e.latlng.lng,
          speciesID: $("select#species").val()
        });
      });

    }

    mymap.on('click', onMapClick);

  }

  buildDeferred.resolve( "hurry" );

};
