'use strict';

let tl = gsap.timeline();

tl.from('.header', {opacity: 0, duration: 0.5})
  .from('.suggestions__header', {opacity: 0, y: 100, duration: 1}, "-=0.5")
  .from(['.suggestions__text', '.suggestions__search', '.suggestions__list'], {opacity: 0, y: 50, duration: 0.5}, "-=0.5")
  .from('.suggestions__student', {opacity: 0, duration: 1}, "-=0.5");
  

let tl2 = gsap.timeline();

tl2.from('.featured__item', {opacity: 0, duration: 1, y: 100})
    
ScrollTrigger.create({
    animation: tl2,
    trigger: '.suggestions',
    start: 'top', 
    end: 'center',
});

let tl3 = gsap.timeline();

tl3.from(['.classes__title', '.classes__subtitle'], {opacity: 0, duration: 0.5, y: 50})
   .from('.classes__cardbox', {opacity: 0, duration: 0.5, y: 100})
   .from('.classes__allclassesbox', {opacity: 0, duration: 0.5, y: 100}, "-=0.5")
    

ScrollTrigger.create({
    animation: tl3,
    trigger: '.suggestions',
    start: 'center', 
    end: 'bottom',
});

let tl4 = gsap.timeline();

tl4.from(['.webinar__title', '.webinar__subtitle'], {opacity: 0, duration: 0.5, y: 50})
   .from('.cardList', {y: 100, opacity: 0, duration: 1})
 

ScrollTrigger.create({
    animation: tl4,
    trigger: '.classes',
    start: 'center', 
    end: 'bottom',
});

let tl5 = gsap.timeline();

tl5.from(['.pricing__title', '.pricing__subtitle'], {opacity: 0, duration: 0.5, y: 50})
   .from('.pricing__cardbox', {y: 100, opacity: 0, duration: 1})
    

ScrollTrigger.create({
    animation: tl5,
    trigger: '.webinar',
    start: 'center', 
    end: 'bottom',
});

gsap.to('.pricing__link3', {duration: 1.5, scale: 1.05, repeat: -1, yoyo: true});


// function init() {

// 	let tl = gsap.timeline();

// 	tl.to(cardsContainerEl.children, {
// 		delay: 0.15,
// 		duration: 0.5,
// 		stagger: {
// 			ease: "power4.inOut",
// 			from: "right",
// 			amount: 0.1,
// 		},
// 		"--card-translateY-offset": "0%",
// 	})
// 	.to(
// 		[buttons.prev, buttons.next],
// 		{
// 			duration: 0.4,
// 			opacity: 1,
// 			pointerEvents: "all",
// 		} 
// 	);
// }

// init();