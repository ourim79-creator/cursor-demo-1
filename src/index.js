const { extractEmails, isValidEmail, getValidEmails } = require('./email');

const users = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
    { name: 'Jim', email: 'jim@example.com' },
];

console.log(extractEmails(users));
console.log(getValidEmails(users));
console.log(users.map(user => ({
    name: user.name,
    email: user.email,
    valid: isValidEmail(user.email),
})));
