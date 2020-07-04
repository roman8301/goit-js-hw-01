'use strict';

let input;
let total = 0;

do {
	input = prompt('введите число');

	if (input === null) {
		console.log('отменено пользователем');
		break;
	}

	input = Number(input);
	const notANumber = Number.isNaN(input);
	if (notANumber) {
		console.log('Было введено не число');
		continue;
	}
	total += input;
} while (true);

alert(`Общая сумма ${total}`);