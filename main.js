//task 1
// const firstItem = document.querySelector('#myList li');
// console.log(firstItem.textContent.trim());

//task 2
// const heading = document.querySelector('h1');
// if (heading) {
//     heading.remove();
// }
// const myList = document.getElementById('myList');

// if (myList) {
//     const newItem = document.createElement('li');
//     newItem.textContent = 'TITAN RTX';
//     myList.appendChild(newItem);
// }

//!task 3
// const heading = document.querySelector('h1');
// if (heading) {
//     heading.textContent = 'GeForce 20 Series';
// }
// const primaryElements = document.querySelectorAll('.primary');
// primaryElements.forEach(i => {
//     i.style.color = '#ebebeb';
// });

//?task 4
// const primaryElements = document.querySelectorAll('.primary');

// primaryElements.forEach(i => {
//     console.log(i);
// });

//task 5
const listItems = document.querySelectorAll('li');

listItems.forEach(li => {
    li.classList.add('item');
});
console.log(listItems);
