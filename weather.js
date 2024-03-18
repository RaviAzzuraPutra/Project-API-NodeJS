const express = require('express');
const request = require('request');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    let city = req.query.city;
    request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16bd97df47cd0e947c14a8550c6be540`, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            let data = JSON.parse(body);
            res.send(`Cuaca di kota ${city} adalah ${data.weather[0].description}`);
        } else {
            res.status(response.statusCode).send('Terjadi kesalahan saat mengambil data cuaca');
        }
    });
});

app.listen(port, () => {
    console.log(`Berjalan di port ${port}`);
});
