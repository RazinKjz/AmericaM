Papa.parse('airports.csv', {
  header: true,
  download: true,
  complete: function(results) {
    console.log(results.data);

    const airportCoords = [];

    results.data.forEach(row => {
      const lat = parseFloat(row.LATITUDE);
      const lon = parseFloat(row.LONGITUDE);
      const name = row.AIRPORT;
      const city = row.CITY;
      const state = row.STATE;

      if (!isNaN(lat) && !isNaN(lon)) {
        L.marker([lat, lon]).addTo(map)
          .bindPopup(`<b>${name}</b><br>${city}, ${state}`);
        
        airportCoords.push([lat, lon]);
      }
    });


  }
});
