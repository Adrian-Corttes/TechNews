//btn__menu button functionality
document.querySelector('.btn__menu').addEventListener('click',()=>{
   document.querySelector('.nav__menu').classList.toggle('show')
})

//ScrollReveal library https://scrollrevealjs.org/
ScrollReveal().reveal('.header');
ScrollReveal().reveal('.news', {delay:500});
ScrollReveal().reveal('.breaking-news', {delay:500});
ScrollReveal().reveal('.baner-news', {delay:500});