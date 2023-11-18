import faker from 'faker';

export function mount(el) {
  const cartText = `You have ${faker.random.number()} items in cart`;

  el.innerText = cartText;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');
  if (el) mount(el);
}