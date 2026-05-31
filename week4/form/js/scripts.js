const getString = window.location.search;
// console.log(getString);

const myInfo = new URLSearchParams(getString);

console.log(myInfo)
document.querySelector('#results').innerHTML = `
<p>Person's name is: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Person's Telephone: ${myInfo.get('phone')}</p>
<p>Person's email: ${myInfo.get('email')}</p>
<p>Person's ordinance: ${myInfo.get('ordinance')}</p>
<p>Person's endowment date: ${myInfo.get('date')}</p>
<p>Person's location: ${myInfo.get('location')}</p>
`