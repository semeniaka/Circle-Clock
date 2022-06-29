setInterval(setClock, 1000);

const hourHend = document.querySelector('[data-hour-hand');
const minuteHend = document.querySelector('[data-minute-hand');
const secondHend = document.querySelector('[data-second-hand');

function setClock() {

	const currentDate = new Date();
	const secondsRatio = currentDate.getSeconds() / 60;
	const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
	const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

	setRotation(secondHend, secondsRatio);
	setRotation(minuteHend, minutesRatio);
	setRotation(hourHend, hoursRatio);
};

function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation', rotationRatio * 360)
};

setClock();

