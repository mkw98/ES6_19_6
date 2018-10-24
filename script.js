class Stopwatch {
	constructor(display) {
		this.runnong = false;
		this display = display;
		this.reset();
		this print(this.times);
	} //nie ma średnika ani przecinka
	reset() {
		this.times={
			minutes: 0,
			seconds: 0,
			miliseconds: 0	
		};
	}
	print() { //metoda, która ustawia wewnętrzny tekst elementu DOM, pod atrybutem display
		this.display.innerText = this.format(this.times);
	}
	format(times) { //metoda, która zwraca szablon, który wykorzystuje obiekt(times) podany do metody
			return
	`${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}
	//pad0 to funkcja,któa dodaje 0 do liczb jednocyfrowych
}
const stopwatch = new Stopwatch(
	document.querySelector('.stopwatch'));

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());
let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

function pad0(value) {
	let result = value.toString(); //przekształcenie wartości liczbowej w string
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}