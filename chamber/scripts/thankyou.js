const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);

console.log(myInfo.get('lname'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('stamp'));

document.querySelector('#results').innerHTML = `
<p>First name: ${myInfo.get('fname') }</p>
<p>Last name: ${myInfo.get('lname') }</p>
<p>Email: ${myInfo.get('email') }</p>
<p>Phone number: ${myInfo.get('phone') }</p>
<p>Organization name: ${myInfo.get('organization-name') }</p>
<p>Timestamp: ${myInfo.get('stamp') }</p>
`
