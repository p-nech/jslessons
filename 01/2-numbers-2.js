/*
Почему 6.35.toFixed(1) == 6.3?

Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

Например:

    alert( 1.35.toFixed(1) ); // 1.4

Но почему в примере ниже 6.35 округляется до 6.3?

    alert( 6.35.toFixed(1) ); // 6.3

Как правильно округлить 6.35?
*/


/*
Ответ: 1.35 и 6.35 являются непохожими дробями в двоичном формате и округляются по-разному.

    alert( 1.35.toFixed(20) ); //"1.35000000000000008882"
    alert( 6.35.toFixed(20) ); //"6.34999999999999964473"

    Можно попробовать умножить на 10, округлить и разделить обратно на 10:
*/

alert( Math.round(6.35 * 10) / 10 ); //"6.4"

/*
63.5 вообще не имеет погрешности, так как в двоичной системе можно нацело делить на 2. Соответственно избавляемся от конфуза с округлением.
*/
