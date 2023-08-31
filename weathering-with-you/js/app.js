const input = document.querySelector("input");
const generateBtn = document.querySelector("button");

function getCityName() {
    let city = input.value.trim();

    if (city.length != 0) {
        return city;
    } else {
        return null;
    }
}

const realFeel = document.getElementById("real-feel");
const wind = document.getElementById("wind");

generateBtn.onclick =  async function() {
    const city = getCityName();

    if (city === null) {
        console.log("please enter city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c532e23dee665bb989f2702ff2b482c8`;

    console.log("apicall: " + url);

    const response = await fetch(url)
        .then((value) => value.json())
        .catch((err) => console.log(err));
    
    realFeel.innerText = (response.main.feels_like - 272.15).toFixed(2) + " degrees"
    wind.innerText = response.wind.speed + " Km/h";
}
