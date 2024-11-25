document.addEventListener("DOMContentLoaded", function () {
    // Selects elements using different DOM methods and stores them in variables
    const gymRadio = document.getElementById("gymRadio");
    const outdoorRadio = document.getElementById("outdoorRadio");
    const tableBody = document.getElementById("workoutTableBody");
    const table = document.getElementsByClassName("workoutTable")[0];

    // Class definition for WorkoutLocation
    class WorkoutLocation {
        constructor(location, rating) {
            this.location = location;
            this.rating = rating;
        }

        // Method to calculate the average rating of an array of WorkoutLocation instances
        calculateAverage(data) {
            const totalRating = data.reduce((sum, location) => sum + location.rating, 0);
            return (totalRating / data.length).toFixed(2);
        }
    }

    // Data arrays for gym and outdoor locations
    const gymData = [
        new WorkoutLocation("Planet Fitness", 3.9),
        new WorkoutLocation("Edge Gym", 4.8),
        new WorkoutLocation("Golds Gym", 4.6),
    ];

    const outdoorData = [
        new WorkoutLocation("Lincoln Woods", 4.7),
        new WorkoutLocation("Hilltop Trail", 4.9),
        new WorkoutLocation("Lakefront Track", 4.3),
    ];

    // Function to update table content
    function updateTable(data) {
        // Clear existing rows
        tableBody.innerHTML = "";

        // Create an instance of WorkoutLocation to access the calculateAverage method
        const workoutInstance = new WorkoutLocation();

        // Create and append new rows for each location
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

        // Add row for average rating
        const averageRow = document.createElement("tr");

        const averageLabelCell = document.createElement("td");
        averageLabelCell.innerHTML = "<strong>Average Rating</strong>";
        averageRow.appendChild(averageLabelCell);

        const averageValueCell = document.createElement("td");
        averageValueCell.textContent = workoutInstance.calculateAverage(data);
        averageRow.appendChild(averageValueCell);

        tableBody.appendChild(averageRow);
    }

    // Event listener for gym radio button
    document.querySelector("input#gymRadio").addEventListener("change", function () {
        if (gymRadio.checked) {
            table.style.display = "block";
            updateTable(gymData);
        }
    });

    // Event listener for outdoor radio button
    document.getElementsByTagName("input")[3].addEventListener("change", function () {
        if (outdoorRadio.checked) {
            table.style.display = "block";
            updateTable(outdoorData);
        }
    });
});
