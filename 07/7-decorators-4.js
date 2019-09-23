/*
Тормозящий (throttling) декоратор
важность: 5

Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.

Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.

Давайте рассмотрим реальное применение, чтобы лучше понять это требование и выяснить, откуда оно взято.

Например, мы хотим отслеживать движения мыши.

В браузере мы можем объявить функцию, которая будет запускаться при каждом движении указателя и получать его местоположение. Во время активного использования мыши эта функция запускается очень часто, это может происходить около 100 раз в секунду (каждые 10 мс).

Мы бы хотели обновлять информацию на странице при передвижениях.

…Но функция обновления update() слишком ресурсоёмкая, чтобы делать это при каждом микродвижении. Да и нет смысла делать обновление чаще, чем один раз в 100 мс.

Поэтому мы обернём вызов в декоратор: будем использовать throttle(update, 100) как функцию, которая будет запускаться при каждом перемещении указателя вместо оригинальной update(). Декоратор будет вызываться часто, но передавать вызов в update() максимум раз в 100 мс.

Визуально это будет выглядеть вот так:

    Для первого движения указателя декорированный вариант сразу передаёт вызов в update. Это важно, т.к. пользователь сразу видит нашу реакцию на его перемещение.
    Затем, когда указатель продолжает движение, в течение 100 мс ничего не происходит. Декорированный вариант игнорирует вызовы.
    По истечению 100 мс происходит ещё один вызов update с последними координатами.
    Затем, наконец, указатель где-то останавливается. Декорированный вариант ждёт, пока не истечёт 100 мс, и затем вызывает update с последними координатами. В итоге окончательные координаты указателя тоже обработаны.

Пример кода:

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано

P.S. Аргументы и контекст this, переданные в f1000, должны быть переданы в оригинальную f.
*/

function throttle(f, ms){
	return function(){
		//
	}
}

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано