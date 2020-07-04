'use strict';

let credits = 23580;
const pricePerDroid = 3000;
let amountDroids = prompt('Enter the number of droids:');
let totalPrice;

if (amountDroids === null) {
  console.log('Canceled by user!');
} else {
  totalPrice = amountDroids * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Not enough money in the account!');
  } else {
    credits -= totalPrice;
    console.log(`You bought ${amountDroids} of droids, ${credits} of credits remained on your account`);
  }
}