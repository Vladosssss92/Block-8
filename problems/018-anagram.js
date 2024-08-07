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
    let firstWord = x.toLowerCase().split("").sort();
    let secondWord = y.toLowerCase().split("").sort();
    if (
        firstWord.length !== secondWord.length ||
        firstWord.length === 0 ||
        secondWord.length === 0
    )
        return false;
    for (let i = 1; i < firstWord.length; i++) {
        if (firstWord[i] === secondWord[i]) {
            anagramArr.push(true);
        } else anagramArr.push(false);
    }
    if (anagramArr.includes(false)) {
        return false;
    } else return true;
}

module.exports = anagram;
