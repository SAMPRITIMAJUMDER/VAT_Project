function getTouristLocations() {
    const placeName = document.getElementById("placeName").value.trim().toLowerCase();
    const touristData = {
        "paris": ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Montmartre"],
        "new york": ["Statue of Liberty", "Central Park", "Times Square", "Empire State Building"],
        "london": ["Big Ben", "Buckingham Palace", "Tower Bridge", "British Museum"]
        // Add more place names and tourist locations as needed
    };

    const touristList = document.getElementById("touristList");
    touristList.innerHTML = "";

    if (touristData.hasOwnProperty(placeName)) {
        const ul = document.createElement("ul");
        touristData[placeName].forEach((location, index) => {
            const li = document.createElement("li");
            li.textContent = location;
            ul.appendChild(li);
        });
        touristList.appendChild(ul);
    } else {
        touristList.textContent = "No tourist locations found for the entered place.";
    }
}
