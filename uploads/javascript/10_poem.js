// 10_poem.js

$(document).ready(function() {
    console.log("Poem page ready.");

    const poemContainer = $("#poem");
    const infoContainer = $("#info");

    // Initial message
    infoContainer.html("<p>Click on a highlighted term above.</p>");

    // Use jQuery's getJSON method to fetch data from poem.json
    $.getJSON("poem.json", function(data) {
        console.log("Poem data loaded:", data);

        let poemHtml = "<blockquote>"; // Start the blockquote for the poem

        // Iterate through each line in the data using Array.forEach
        data.lines.forEach(function(lineArray) {
            poemHtml += "<p>"; // Start a paragraph for the line

            // Iterate through each word object in the current lineArray
            lineArray.forEach(function(wordObject) {
                // Check if the word has an 'info' property and it's not empty
                if (wordObject.info && wordObject.info.trim() !== "") {
                    // Sanitize info text slightly for attribute (basic)
                    const safeInfo = wordObject.info.replace(/"/g, '"').replace(/'/g, ''');
                    // Wrap the word in an <a> tag, store info in data-info attribute
                    poemHtml += `<a href="#" class="info-term" data-info="${safeInfo}">${wordObject.text}</a> `;
                } else {
                    // If no info, just add the word text
                    poemHtml += wordObject.text + " ";
                }
            }); // End word loop

            poemHtml += "</p>"; // End the paragraph for the line
        }); // End line loop

        poemHtml += "</blockquote>"; // End the blockquote

        // Replace the content of the #poem div with the generated HTML
        poemContainer.html(poemHtml);

        // --- Add Event Listener AFTER poem is loaded using Event Delegation ---
        poemContainer.on("click", ".info-term", function(event) {
            event.preventDefault(); // Prevent the default link behavior

            const clickedElement = $(this); // The specific <a> tag clicked
            const infoText = clickedElement.data("info"); // Retrieve info from data-info attribute
            const wordText = clickedElement.text(); // Get the text of the word itself

            // Display the info text in the #info div
            // Using template literals for cleaner formatting
            infoContainer.html(`<p><strong>${wordText}:</strong> ${infoText}</p>`);

            // Add a class to visually indicate the info box is active
            infoContainer.addClass("active-info");

            // Optional: Highlight the clicked term (remove from others first)
            $('.info-term').removeClass('term-active'); // Remove from all
            clickedElement.addClass('term-active'); // Add to clicked one
             // Add CSS for .term-active in poem.css if using this (e.g., background: yellow;)

        }); // End click handler

    }).fail(function(jqXHR, textStatus, errorThrown) {
        // Handle errors if poem.json cannot be loaded
        console.error("Error loading poem.json:", textStatus, errorThrown);
        poemContainer.html("<p style='color:red; font-weight:bold;'>Sorry, could not load the poem data. Please check the file path and ensure it's valid JSON.</p>");
    }); // End of $.getJSON

}); // End of $(document).ready()