
$( "#destination" ).submit(function( event ) {
    alert( "Handler for .submit() called." );
    event.preventDefault();
 
});
		
		// var config = {};		// Initialize Firebase
		// var database;			// Variable to reference the database


 var config = {
     apiKey: "AIzaSyDO9-3zC1SgUpkcnrERVzsS3h4xEySru3k",
     databaseURL: 
    //apiKey: "AIzaSyC60Si67Ng4Vpyw56AAvi3htje7MrHn7IA",
    //authDomain: "carla-2a850.firebaseapp.com",
    //databaseURL: "https://carla-2a850.firebaseio.com",
    //projectId: "carla-2a850",
    //storageBucket: "carla-2a850.appspot.com",
    //messagingSenderId: "42080963998"

 }; 
  //firebase.initializeApp(config);



///////    previous code from 8/10    /////
var map;
var services;
var infowindow;
var location = loc;
var radius = rad;
var parking = num;


  var request = {
    location: location,
    radius: 'radius.to.string()',
    type: ['parking']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < n; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}

var request = {
     query: 'parking, Austin, TX',
     fields: [ 'parking', 'photos', 'formatted_address', 'name', 'rating', 'geometry'],

   service = new google.maps.places.PlacesService(map);
   service.findPlaceFromQuery(request, callback());
 }

 function callback(results, status) {
   if (status == google.maps.places.PlacesServiceStatus.OK) {
     for (var i = 0; i < results.length; i++) {
       var place = results[i];
       createMarker(results[i]);
     }
   }
 }



