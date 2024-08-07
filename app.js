var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://cors-anywhere.herokuapp.com/https://services.sentinel-hub.com/ogc/wms/8f44a8b8-ccde-4121-95c8-c0735067f8de?layers=TRUE-COLOR&request=GetMap&styles=&format=image/jpeg&tilematrixset=EPSG:3857&tile={z}/{x}/{y}', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.sentinel-hub.com/">Sentinel Hub</a>'
}).addTo(map);
