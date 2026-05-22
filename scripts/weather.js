//Store the selected element to be used

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const myTown = document.querySelector('#town');

const myLat = "-1.94";
const myLong = "30.07";
const myKey = "a70f65065e778b9d3ac7f2461b733701";

//The url for the weather
const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data)
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}
function displayResults(data) {
    //console.log('hello');
    myTown.innerHTML = `<strong>${data.name}</strong>`;
    currentTemp.innerHTML = `<strong>${data.main.temp}&deg;F</strong>`;
    captionDesc.innerHTML = `${data.weather[0].description}`;

    const iconSrc = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    
}

apiFetch();
