/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
    let newArr = password.split("");
    let validPasswordArr = [];
    let validUpperCase = false;
    let validNumber = false;
    if (password.length > 6) {
        validPasswordArr.push(true);
    } else validPasswordArr.push(false);

    for (let elem of newArr) {
        if (elem === elem.toUpperCase() && !Number(elem)) {
            validUpperCase = true;
        }
        if (Number(elem)) {
            validNumber = true;
        }
    }
    validPasswordArr.push(validUpperCase, validNumber);
    if (validPasswordArr.includes(false)) {
        return false;
    } else return true;
}

module.exports = validatePassword;
