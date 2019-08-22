/*
Сделать первый символ заглавным

Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
*/

function ucFirst(str){
    return (str) ? str[0].toUpperCase() + str.substr(1) : '';
}

alert( ucFirst('вася') );