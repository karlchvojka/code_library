var xhr = new XMLHttpRequest();
xhr.open("GET", "https://esi.tech.ccp.is/latest/", false);
// Add your code below!

xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);
