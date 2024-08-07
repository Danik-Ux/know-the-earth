var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://services.sentinel-hub.com/ogc/wms/YOUR_INSTANCE_ID?layers=TRUE-COLOR&request=GetMap&styles=&format=image/jpeg&tilematrixset=EPSG:3857&tile={z}/{x}/{y}', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.sentinel-hub.com/">Sentinel Hub</a>'
}).addTo(map);
