function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(28.6428877, 77.1409807),
        zoom: 14
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position:  {lat: 28.6428877, lng: 77.1409807},
        map: map
      });
}
myMap();