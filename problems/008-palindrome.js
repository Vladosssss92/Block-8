/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function isPalindrome(value) {
    let result = false;
    let arrResult = [];
    for (let i = 0; i < value.length; i++) {
        if (value[i] === value[value.length - i - 1]) {
            arrResult.push("true");
        } else arrResult.push("false");
    }
    if (!arrResult.includes("false")) {
        result = true;
        return result;
    } else return result;
}
module.exports = isPalindrome;
