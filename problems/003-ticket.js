/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */

function checkTicket(number) {
    let arr = [];
    let firstNum = 0;
    let SecondNum = 0;
    arr = String(number).split("");
    for (let i = 0; i < arr.length / 2; i++) {
        firstNum += +arr[i];
    }
    for (let i = arr.length / 2; i < arr.length; i++) {
        SecondNum += +arr[i];
    }
    if (firstNum === SecondNum) {
        return true;
    }
    return false;
}
module.exports = checkTicket;
