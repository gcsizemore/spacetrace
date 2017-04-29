window.onload = function(){
    var position;
    getLocation();
    
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    
    function showPosition(position){
        var mymap = L.map('mapid').setView([position.coords.latitude, position.coords.longitude],13);

        L.tileLayer('https://api.mapbox.com/styles/v1/bradonomics/cj23lm0ks00062rnx1nyyeiz9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYnJhZG9ub21pY3MiLCJhIjoiY2oyM2w2amwwMDAxbzJ3cGNyeXZtcW9mMyJ9.9Y_895vcYxlSa8L9Kyh_RA', {
            maxZoom: 18,
        }).addTo(mymap);
    }
    
}