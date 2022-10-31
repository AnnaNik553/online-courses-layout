console.clear();

const buttons = {
	prev: document.querySelector(".btn--left"),
	next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");

// ----------------

let videoBtns = document.querySelectorAll('.webinar__videobtn');

videoBtns.forEach(function(videoBtn) {
	videoBtn.addEventListener('click', function(e) {
		let el = e.currentTarget;
		let card = el.parentElement.parentElement;

		if (card.classList.contains('current--card')){
			let webinarFront = card.querySelector('.webinar__front');
			webinarFront.classList.add('webinar__mainfront_none');
			let video = card.querySelector('video');
			video.setAttribute('controls', 'controls');
			video.play();
		}
	})
})

// ------------------------

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
	let video = document.querySelector('.current--card').querySelector('video');
	video.load();
    video.removeAttribute('controls');
	let webinarFront = document.querySelector('.current--card').querySelector('.webinar__front');
    webinarFront.classList.remove('webinar__mainfront_none');


	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	const previousCardEl = cardsContainerEl.querySelector(".previous--card");
	const nextCardEl = cardsContainerEl.querySelector(".next--card");

	swapCardsClass();

	removeCardEvents(currentCardEl);

	function swapCardsClass() {
		currentCardEl.classList.remove("current--card");
		previousCardEl.classList.remove("previous--card");
		nextCardEl.classList.remove("next--card");

		currentCardEl.style.zIndex = "50";

		if (direction === "right") {
			previousCardEl.style.zIndex = "20";
			nextCardEl.style.zIndex = "30";

			currentCardEl.classList.add("previous--card");
			previousCardEl.classList.add("next--card");
			nextCardEl.classList.add("current--card");

		} else if (direction === "left") {
			previousCardEl.style.zIndex = "30";
			nextCardEl.style.zIndex = "20";

			currentCardEl.classList.add("next--card");
			previousCardEl.classList.add("current--card");
			nextCardEl.classList.add("previous--card");

		}
	}
}

function updateCard(e) {
	const card = e.currentTarget;
	const box = card.getBoundingClientRect();
	const centerPosition = {
		x: box.left + box.width / 2,
		y: box.top + box.height / 2,
	};
	let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
	gsap.set(card, {
		"--current-card-rotation-offset": `${angle}deg`,
	});
}

function resetCardTransforms(e) {
	const card = e.currentTarget;
	gsap.set(card, {
		"--current-card-rotation-offset": 0,
	});
}

function initCardEvents() {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	currentCardEl.addEventListener("pointermove", updateCard);
	currentCardEl.addEventListener("pointerout", (e) => {
		resetCardTransforms(e);
	});
}

initCardEvents();

function removeCardEvents(card) {
	card.removeEventListener("pointermove", updateCard);
}