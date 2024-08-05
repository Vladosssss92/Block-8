/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */
function sortTimestamps(list) {
    let firstTime = list[0];
    let secondTime = list[1];
    let firstTimeSplit = firstTime.split(":");
    let secondTimeSplit = secondTime.split(":");
    let newArr = [];
    if (firstTime === secondTime) return console.log(list);;
    for (let i = 0; i < firstTimeSplit.length; i++) {
        if (+firstTimeSplit[i] === +secondTimeSplit[i]) continue;
        if (+firstTimeSplit[i] > +secondTimeSplit[i]) {
            newArr.push(secondTime);
            newArr.push(firstTime);
            return console.log(newArr);
        } else return console.log(list);
    }
}
sortTimestamps(["08:00:55", "01:56:01"]);
// module.exports = sortTimestamps;
