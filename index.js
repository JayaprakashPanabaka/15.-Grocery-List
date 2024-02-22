let bgContainer = document.querySelector('.bg-container')

let headingEl = document.createElement('h1');
headingEl.textContent = 'Grocery List';
headingEl.classList.add('heading');

bgContainer.appendChild(headingEl);

let ulEl = document.createElement('ul');
ulEl.classList.add('ul-item');
bgContainer.appendChild(ulEl);


// let liEl = document.createElement('li');
// ulEl.appendChild(liEl);



let groceriesList = ['Apple', 'Boost Drink', 'Butterscotch Ice Cream', 'Tomato Ketchup', 'Dairy Milk Chocolates', 'Pasta'];

for(let groceryItem of groceriesList){
    let liEl = document.createElement('li');
    liEl.textContent = groceryItem;
    liEl.classList.add('list-item');
    ulEl.appendChild(liEl);
}

















