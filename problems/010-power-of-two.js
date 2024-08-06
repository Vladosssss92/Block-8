/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
    let count = 0;
    let number = n;
    if (n === 1) return 0;
    while (number > 1) {
        if (number % 2 === 0) {
            number = number / 2;
            count += 1;
        } else return undefined;
    }
    return count;
}

module.exports = getPower;
