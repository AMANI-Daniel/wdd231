import { temples } from '../data/temples.js';
// console.log(temples);

import { url } from '../data/temples.js';
// console.log(url);

//------GRAB THE HTML DIV REFERENCE TO HOLD THE ITEMS
const showHere = document.querySelector('#showHere');

//REFERENCE THR OTHER HTML ELEMENTS
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h2');
const myclose = document.querySelector('#mydialog button');
const myinfo = document.querySelector('#mydialog p');

myclose.addEventListener('click', () => {
    mydialog.close();
});

//----LOOP THROUGH THE ARRAY OF JSON ITEMS

function displayItems(data) {
    data.forEach(x => {
        // console.log(x);

        let photo = document.createElement('img');
        photo.src = `${url}${x.path}`;
        photo.alt = x.name;

        photo.addEventListener('click', () => showStuff(x));
        showHere.appendChild(photo);
    });
}

//call the display item function and pass in the temple array from JSON file

displayItems(temples);

function showStuff(x) {
    mytitle.innerHTML = x.name;
    mydialog.showModal();
    myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`;
}
