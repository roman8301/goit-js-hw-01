'use strict';

let credits = 23580;
const pricePerDroid = 3000;
let amountDroids = prompt('Сколько дроидов Вы хотите купить:');
let totalPrice;

if (amountDroids === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = amountDroids * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
		console.log(`Вы купили ${amountDroids} дроидов, на счету осталось ${credits} кредитов`);
  }
}