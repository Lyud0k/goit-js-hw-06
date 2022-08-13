const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const inUl = document.querySelector('ul');

const elem = ingredients.map(ingredient => {
  const newLi = document.createElement('li');
  newLi.textContent = ingredient;
  newLi.classList.add('item');
  console.log(newLi);
  inUl.append(newLi);
  return inUl;
});

console.log(inUl);