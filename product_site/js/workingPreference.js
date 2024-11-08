//updates the table based on user input.
document.addEventListener("DOMContentLoaded", () => {
    const workoutTableBody = document.getElementById("workoutTableBody");

    const gymRadio = document.getElementById("gymRadio");
    const outdoorRadio = document.getElementById("outdoorRadio");

    const workoutLengthOptions = document.querySelector(".workOutLength");
    const outdoorOptions = document.querySelector(".outDoorOptions");
    const workoutEquipmentOptions = document.querySelector(".vehicleEquipment");

    function toggleElements(elements, display) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = display;
        }
    }

    // Hide all subsequent question groups initially
    toggleElements([workoutLengthOptions, outdoorOptions, workoutEquipmentOptions], "none");

    // Event listeners for environment selection
    gymRadio.addEventListener("change", () => {
        toggleElements([workoutLengthOptions, outdoorOptions, workoutEquipmentOptions], "none");
        toggleElements([workoutLengthOptions], "block");
    });

    outdoorRadio.addEventListener("change", () => {
        toggleElements([workoutLengthOptions, outdoorOptions, workoutEquipmentOptions], "none");
        toggleElements([outdoorOptions], "block");
    });

    // Event listeners for indoor workout length
    workoutLengthOptions.addEventListener("change", (event) => {
        if (["30 minutes", "1 hour"].includes(event.target.value)) {
            updateTable("daily passes");
        } else if (["1.5 hours", "2 hours"].includes(event.target.value)) {
            updateTable("temporary memberships");
        }
    });

    // Event listeners for outdoor workout type
    outdoorOptions.addEventListener("change", (event) => {
        if (event.target.id === "Cardio") {
            updateTable("parks with running/biking trails");
        } else if (event.target.id === "Strength") {
            workoutEquipmentOptions.style.display = "block";
        }
    });

    // Event listeners for equipment preference (strength workouts)
    workoutEquipmentOptions.addEventListener("change", (event) => {
        if (event.target.id === "equipmentYes") {
            updateTable("gyms with daily passes");
        } else if (event.target.id === "equipmentNo") {
            updateTable("outdoor workout spots with free weights");
        }
    });

    // Function to update the table based on user input
    function updateTable(option) {
        workoutTableBody.innerHTML = ""; // Clear previous entries
        // Data for each location
        let data = [];
        // Switch statement to determine data based on user input
        switch (option) {
            case "daily passes":
                data = [
                    { name: "Planet Fitness", rating: "3.9" },
                    { name: "Edge Gym", rating: "4.8" }
                ];
                break;
            case "temporary memberships":
                data = [
                    { name: "Momentum fitness", rating: "4.6" },
                    { name: "Method Fitness", rating: "4.8" }
                ];
                break;
            case "parks with running/biking trails":
                data = [
                    { name: "Green Park", rating: "4.8" },
                    { name: "Urban Bike Trails", rating: "4.6" }
                ];
                break;
            case "gyms with daily passes":
                data = [
                    { name: "Planet Fitness", rating: "3.9" },
                    { name: "Edge Gym", rating: "4.8" }
                ];
                break;
            case "outdoor workout spots with free weights":
                data = [
                    { name: "Nathaneal Greene Park", rating: "4.7" },
                    { name: "Outdoor Gym Zone", rating: "4.7" }
                ];
                break;
        }
        // Creates and appends new rows for each location
        let i = 0;
        while (i < data.length) {
            const location = data[i];
            const row = document.createElement("tr");
            row.innerHTML = `<td>${location.name}</td><td>${location.rating}</td>`;
            workoutTableBody.appendChild(row);
            i++;
        }
    }
});
