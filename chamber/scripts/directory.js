
//Store the selected html elements for directory
 
const hambtn = document.querySelector('#display');
const navbar = document.querySelector('#nav-bar');
const modebtn = document.querySelector('#mode-btn');
const cards = document.querySelector('#cards'); 
const url = './data/members.json';
const year = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastmodified');
const list = document.querySelector('#list');
const grid = document.querySelector('#grid');
const now = new Date();
year.innerHTML = now.getFullYear();

lastModified.textContent = document.lastModified;

//Add or remove the show class by clicking the hamburger button
hambtn.addEventListener('click',()=> {
    hambtn.classList.toggle('show');
    navbar.classList.toggle('show');
});

async function getCompany() {
    const response = await fetch(url);
    const data = await response.json();

    displayCompany(data.companies);

}

getCompany();

let displayCompany = (companies)=>{
    companies.forEach(company=> {
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

        let email = document.createElement('a');
        email.setAttribute('href', company.email);
        email.textContent = `Email: ${company.email} `;

        let companyUrl = document.createElement('a');
        companyUrl.setAttribute('href', company.url);
        companyUrl.textContent = company.url;


        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(email);
        card.appendChild(companyUrl);


        cards.appendChild(card);
    });
}

list.addEventListener('click', () => { 
    cards.classList.add('horiz');
});
grid.addEventListener('click', () => { 
    cards.classList.remove('horiz');
});

//JavaScript for the home page
