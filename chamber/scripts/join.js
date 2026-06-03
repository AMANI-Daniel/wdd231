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

document.querySelector('#stamp').value = new Date().toLocaleString();

//Styling the dialog box

const dialogBox = document.querySelector('#dialogBox');
const dialogBoxDiv = document.querySelector('#dialogBox div');
const openButton1 = document.querySelector('#openButton1');
const openButton2 = document.querySelector('#openButton2');
const openButton3 = document.querySelector('#openButton3');
const openButton4 = document.querySelector('#openButton4');
const closeButton = document.querySelector('#closeButton');

closeButton.addEventListener('click', () => { 
    dialogBox.close();
});

openButton1.addEventListener('click', () => {
    dialogBoxDiv.innerHTML = `
        <h2>Benefits of our chamber</h2>
        <p>No registration fees.</p>
        <p>Training discount of 25%.</p>
        <p>Advertisement cost of $10 per month.</p>
    `
    dialogBox.showModal();
});
openButton2.addEventListener('click', () => {
    dialogBoxDiv.innerHTML = `
        <h2>Benefits of our chamber</h2>
        <p>No registration fees.</p>
        <p>Training discount of 15%.</p>
        <p>Advertisement cost of $15 per month.</p>
    `
    dialogBox.showModal();
});

openButton3.addEventListener('click', () => {
    dialogBoxDiv.innerHTML = `
        <h2>Benefits of our chamber</h2>
        <p>No registration fees.</p>
        <p>Free training for business staffs</p>
        <p>Free advertisement</p>
    `
    dialogBox.showModal();
});

openButton4.addEventListener('click', () => {
    dialogBoxDiv.innerHTML = `
        <h2>Benefits of our chamber</h2>
        <p>No registration fees.</p>
        <p>Training discount of 15%.</p>
        <p>Advertisement cost of $12 per month.</p>
    `
    dialogBox.showModal();
});