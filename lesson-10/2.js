'use strict'
/**
 * Задача 2.
 *
 * Напишите функцию calculate(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске calculate() последовательно запускает коллбек-функции из аргументов.
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Первая коллбек-функция не принимает параметров.
 *
 * Функция calculate() должна вернуть результат выполнения последней коллбек-функции из цепочки.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов функции calculate() не является функцией;
 * - Любая функция из аргументов не вернула значение.
 */

// Решение
const  validateFunction = function(n) {
    if (typeof n !== 'function') {
        throw new Error(`The argument ${n} (${typeof n}) is not a Function.`);
    }
}
const  validateUndefined = function(n) {
    if (typeof n === 'undefined') {
        throw new Error(`Function returned undefined.`);
    }
}

const calculate = (...rest)=> {
    let result='';

    rest.forEach((func,index) => {
        validateFunction(func);
        if (index > 0)
        {
            result = func(result);
        }
        else{
            result = func();
        }
        validateUndefined(result);
    })
    
    return result;
}

const result = calculate(
    () => {
        return 7;
    },
    prevResult => {
        return prevResult + 4;
    },
    prevResult => {
        return prevResult * 5;
    },
);

console.log(result); // 55

exports.calculate = calculate;
