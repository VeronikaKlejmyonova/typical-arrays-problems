exports.min = function min(array) {
    // метод Array.isArray () проверяет явл ли обЪект массивом
    // также проверяет, не является ли массив неопределенным или нулевым, если обЪект яв массивом - выдаст значение true 
    // array.length проверка явл ли массив пустым, если число больше 0 - выдаст значение true
    // если два условия будут true выполнится условие, иначе возвращает 0
    // метод Math.min() - ищет минимальное число в массиве
    // метод Math.max() - ищет максимальное число в массиве
    // метод array.reduce((a, b) => a + b) - подсчитывается сумму чисел в массиве
    if (Array.isArray(array) && array.length)
        return Math.min(...array);
    return 0;

}

exports.max = function max(array) {
    if (Array.isArray(array) && array.length)
        return Math.max(...array);
    return 0;
}

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length)
        return array.reduce((a, b) => a + b) / array.length;
    return 0;
}
