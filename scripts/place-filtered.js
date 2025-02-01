const temperature = parseFloat(document.getElementById('temperature').textContent);
const windSpeed = parseFloat(document.getElementById('windSpeed').textContent);

function calculateWindChill(temperature, windSpeed) {
    return (temperature <= 10 && windSpeed > 4.8) ? (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1) : 'N/A';
}

const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById('wind-chill').textContent = windChill + '°C';