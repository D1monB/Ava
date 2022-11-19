let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let btn = document.querySelector('.header__btn');
let links = Array.from(menu.children);

function addClass() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	btn.classList.toggle('active');
}

burger.addEventListener('click', addClass);

function removeClass() {
	burger.classList.remove('active');
	menu.classList.remove('active');
	btn.classList.remove('active');
}

btn.addEventListener('click', removeClass);

links.forEach((el) => {
	el.addEventListener('click', removeClass);
});