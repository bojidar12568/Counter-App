const div = document.querySelector('.count-box');

const B1 = document.querySelector('#B1');
const B2 = document.querySelector('#B2');
const B3 = document.querySelector('#B3');

let count = 0;

B1.addEventListener('click', () => {
  count++;
  div.innerHTML = `Count: <span id="count">${count}</span>`;
});

B2.addEventListener('click', () => {
  count--;
  div.innerHTML = `Count: <span id="count">${count}</span>`;
  if (count < 0) {
    count = 0;
    div.innerHTML = `Count: <span id="count">${count}</span>`;
  }
});       

B3.addEventListener('click', () => { 
    count = 0;
    div.innerHTML = `Count: <span id="count">${count}</span>`;
});