/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
function anagram(x, y) {
    let anagramArr = [];
    let first = x.toLowerCase().split("").sort();
    let second = y.toLowerCase().split("").sort();
    if (
        first.length !== second.length ||
        first.length === 0 ||
        second.length === 0
    )
        return false;
    for (let i = 1; i < first.length; i++) {
        if (first[i] === second[i]) {
            anagramArr.push(true);
        } else anagramArr.push(false);
    }
    if (anagramArr.includes(false)) {
        return false;
    } else return true;
}

module.exports = anagram;
