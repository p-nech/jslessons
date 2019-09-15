/*
Cтроковый буфер с очисткой

Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), который будет очищать текущее 
содержимое буфера:

function makeBuffer() {
  ...ваш код...
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // ""
*/

//============================================================
function makeBuffer(){
    let result = '';

    buffer = function(str){
        if (arguments.length == 0) return result;
        return result += str;
    };

    buffer.clear = function(){
        result = '';
    }

    return buffer;
}
//============================================================