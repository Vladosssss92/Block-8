/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    let citizenAge = 0;
    let numberInList = 0;
    let arrMale = [];
    list.filter((user, i) => {
        if (user.gender === "Male") {
            arrMale.push({ age: user.age, index: i + 1 });
        } else numberInList = undefined;
    });
    for (let elem of arrMale) {
        if (elem.age > citizenAge) {
            citizenAge = elem.age;
            numberInList = elem.index;
        }
    }
    return numberInList;
}

module.exports = census;
