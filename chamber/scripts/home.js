//Store the selected html elements to be used.

const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const pressure = document.querySelector('#pressure');
const humidity = document.querySelector('#humid');
const caption = document.querySelector('figcaption');
const spotlights = document.querySelector('#spotlights');

const myKey = "a70f65065e778b9d3ac7f2461b733701";
const myLat = "-1.94";
const myLong = "30.07";

const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;


async function apiFetch() {
    try {
        const response = await fetch(myUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.error(error);
    }
}
apiFetch();
function displayResults(data) {

    currentTemp.innerHTML = `<strong>${data.main.temp}&degF</strong>`;
    humidity.innerHTML = `<strong>${data.main.humidity}%</strong>`;
    pressure.innerHTML = `<strong>${data.main.pressure}</strong>`;
    const iconUrl = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    caption.innerHTML = `${data.weather[0].description}`;
}

const weatherDays = [
    {
        "day": "Monday",
        "temp": "26"
    },
    {
        "day": "Tuesday",
        "temp": "23"
    },
    {
        "day": "Wednesday",
        "temp": "24"
    }
];

weatherDays.forEach((weatherDay) => {
    const p = document.createElement('p');
    const temp = document.createElement('span');
    const day = document.createElement('span');

    day.innerHTML = `${weatherDay.day} `;
    temp.innerHTML = `<strong>${weatherDay.temp}&degC</strong>`;

    p.appendChild(day);
    p.appendChild(temp);

    document.querySelector('#forecast').appendChild(p);
});
// const url = './data/members.json';

async function getCompanySpolight(){
    const response = await fetch(url);
    const data = await response.json();
    displaySpotlight(data.companies)
}

getCompanySpolight();

let displaySpotlight = (companies)=> {
    companies.forEach(company => {
        if (company.membership === "gold") {

            let card = document.createElement('section');
            let image = document.createElement('img');
            image.setAttribute('src', company.image);
            image.setAttribute('alt', 'company logo');
            image.setAttribute('loading', 'lazy');

            let name = document.createElement('h2');
            name.textContent = company.name;
            let address = document.createElement('p');
            address.setAttribute('class', 'address');
            address.textContent = company.address;

            let phone = document.createElement('p');
            phone.textContent = `Phone: ${company.telephone}`;

            let membership = document.createElement('p');
            membership.textContent = `Membership level: ${company.membership}`;

            let companyUrl = document.createElement('a');
            companyUrl.setAttribute('href', company.url);
            companyUrl.textContent = company.url;


            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(membership);
            card.appendChild(companyUrl);
            spotlights.appendChild(card);
            
        }
    });
}
