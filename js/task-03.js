const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const findUl = document.querySelector('ul');
const elem = images.map(image => {
  const newLi = document.createElement('li');
  newLi.setAttribute('url', image.url);
  newLi.insertAdjacentHTML('afterbegin', newLi);
  newLi.setAttribute('alt', image.alt);
  newLi.insertAdjacentHTML('beforeend', newLi);
  findUl.append(newLi);
  return findUl;
});
console.log(findUl);
