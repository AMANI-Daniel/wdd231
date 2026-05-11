const year = document.querySelector('#currentyear');

const now = new Date();
year.textContent = now.getFullYear();

document.querySelector('#lastModified').innerHTML = document.lastModified;