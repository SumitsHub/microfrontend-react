import faker from 'faker';

const cartText = `You have ${faker.random.number()} items in cart`;

document.querySelector('#dev-cart').innerText = cartText;
