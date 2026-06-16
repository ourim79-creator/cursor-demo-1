const { test } = require('node:test');
const assert = require('node:assert/strict');
const { extractEmails, isValidEmail, getValidEmails } = require('./email');

test('extractEmails extracts emails from members', () => {
    const members = [
        { name: 'John', email: 'john@example.com' },
        { name: 'Jane', email: 'jane@example.com' },
    ];
    assert.deepEqual(extractEmails(members), ['john@example.com', 'jane@example.com']);
});

test('extractEmails returns empty array for non-array input', () => {
    assert.deepEqual(extractEmails(null), []);
    assert.deepEqual(extractEmails('not array'), []);
});

test('isValidEmail validates email format', () => {
    assert.equal(isValidEmail('john@example.com'), true);
    assert.equal(isValidEmail('invalid'), false);
    assert.equal(isValidEmail(null), false);
});

test('getValidEmails returns only valid emails', () => {
    const members = [
        { name: 'John', email: 'john@example.com' },
        { name: 'Jane', email: 'invalid-email' },
        { name: 'Jim', email: 'jim@example.com' },
    ];
    assert.deepEqual(getValidEmails(members), ['john@example.com', 'jim@example.com']);
});
