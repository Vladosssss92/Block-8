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
    let count = 1;
    for (let i = 0; i < list.length; i++) {
        if (list[i].gender === "Female") continue;
        if (list[i].age > list[i + 1].age) {
            console.log(list[i].age);
            count = i + 1;
        }
    }
    return console.log(count);
}
census([
    { age: 12, gender: "Male" },
    { age: 40, gender: "Female" },
    { age: 12, gender: "Male" },
]);
// module.exports = census;
