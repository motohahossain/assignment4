$(document).ready(function () {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'YOUR_API_KEY';
    const city = 'YOUR_CITY_NAME'; // Replace with the desired city name
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    $.get(apiUrl, function (data) {
        const forecastList = data.list;

        // Display the 5-day forecast
        for (let i = 0; i < forecastList.length; i += 8) {
            const forecast = forecastList[i];
            const date = new Date(forecast.dt_txt);
            const day = date.toLocaleDateString('en-US', { weekday: 'short' });
            const icon = forecast.weather[0].icon;
            const temperature = forecast.main.temp.toFixed(1);

            const weatherItem = `
                <div class="weather-item">
                    <div>${day}</div>
                    <img src="https://openweathermap.org/img/w/${icon}.png" alt="weather icon">
                    <div>${temperature}°C</div>
                </div>
            `;

            $('#weather').append(weatherItem);
        }
    });
});
