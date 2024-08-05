/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let arrX = [];
    let arrY = [];
    arrX = x.split(":");
    arrY = y.split(":");
    hours = arrY[0] * 60 * 60;
    minutes = arrY[1] * 60;
    seconds = arrY[2];
    hours -= arrX[0] * 60 * 60;
    minutes -= arrX[1] * 60;
    seconds -= arrX[2];
    return hours + minutes + seconds;
}
module.exports = getTimeDelta;
