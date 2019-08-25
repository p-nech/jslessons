/*
Создать расширяемый калькулятор

Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.
*/

function Calculator(){
    let methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b
    };

    this.addMethod = function(operator, func) {
        methods[operator] = func;
    }

    this.calculate = function(str) {
        let arr = str.split(' ');
        arg1 = +arr[0];
        op = arr[1];
        arg2 = +arr[2];

        if( isNaN(arg1) || isNaN(arg2) || !methods[op] ) {
            return false;
        }

        return methods[op](arg1, arg2);
    }

}