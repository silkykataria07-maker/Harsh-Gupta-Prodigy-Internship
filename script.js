async function fetchWeather() {
    const city = document.getElementById('citySearch').value;
    const apiKey = 'YOUR_API_KEY'; // Sign up at openweathermap.org to get one
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const resBox = document.getElementById('weatherResult');
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        
        const data = await response.json();

        // Update UI
        document.getElementById('cityName').innerText = data.name + ", " + data.sys.country;
        document.getElementById('tempDisplay').innerText = Math.round(data.main.temp) + "°C";
        document.getElementById('description').innerText = data.weather[0].description;
        document.getElementById('humidityVal').innerText = data.main.humidity + "%";
        document.getElementById('windVal').innerText = data.wind.speed + " km/h";
        document.getElementById('pressureVal').innerText = data.main.pressure;
        document.getElementById('wIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById('dateTime').innerText = new Date().toLocaleString();

        resBox.classList.remove('result-hidden');
    } catch (err) {
        alert(err.message);
    }
}