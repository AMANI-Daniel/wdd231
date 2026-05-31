const dialogBox = document.querySelector('#dialogBox');
const dialogBoxText = document.querySelector('#dialogBox div');

const openButton1 = document.querySelector('#openButton1');
const openButton2 = document.querySelector('#openButton2');
const openButton3 = document.querySelector('#openButton3')


const closeButton = document.querySelector('#closeButton');
;

openButton1.addEventListener('click', () => {
    dialogBoxText.innerHTML = `Apples are more delicious fruit.`
    dialogBox.showModal();
});
openButton2.addEventListener('click', () => {
    dialogBoxText.innerHTML = `Bananas are the sweetes fruits.`
    dialogBox.showModal();
});

openButton3.addEventListener('click', () => {
    dialogBoxText.innerHTML = `Remons are not sweet fruits.`
    dialogBox.showModal();
});
closeButton.addEventListener('click', () => {
    dialogBox.close();
});