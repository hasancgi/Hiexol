var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

menu.addEventListener('click', function(e) {
    nav.classList.toggle('hide-mobile');
    e.preventDefault();

});

exit.addEventListener('click', function(e) {
    nav.classList.add('hide-mobile');
    e.preventDefault();
});













// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');

// // Button

// const prevBtn = document.querySelector('#prevbtn')
// const nextBtn = document.querySelector('#nextbtn')

// //counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = 'translatex(' + (-size * counter) + 'px)';

// nextBtn.addEventListener('click', () => {
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter++;

//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// prevBtn.addEventListener('click', () => {
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter--;

//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


// });

// carouselSlide.addEventListener('transitionend', () => {
//     Console.log(carouselImages[counter]);
//     if (carouselImages[counter].id === lastclone) {
//         carouselSlide.style.transition = none;
//         counter = carouselImages.length - 2;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });