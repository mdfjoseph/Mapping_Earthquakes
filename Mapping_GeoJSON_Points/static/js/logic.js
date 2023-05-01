// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6214, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
    [37.6192, -122.3816],
    [40.6446, -73.7858],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [36.1263, -86.6774]
  ];
  

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: .5,
    dashArray: '20, 20'
 }).addTo(map);

// Get data from cities.js
let cityData = cities;

  // Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
    console.log(city)
   });

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
    })
});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);