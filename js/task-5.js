'use strict';

const china = 100;
const chile= 250;
const australia = 170;
const india = 80;
const jamaica = 120;
let country = prompt('Введите страну для доставки:');

if (country === null) {
	console.log('Отменено пользователем!');
} else {
	switch (country.toLocaleLowerCase()) {
		case 'китай':
			console.log(`Доставка в страну ${country} будет стоить ${china} кредитов`);
			break;
		case 'чили':
			console.log(`Доставка в страну ${country} будет стоить ${chile} кредитов`);
			break;
		case 'австралия':
			console.log(`Доставка в страну ${country} будет стоить ${australia} кредитов`);
			break;
		case 'индия':
			console.log(`Доставка в страну ${country} будет стоить ${india} кредитов`);
			break;
		case 'ямайка':
			console.log(`Доставка в страну ${country} будет стоить ${jamaica} кредитов`);
			break;
		default:
			console.log(`В вашей стране доставка не доступна`);
	}
}