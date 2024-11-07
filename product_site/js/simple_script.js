document.addEventListener("DOMContentLoaded", function() {
    // Selects elements using different DOM methods and stores them in variables
    const gymRadio = document.getElementById("gymRadio"); 
    const outdoorRadio = document.getElementById("outdoorRadio"); 
    const tableBody = document.getElementById("workoutTableBody"); 
    const table = document.getElementsByClassName("workoutTable")[0]; 

    // these arrays of objects contain the location names and ratings for each workout location
    const gymData = [
        { location: "Planet Fitness", rating: 3.9 },
        { location: "Edge Gym", rating: 4.8 },
        { location: "Golds Gym", rating: 4.6 }
    ];

    const outdoorData = [
        { location: "Lincoln Woods", rating: 4.7 },
        { location: "Hilltop Trail", rating: 4.9 },
        { location: "Lakefront Track", rating: 4.3 }
    ];

    // Simple average calculation
    function calculateAverage(data) {
        // Accessing elements of array directly
        const rating1 = data[0].rating;
        const rating2 = data[1].rating;
        const rating3 = data[2].rating;
        return ((rating1 + rating2 + rating3) / 3).toFixed(2);
    }

    // Function to update table content
    function updateTable(data) {
        // Clear existing rows
        tableBody.innerHTML = "";


        //added commment to every line in first piece of each new code then left the rest of the code as is
        // This creates and appends new rows for each of the locations
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            const row = document.createElement("tr");

            const locationCell = document.createElement("td");
            locationCell.textContent = item.location;
            row.appendChild(locationCell);

            const ratingCell = document.createElement("td");
            ratingCell.textContent = item.rating;
            row.appendChild(ratingCell);

            tableBody.appendChild(row);
        }

        // This adds rows for average rating
        const averageRow = document.createElement("tr"); //creates a new row element

        const averageLabelCell = document.createElement("td"); //creates a new cell element
        averageLabelCell.innerHTML = "<strong>Average Rating</strong>"; //sets the inner HTML of the cell to the average rating label
        averageRow.appendChild(averageLabelCell); //appends the cell to the row

        const averageValueCell = document.createElement("td");
        averageValueCell.textContent = calculateAverage(data);
        averageRow.appendChild(averageValueCell);

        tableBody.appendChild(averageRow);
    }

    //selects the gymRadio input element using CSS selector
    document.querySelector("input#gymRadio").addEventListener("change", function() { 
        if (gymRadio.checked) { //checks if the gymRadio button is selected
            table.style.display = "block";
            updateTable(gymData);
        }
    });

    //Retrieves all <input> elements and selects the fourth [3] 
    document.getElementsByTagName("input")[3].addEventListener("change", function() { 
        if (outdoorRadio.checked) { //checks if the outdoorRadio button is selected
            table.style.display = "block";
            updateTable(outdoorData);
        }
    });
});