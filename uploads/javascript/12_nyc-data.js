// 12_nyc-data.js

$(document).ready(function() {
    console.log("NYC Data page ready.");

    let neighborhoodLayer = null; // To hold the GeoJSON layer reference

    // Initialize Leaflet Map
    const map = L.map('map').setView([40.7128, -74.0060], 11); // NYC coordinates, initial zoom

    // Add Tile Layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & NYC Planning'
    }).addTo(map);

    console.log("Base map initialized.");

    // --- GeoJSON Processing ---
    if (typeof nycNeighborhoods !== 'undefined') {
        console.log("nycNeighborhoods data found.");

        neighborhoodLayer = L.geoJSON(nycNeighborhoods, {
            style: function(feature) {
                // Default style
                return {
                    color: "#007bff",
                    weight: 1,
                    fillColor: "#a8dadc",
                    fillOpacity: 0.4
                };
            },
            onEachFeature: function(feature, layer) {
                // Add popups
                if (feature.properties && feature.properties.neighborhood && feature.properties.borough) {
                    const popupContent = `<h3>${feature.properties.neighborhood}</h3><hr>Borough: ${feature.properties.borough}`;
                    layer.bindPopup(popupContent);
                }
                // Add hover effects
                layer.on({
                    mouseover: function(e) {
                        const currentLayer = e.target;
                        currentLayer.setStyle({
                            weight: 3,
                            color: '#ff7800', // Orange highlight
                            fillOpacity: 0.6
                        });
                    },
                    mouseout: function(e) {
                        neighborhoodLayer.resetStyle(e.target); // Reset to default GeoJSON style
                    },
                    // Optional: zoom on click
                    // click: function(e) {
                    //     map.fitBounds(e.target.getBounds().pad(0.1));
                    // }
                });
            }
        }).addTo(map); // Add the layer to the map

        console.log("GeoJSON layer added.");

        // --- Populate Neighborhood List ---
        const neighborhoodNames = nycNeighborhoods.features
            .map(feature => feature.properties.neighborhood)
            .filter(name => name && name.trim() !== "") // Ensure name exists and isn't just whitespace
            .sort();

        const uniqueNames = [...new Set(neighborhoodNames)]; // Get unique names

        const listElement = $("#neighborhoods");
        listElement.empty(); // Clear the "Loading..." message

        uniqueNames.forEach(name => {
            const listItemHtml = `<li><a href="#" data-neighborhood="${name}">${name}</a></li>`;
            listElement.append(listItemHtml);
        });

        // --- Add Click Listener to List ---
        listElement.on('click', 'a', function(event) {
            event.preventDefault();
            const clickedName = $(this).data('neighborhood');

            let targetLayer = null;
            let foundFeature = null;

            // Find the layer and feature matching the clicked name
            neighborhoodLayer.eachLayer(function(layer) {
                if (layer.feature && layer.feature.properties && layer.feature.properties.neighborhood === clickedName) {
                    targetLayer = layer;
                    foundFeature = layer.feature; // Store the feature as well
                }
            });

            if (targetLayer) {
                map.fitBounds(targetLayer.getBounds().pad(0.1)); // Zoom to bounds
                targetLayer.openPopup(); // Open the popup
                console.log(`Zoomed to ${clickedName}`);
            } else if (foundFeature) {
                 // Fallback if layer iteration failed but feature was found earlier
                 console.warn(`Layer for ${clickedName} not found directly, panning to first coordinate.`);
                 const coords = foundFeature.geometry.coordinates[0][0]; // Lng, Lat
                 if (coords && coords.length === 2) {
                    map.panTo(new L.LatLng(coords[1], coords[0]), { animate: true }); // Lat, Lng
                    map.setZoom(15, { animate: true });
                 } else {
                     console.error("Invalid coordinates found for fallback pan.");
                 }
            } else {
                console.warn("Could not find feature or layer for:", clickedName);
                alert(`Details for ${clickedName} could not be located on the map.`);
            }
        }); // End list click handler

    } else {
        console.error("nycNeighborhoods data is undefined. Check that 'nycneighborhoods.js' is loaded before this script.");
        $('#map').html("<p style='color:red; text-align:center; padding: 20px;'>Error: Could not load neighborhood data.</p>");
        $('#neighborhoods').html("<p style='color:red;'>Could not load neighborhood list.</p>");
    }


    // --- Example Button Handler (Optional) ---
    $("#pan-to-flatbush").show().on('click', function() { // Show button and add listener
         const flatbushFeature = nycNeighborhoods.features.find(
            feat => feat.properties.neighborhood === "Flatbush"
         );
         if (flatbushFeature && flatbushFeature.geometry && flatbushFeature.geometry.coordinates) {
             const coords = flatbushFeature.geometry.coordinates[0][0]; // Lng, Lat
             map.panTo(new L.LatLng(coords[1], coords[0]), { animate: true }); // Lat, Lng
             map.setZoom(15, { animate: true });
             console.log("Panned to Flatbush via button.");
             // Optional: Find and open popup for Flatbush layer
         } else {
             console.error("Flatbush feature not found or has no coordinates.");
         }
    });


}); // End $(document).ready()