/**
 * Уставшие от необычно теплой зимы, жители решили узнать,
 * действительно ли это самая длинная оттепель за всю историю наблюдений за погодой.
 * Они обратились к синоптикам, а те, в свою очередь,
 * занялись исследованиями статистики за прошлые годы.
 * Их интересует, сколько дней длилась самая длинная оттепель.
 *
 * Напишите функцию getSpringMeltStreak(temperature) помогающую синоптикам вычислить самый длинный период,
 * в который среднесуточная температура ежедневно превышала 0 градусов Цельсия
 *
 * Пример:
 *
 * getSpringMeltStreak([-20, 30, -40, 50, 10, -10]) === 2
 * getSpringMeltStreak([10, 20, 30, 1, -10, 1, 2, 3]) === 4
 * getSpringMeltStreak([-10, 0, -10, 0, -10]) === 0
 *
 * @param {number[]} temperature массив чисел, где каждое – среднесуточная температура в соответствующий день
 * @returns {number}
 */
function getSpringMeltStreak(temperature) {
    let days = 1;
    for (let i = 0; i < temperature.length; i++) {
        if ((temperature[i] < 0 && temperature[i + 1] > 0) || ((temperature[i] > 0) && (temperature[i + 1] > 0))) {
            days += 1;
        } 
        if ((temperature[i] > 0 && temperature[i + 1] < 0)) {
            days = 0;
        } 
        // else {
        //     days += 1;
        // }
    }
    console.log(days);
    return days;
}
getSpringMeltStreak([-20, 30, -40, 50, 10, -10]);

// module.exports = getSpringMeltStreak;
