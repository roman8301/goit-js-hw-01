'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt('Enter your password:');

if (message === null) {
	message = 'Canceled by user!';
} else if (message === ADMIN_PASSWORD) {
	message = 'Welcome!';
} else {
	message = 'Access denied, wrong password!';
}
alert (message);