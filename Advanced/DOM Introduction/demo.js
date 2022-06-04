let h1Element = document.getElementsByTagName('h1')[0];
console.log(h1Element);
let secondLi = document.getElementsByTagName('li')[1];
secondLi.innerHTML += " - DONE";

// Hide element
const element = document.getElementById('hidden element');
element.style.display = 'none';