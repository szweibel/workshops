// 9_script.js

$(document).ready(function() {
    console.log('DOM ready, script running!');

    // --- Selecting Elements ---
    const heading = $('#mainHeading'); // Use ID added in HTML
    const firstButton = $('#toggleJokes'); // Original button
    const secondButton = $('#myButton'); // New button
    const outputDiv = $('#outputArea');
    const firstParagraph = $('.intro-para'); // Use class added in HTML

    // --- Modifying Content & HTML ---
    heading.html("jQuery Makes It <em>Easier</em>!"); // Change heading HTML
    outputDiv.text("Ready for clicks..."); // Add initial text to output area
    // Append to joke section (as in original example)
    $("#joke").append("<p>Q. What do you call a fake noodle? <br /> A. An impasta</p>");

    // --- Modifying Styles & Attributes ---
    // Style the first button (toggleJokes) with jQuery CSS method
    firstButton.css({
        "background-color": "orange", // Style from original example
        "color": "white",
        "font-size": "18px", // Adjusted size
        "padding": "8px 12px",
        "border-radius": "5px",
        "border": "1px solid black",
        "margin": "10px"
    });
    // Style the second button (myButton)
     secondButton.css({
        'background-color': 'cornflowerblue',
        'color': 'white',
        'padding': '10px 15px',
        'border': 'none',
        'border-radius': '5px',
        'cursor': 'pointer',
        'font-size': '1em'
    });

    // Add highlight class to first paragraph
    firstParagraph.addClass('highlight');

    // Hide the joke section initially
    // $("#joke").hide(); // Optional: uncomment to hide jokes at start

    // --- Handling Events ---
    // Original toggle button for jokes
    firstButton.on('click', function() {
        $("#joke").toggle(); // Toggle visibility of joke section
        console.log("Toggled jokes visibility");
    });

    // Event handler for the second button click
    secondButton.on('click', function() {
        console.log("Second Button was clicked!");
        outputDiv.html("<strong>Action Button clicked!</strong> Timestamp: " + Date.now());
        firstParagraph.toggle(); // Toggle visibility of the first paragraph
        heading.toggleClass('active'); // Toggle .active class on H1
    });

    // Add a hover effect to the second button
    secondButton.hover(
        function() { // Mouse enters
            $(this).css('background-color', 'darkblue');
        },
        function() { // Mouse leaves
            $(this).css('background-color', 'cornflowerblue');
        }
    );


}); // End of $(document).ready()