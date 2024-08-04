/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */

function getWinner(points) {
    let element = 0;
    let counter = 0;
    for (let elem of points) {
        element = elem.split("-");
        counter += element[0] - element[1];
    }
    if (counter < 0) {
        return 2;
    }
    if (counter > 0) {
        return 1;
    }
    return undefined;
}

module.exports = getWinner;
