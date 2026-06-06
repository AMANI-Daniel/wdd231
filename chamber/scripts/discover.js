//import the item from the JSON file.

import { places } from "../data/places.mjs";
//console.log(places);

const showHere = document.querySelector('#showHere');

const year = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastmodified');
const now = new Date();
year.innerHTML = now.getFullYear();

lastModified.textContent = document.lastModified;
const hambtn = document.querySelector('#display');
const navbar = document.querySelector('#nav-bar');
const modebtn = document.querySelector('#mode-btn');
//Add or remove the show class by clicking the hamburger button
hambtn.addEventListener('click', () => {
    hambtn.classList.toggle('show');
    navbar.classList.toggle('show');
});


//Creating function to display all images
function displayItems(places) {
    //console.log(places)
    places.forEach(x => {
        //console.log(x);

        //build the card element
        const thecard = document.createElement('div');

        //build the photo element
        const thefigure = document.createElement('figure');
        const thephoto = document.createElement('img');
        thephoto.src = `images/${x.image_url}`
        thephoto.alt = x.name;
        thephoto.width = '300';
        thephoto.height = '200';
        thefigure.appendChild(thephoto);
        thecard.appendChild(thefigure);

        //build the title element
        const thetitle = document.createElement('h2');
        thetitle.innerText = x.name;
        thecard.appendChild(thetitle);

        //build the address element
        const theaddress = document.createElement('address');
        theaddress.innerText = x.location;
        thecard.appendChild(theaddress);

        //build the description element
        const thedesc = document.createElement('p');
        thedesc.innerText = x.description;
        thecard.appendChild(thedesc);

        const button = document.createElement('button');
        button.textContent = "Learn more";
        thecard.appendChild(button)

        showHere.appendChild(thecard);

    });//end of the loop
} //end of function

//Start to display the items by calling the function
displayItems(places);


//Track the number of days of visit

function trackDays() {
    const visits = document.querySelector('#visits');

    const lastVisit = localStorage.getItem('last-visit');
    const now = Date.now();

    if (!lastVisit) {
        visits.textContent = 'Welcome! Let us know if you have any questions.';
    } else {
        let daysBetween = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));

        if (daysBetween < 1) {
            visits.textContent = 'Back so soon! Awesome!';
        } else if (daysBetween === 1) {
            visits.textContent = `You last visited ${daysBetween} day ago.`;
        } else {
            visits.textContent = `You last visited ${daysBetween} days ago.`;
        }
    }

    localStorage.setItem('last-visit', now);
}

trackDays();