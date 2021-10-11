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

const container = document.querySelector('.container');




const tempImg = document.querySelector('.tempImg');

const citys = ["TOKYO ", "SEOUL ", "MEXICO CITY", "Mumbai", "Delhi", "New York", "DŻAKARTA", "Sao Paulo", "MANILA", "Los Angeles", "Szanghaj",];
const weatherInfo = {
    temp: '',
    name: '',
    iconId: '',
    tempMain: '',
    tempFeels: '',
    tempMax: '',
    tempMin: '',
    windSpeed: '',
    cloudsInfo: '',
}
let test = []
let numberBG = Math.floor(Math.random() * 2);




const randomCity = () => {
    const randomNumber = Math.floor(Math.random() * 12);
    const city = citys[randomNumber];
    weather.fatchWeather(city)
    console.log(city);
}


randomButton.addEventListener('click', randomCity);

const enterCity = () => {
    const city = searchInput.value;
    weather.fatchWeather(city)
    searchInput.value = '';
}

searchBtton.addEventListener('click', enterCity);

const changeBackground = () => {

    const temperature = test.main.temp;
    let randombg = Math.floor(Math.random() * 4 + 1);



    const sunnyDay = [
        "url('./img/imgSunnyDay/bgSunny-1.jpg')",
        "url('./img/imgSunnyDay/bgSunny-2.jpg')",
        "url('./img/imgSunnyDay/bgSunny-3.jpg')",
        "url('./img/imgSunnyDay/bgSunny-4.jpg')",
    ]

    if (temperature < 10) {
        container.style.backgroundImage = "url('./img/bg-3.jpg')";
        console.log('work1');
        console.log(test.main.temp);
        return
    }
    if (temperature < 18) {
        container.style.backgroundImage = "url('./img/bg-chilly.jpg')";
        console.log('work2');
        console.log(test.main.temp);
        return
    }
    if (temperature < 26) {
        container.style.backgroundImage = "url('./img/bg-4.jpg')";
        console.log('work3');
        console.log(test.main.temp);
        return
    }
    if (temperature < 32) {
        container.style.backgroundImage = sunnyDay[randombg];
        console.log('work4');
        console.log(test.main.temp);
        return
    }
    if (temperature > 34) {
        container.style.backgroundImage = "url('./img/bg-hot.jpg')";
        console.log('work5');
        console.log(test.main.temp);
        return
    }
}

const enterDate = () => {

    const temperature = test.main.temp;

    cityName.innerHTML = test.name
    const iconId = test.weather[0].icon
    tempImg.src = `https://openweathermap.org/img/wn/${iconId}@2x.png`
    tempMain.innerHTML = temperature
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


    changeBackground()
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