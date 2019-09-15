/*
Глобальный счётчик

Что выведут эти вызовы, если переменная currentCount находится вне makeCounter?
*/

var currentCount = 1;

function makeCounter() {
  return function() {
    return currentCount++;
  };
}

var counter = makeCounter();
var counter2 = makeCounter();

alert( counter() ); // ?
alert( counter() ); // ?

alert( counter2() ); // ?
alert( counter2() ); // ?

/*
Ответ:

1 2 3 4

makeCounter() возвращает функцию как объект со своим лексическим окружением, и эти объекты записываются в counter и counter2.

В итоге в каждом своем лексическом окружении эти функции будут находить переменную currentCount в общем для них объекте window.
*/