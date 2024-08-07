var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://services.sentinel-hub.com/ogc/wms/06e1cf9f-14b3-4803-a4dc-fbff73f0eddf?layers=TRUE-COLOR-S2-L1C&request=GetMap&styles=&format=image/jpeg&tilematrixset=EPSG:3857&tile={z}/{x}/{y}', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.sentinel-hub.com/">Sentinel Hub</a>'
}).addTo(map);
