import menu from '../menu.json';
import createMarcup from '../js/markup.hbs';

const menuListRef = document.querySelector('.js-menu');
menuListRef.innerHTML = createMarcup(menu);
