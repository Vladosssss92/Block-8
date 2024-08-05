/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    let arrSymbol = "abcdefghijklmnopqrstuvwxyz".split("");
    let decrypt = [];
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === " ") {
            decrypt.push(" ");
        }
        for (let j = 0; j < arrSymbol.length; j++) {
            if (secret[i] === arrSymbol[j]) {
                if (j >= arrSymbol.length - 1) {
                    decrypt.push(arrSymbol[0]);
                } else {
                    decrypt.push(arrSymbol[j + 1]);
                }
            }
        }
    }
    return decrypt.join("");
}

module.exports = decrypt;
