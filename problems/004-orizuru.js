/**
 *
 * Петя, Катя и Сережа делают из бумаги журавликов.
 * Вместе они сделали X журавликов. Сколько журавликов сделал каждый ребенок, если известно,
 * что Петя и Сережа сделали одинаковое количество журавликов,
 * а Катя сделала в два раза больше журавликов, чем Петя и Сережа вместе?
 * (если это возможно, если нет, то у Кати должно быть журавликов минимум в 2 раза больше, как в примере 3)
 *
 * Напишите функцию computeOrizurus(total) которая вычислит
 * сколько журавликов сделал каждый ребенок.
 *
 * Пример:
 *
 * computeOrizurus(6) === [1, 4, 1]
 * computeOrizurus(24) === [4, 16, 4]
 * computeOrizurus(11) === [1, 9, 1]
 *
 * @param {number} total общее количество сделанных журавликов
 * @returns {number[]} массив чисел, где первый элемент это количество журавликов сделанных Петей,
 * второй элемент – Катей, третий – Сережей
 */
function computeOrizurus(total) {
    let newArr = [];
    let girl = 0;
    let boy = 1;
    if (total < 12) {
        girl = total - 2;
        newArr.push(boy);
        newArr.push(girl);
        newArr.push(boy);
    }
    if (total > 11) {
        boy = Math.floor(total / 6);
        girl = total - boy * 2;
        newArr.push(boy);
        newArr.push(girl);
        newArr.push(boy);
    }
    return newArr;
}

module.exports = computeOrizurus;
