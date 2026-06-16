const { isValidEmail, normalizeEmail } = require('./validator.js');

function extractEmails(members) {
    if (!Array.isArray(members)) {
        console.error('extractEmails: 입력값이 배열이 아닙니다.');
        return [];
    }
    return members.map(member => member.email);
}

function getValidEmails(members) {
    return extractEmails(members).filter(isValidEmail);
}

function uniqueValidEmails(members) {
    return [...new Set(getValidEmails(members))];
}

module.exports = { extractEmails, isValidEmail, normalizeEmail, getValidEmails, uniqueValidEmails };
