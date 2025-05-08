// 11_map.js

// Use native DOMContentLoaded as it doesn't rely on jQuery here
document.addEventListener('DOMContentLoaded', function() {
    console.log("Map script loaded, DOM ready.");

    // Coordinates (use const as they won't change)
    const nycCoords = [40.7128, -74.0060];
    const timesSquareCoords = [40.7580, -73.9855];
    const gradCenterCoords = [40.7486, -73.9840]; // Approx. GC location

    // 1. Initialize the map
    const map = L.map('map').setView(nycCoords, 13); // Centered on NYC, zoom level 13

    // 2. Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // 3. Add Markers
    const timesSquareMarker = L.marker(timesSquareCoords).addTo(map);
    timesSquareMarker.bindPopup("<b>Times Square</b><br>Iconic NYC location.");

    const gradCenterMarker = L.marker(gradCenterCoords).addTo(map)
        .bindPopup("<b>The Graduate Center, CUNY</b>");

    // 4. Add Shapes
    const circle = L.circle(timesSquareCoords, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.3, // Slightly less opaque
        radius: 500 // in meters
    }).addTo(map);
    circle.bindPopup("Approx. 500m radius around Times Square");

    const polyline = L.polyline([timesSquareCoords, gradCenterCoords], {
        color: 'blue',
        weight: 3 // Slightly thicker line
    }).addTo(map);
    polyline.bindPopup("Line from Times Square to Grad Center");

    // 5. Map Events
    map.on('click', function(e) {
        const coords = e.latlng;
        const popupContent = `You clicked at:<br>Lat: ${coords.lat.toFixed(4)}<br>Lng: ${coords.lng.toFixed(4)}`;
        L.popup()
            .setLatLng(coords)
            .setContent(popupContent)
            .openOn(map);
        console.log(`Map clicked at: Lat ${coords.lat}, Lng ${coords.lng}`);
    });

    map.on('zoomend', function() {
        console.log("Current map zoom level:", map.getZoom());
    });

    // Marker click event example
    timesSquareMarker.on('click', function() {
         console.log("Times Square marker clicked (separate event)!");
         // this.openPopup(); // If you want the original popup to still open
    });

    // Example: Pan map to Times Square
    // map.panTo(timesSquareCoords); // Uncomment to pan on load

    console.log("Map features added.");

}); // End DOMContentLoaded listener