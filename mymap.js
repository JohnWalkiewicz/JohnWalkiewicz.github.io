var map
var infowindow


function createMarker(lat, lon, content) {
  var latLng = new google.maps.LatLng(lat, lon)

 
  var markerImage = { 
             url: "https://d30y9cdsu7xlg0.cloudfront.net/png/16025-200.png",
             scaledSize: new google.maps.Size(50, 50),
             origin: new google.maps.Point(0, 0),
             anchor: new google.maps.Point(0, 0)
                     
                    };


  var marker = new google.maps.Marker({
    position: latLng,
    icon: markerImage,
    animation: google.maps.Animation.DROP,
    map: map
  });

  google.maps.event.addListener(marker, 'click', function(){
    infowindow.setContent("<div class='content'>" + content + "</div>");
    infowindow.open(map,marker);
  })

}


function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.4168 , lng: -3.7038 },
    zoom: 2
  })

  infowindow = new google.maps.InfoWindow({
    content: "placeholder"
  })
  
  createMarker(27.9878, 86.9250, "Mount Everest, Elevation: 29,029 <br><img src='images/everest.webp'>");
  createMarker(35.8800, 76.5151, "K2, Elevation: 28,251 <br><img src='images/k2.jpg'>");
  createMarker(27.7025, 88.1475, "Kangchenjunga, Elevation: 28,169 <br><img src='images/Kanchenjunga.JPG'>");
  createMarker(27.9626, 86.9336, "Lhotse, Elevation: 27,940 ");
  createMarker(27.8860, 87.0912, "Makalu, Elevation: 27,825");
  createMarker(28.0973, 86.6585, "Cho Oyu, Elevation: 26,906");
  createMarker(35.23583239, 74.586830986, "Nanga Parbat, Elevation: 26,660");
  createMarker(28.5961, 83.8203, "Annapurna Massif, Elevation:  26,545");
  createMarker(35.7166638, 76.6999972, "Gasherbrum I , Elevation: 26,509");
  createMarker(35.8107, 76.5680, "Broad Peak, Elevation: 26,414");
  createMarker(35.7583, 76.6533, "Gasherbrum II , Elevation: 26,362");
  createMarker(28.3525, 85.7792, "Shishapangma, Elevation: 26,289");
  createMarker(28.0981, 86.7422, "Gyachung Kang, Elevation: 26,089");
  createMarker(35.7333, 76.6333, "Gasherbrum III, Elevation: 26,070");
  createMarker(28.5350, 84.1225, "Annapurna II, Elevation: 26,040");
    
  createMarker(63.0692, -151.0070, "Denali, Elevation:20,310 <br><a href='https://en.wikipedia.org/wiki/Denali' target='new'><img src='images/denali.png'></a>");
  createMarker(60.5670, -140.4053, "Mount Logan, Elevation:19,551 <br><a href='https://en.wikipedia.org/wiki/Mount_Logan'><img src='images/mountlogan.jpg'></a>");
  createMarker(19.0304, -97.2681, "Pico de Orizaba, Elevation:18,491 <br><a href='https://en.wikipedia.org/wiki/Pico_de_Orizaba'><img src='images/pico.jpg'></a>");
  createMarker(60.2933, -140.9294, "Mount Saint Elias, Elevation:18,009 <br><a href='https://en.wikipedia.org/wiki/Mount_Saint_Elias'><img src='images/mountsaint.jpg'></a>");
  createMarker(19.0224, -98.6279, "Popocatépetl, Elevation:17,802 <br><a href='https://en.wikipedia.org/wiki/Popocatépetl'><img src='images/popo.jpg'></a>");
  createMarker(62.9608, -151.3981, "Mount Foraker, Elevation:17,402 <br><a href='https://en.wikipedia.org/wiki/Mount_Foraker'><img src='images/foraker.jpg'></a>");
  createMarker(61.0217, -140.4653, "Mount Lucania, Elevation:17,257 <br><a href='https://en.wikipedia.org/wiki/Mount_Lucania'><img src='images/lucania.JPG'></a>");
  createMarker(36.5785, -118.2923, "Mount Whitney, Elevation:14,505 <br><a href='https://en.wikipedia.org/wiki/Mount_Whitney'><img src='images/whitney.jpg'></a>");
  createMarker(19.1783, -98.6427, "Iztaccihuatl, Elevation:17,159 <br><a href='https://en.wikipedia.org/wiki/Iztaccihuatl'><img src='images/ixta.jpg'></a>");
  createMarker(40.7764, -110.3728, "Kings Peak, Elevation:13,527 <br><a href='https://en.wikipedia.org/wiki/Kings_Peak_(Utah)'><img src='images/kingspeak.jpg'></a>");
  
    
    
    
  
}
