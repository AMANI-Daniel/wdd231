const year = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastmodified');
const now = new Date();
year.innerHTML = now.getFullYear();
lastModified.textContent = document.lastModified;

const hambtn = document.querySelector('#display');
const navbar = document.querySelector('#nav-bar');
hambtn.addEventListener('click', () => {
    hambtn.classList.toggle('show');
    navbar.classList.toggle('show');
});

const figure = document.querySelector('figure');
const currentTemp = document.querySelector('#current-temp');
const pressure = document.querySelector('#pressure');
const humidity = document.querySelector('#humid');
const caption = document.querySelector('figcaption');

const myKey = "a70f65065e778b9d3ac7f2461b733701";
const myLat = "-1.94";
const myLong = "30.07";

const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(myUrl);
        if (response.ok) {
            const data = await response.json();
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
    let companyLogo = document.createElement('img');

    companyLogo.setAttribute('src', iconUrl);
    companyLogo.setAttribute('alt', data.weather[0].description);
    caption.innerHTML = `${data.weather[0].description}`;
    figure.appendChild(companyLogo);
}


const weatherDays = [
    {
        "day": "Thursday",
        "temp": "26"
    },
    {
        "day": "Friday",
        "temp": "24"
    },
    {
        "day": "Saturday",
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


//Creatingt the spotlight section and display the spotlight randomly.
const file = './data/members.json';

async function getSpotLight() {
    try {
        const response = await fetch(file);

        if (response.ok) {
            const data = await response.json();

            const shuffled = data.companies.sort(() => Math.random() - 0.5);
            const selectedSpoltLight = shuffled.slice(0, 3);

            displaySpotLight(selectedSpoltLight);
        }
        else {
            throw Error(await response.text);
        }
    } catch (error) {
        console.error(error);
    }
}

getSpotLight();

let displaySpotLight = (companies) => {

    const spotLight =  document.querySelector('#spotlights');
    companies.forEach(company => {

        if (company.membership == "gold" || company.membership == "silver") {
            const container = document.createElement('section')
            let name = document.createElement('h2');
            name.textContent = company.name;
            let logo = document.createElement('img');
            logo.setAttribute('src', company.image);
            logo.setAttribute('alt', "company logo");
            let phone = document.createElement('p');
            phone.textContent = `Phone: ${company.telephone}`;
            let location = document.createElement('p');
            location.textContent = `Address: ${company.address}`;
            let member = document.createElement('p');
            member.textContent = `Membership: ${company.membership}`; 
            let web = document.createElement('a');
            web.setAttribute('href', company.url);
            web.textContent = company.url;
            

            container.appendChild(name);
            container.appendChild(logo);
            container.appendChild(phone);
            container.appendChild(location);
            container.appendChild(member);
            container.appendChild(web);

            spotLight.appendChild(container);
        }
    });

}

