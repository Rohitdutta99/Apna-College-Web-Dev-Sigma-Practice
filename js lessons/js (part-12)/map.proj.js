// PositionStack API credentials
const apiKey = "97c4225f5e9066a03e642952c90aa0cb";
const endpoint = "http://api.positionstack.com/v1/";

// Initialize the map
const map = L.map("map").setView([20.5937, 78.9629], 5); // Default to India's center

// Add the tile layer to display the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Function to fetch location data
async function fetchLocation(query) {
    const url = `${endpoint}forward?access_key=${apiKey}&query=${query}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.data && data.data.length > 0) {
            const { latitude, longitude, label } = data.data[0];
            return { latitude, longitude, label };
        } else {
            alert("Location not found. Try again.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching location data:", error);
        alert("Failed to fetch location. Please try again later.");
        return null;
    }
}

// Event listener for the search button
document.getElementById("searchButton").addEventListener("click", async () => {
    const query = document.getElementById("locationInput").value.trim();
    if (!query) {
        alert("Please enter a location.");
        return;
    }

    const location = await fetchLocation(query);
    if (location) {
        // Update the map view
        map.setView([location.latitude, location.longitude], 10);

        // Add a marker to the map
        L.marker([location.latitude, location.longitude])
            .addTo(map)
            .bindPopup(`<b>${location.label}</b>`)
            .openPopup();
    }
});
