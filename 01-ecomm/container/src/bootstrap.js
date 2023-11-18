import { mount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log('Container');

mount(document.querySelector('#prod-products'));
cartMount(document.querySelector('#prod-cart'));