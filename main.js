const cityName = document.querySelector('.cityName');
const tempMain = document.querySelector('.tempText');

const tempFeels = document.querySelector('.tempFeels');
const tempMax = document.querySelector('.tempMax');
const tempMin = document.querySelector('.tempMin');

const windSpeed = document.querySelector('.windSpeed');
const cloudsInfo = document.querySelector('.cloudsInfo');

const sunRiseS = document.querySelector('.sunRiseS');
const sunSetS = document.querySelector('.sunSetS');


const searchInput = document.querySelector('.searchInput');
const searchBtton = document.querySelector('.searchButton');
const randomButton = document.querySelector('.randomButton');

const tempImg = document.querySelector('.tempImg');

const citys = ["TOKYO ", "SEOUL ", "MEXICO CITY", "Mumbai", "Delhi", "New York", "DŻAKARTA", "Sao Paulo", "MANILA", "Los Angeles", "Szanghaj",]
let test = []


const randomCity = () => {
    const randomNumber = Math.floor(Math.random() * 12);
    const city = citys[randomNumber];
    weather.fatchWeather(city)
}


randomButton.addEventListener('click', randomCity);

const enterCity = () => {
    const city = searchInput.value;
    weather.fatchWeather(city)
    searchInput.value = '';
}

searchBtton.addEventListener('click', enterCity);



const enterDate = () => {
    cityName.innerHTML = test.name
    const iconId = test.weather[0].icon
    tempImg.src = `https://openweathermap.org/img/wn/${iconId}@2x.png`
    tempMain.innerHTML = test.main.temp
    tempFeels.innerHTML = test.main.feels_like
    tempMax.innerHTML = test.main.temp_max
    tempMin.innerHTML = test.main.temp_min
    windSpeed.innerHTML = test.wind.speed
    cloudsInfo.innerHTML = test.weather[0].description

    const secRise = test.sys.sunrise;
    const dateR = new Date(secRise * 1000);
    const timestrRise = dateR.toLocaleTimeString();
    sunRiseS.innerHTML = timestrRise

    const secSet = test.sys.sunset;
    const dateS = new Date(secSet * 1000);
    const timestrSet = dateS.toLocaleTimeString();
    sunSetS.innerHTML = timestrSet

}


let weather = {
    apiKey: "5fca2efe4000c502408b751f8fdffa8a",
    fatchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=en&appid=5fca2efe4000c502408b751f8fdffa8a`)
            .then(res => res.json())
            .then(data => {
                test = data
            })
            .then(() => {
                enterDate()
            })
            .catch(err => console.log("ERROR"))
    }

}


randomCity()