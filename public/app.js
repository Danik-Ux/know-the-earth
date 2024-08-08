document.getElementById('locationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var location = document.getElementById('location').value;
    fetch('/addLocation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ location: location })
    })
    .then(response => response.json())
    .then(data => {
        // Update map based on user location
        var latlng = [data.lat, data.lng];
        map.setView(latlng, 10);
        L.marker(latlng).addTo(map);
    });
});

var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.arcgis.com/home/item.html?id=fd61b9e0c69c4e14bebd50a9a968348c">Sentinel Hub</a>'
}).addTo(map);
