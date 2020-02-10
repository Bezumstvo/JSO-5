'use strict'
/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 * 
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение

class Stringer {

    reverse(string) {
        const result = Array.from(string).reverse().join("");

        return result;
    }

    uppercaseFirst(string) {
        const result = string.replace(/\b\w/, function (letter) {
       
            return letter.toUpperCase();
          });

        return result;
    }
    
    uppercaseAll(string) {
        const result = string.replace(/\b\w/g, function (letter) {
    
            return letter.toUpperCase();
          });

        return result;
    }
}
const stringer = new Stringer();

console.log(stringer.reverse('good morning!')); // !gninrom doog
console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

exports.Stringer = Stringer;