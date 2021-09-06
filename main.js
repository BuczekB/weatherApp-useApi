let weather = {
    apiKey: "5fca2efe4000c502408b751f8fdffa8a",
    fatchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pl&appid=5fca2efe4000c502408b751f8fdffa8a`)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log("ERROR"))
    }
}


