const dataDisplay = document.getElementById('data-display');
const btnToday = document.getElementById('btn-today');
const btnTomorrow = document.getElementById('btn-tomorrow');

const lat = 47.82;
const lng = -122.31;


btnToday.addEventListener('click', () => {
  dataDisplay.innerHTML = '<p>Loading today\'s data...</p>';
  
  fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today&tzid=America/Los_Angeles`)
    .then(function(response) {
      if (!response.ok) throw new Error("Network error");
      return response.json();
    })
    .then(function(data) {
      const sunData = data.results;
      
      dataDisplay.innerHTML = `
        <h3>Today's Solar Times</h3>
        <p><strong>Sunrise:</strong> <span class="result">${sunData.sunrise}</span></p>
        <p><strong>Sunset:</strong> <span class="result">${sunData.sunset}</span></p>
        <p><strong>Day Length:</strong> ${sunData.day_length}</p>
      `;
    })
    .catch(function(error) {
      console.error("Fetch error:", error);
      dataDisplay.innerHTML = '<p class="error">Failed to load data.</p>';
    });
});


btnTomorrow.addEventListener('click', () => {
  dataDisplay.innerHTML = '<p>Loading tomorrow\'s data...</p>';
  
  fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=tomorrow&tzid=America/Los_Angeles`)
    .then(function(response) {
      if (!response.ok) throw new Error("Network error");
      return response.json();
    })
    .then(function(data) {
      const sunData = data.results;
      
      dataDisplay.innerHTML = `
        <h3>Tomorrow's Solar Times</h3>
        <p><strong>Sunrise:</strong> <span class="result">${sunData.sunrise}</span></p>
        <p><strong>Sunset:</strong> <span class="result">${sunData.sunset}</span></p>
        <p><strong>Day Length:</strong> ${sunData.day_length}</p>
      `;
    })
    .catch(function(error) {
      console.error("Fetch error:", error);
      dataDisplay.innerHTML = '<p class="error">Failed to load data.</p>';
    });
});