# Дата и время

Для работы с датой и временем используются объекты Date.

## Создание

Объект создается конструктором new Date().

```javascript
    let now = new Date();
    alert( now );
```

new Date(ms) создает объект Date, с количеством миллисекунд, прошедших с 1 января 1970 года (GMT)

```javascript
    let Jan02_1970 = new Date(3600 * 24 * 1000); // прошло 24 суток с 1 января 1970 года
    alert( Jan02_1970 );
```

new Date(datestring) использует строку, читаемую с помощью Date.parse (см.далее)

new Date(year, month, date, hours, minutes, seconds, ms):
* Обязательны только первые 2 аргумента. По умолчанию date равно 1, а все остальное - 0;
* Год year состоит из 4 цифр;
* month отсчитывается с 0.

```javascript
    new Date(2011, 0, 1, 0, 0, 0, 0); // 1 января 2011, 00:00:00
    new Date(2011, 0, 1); // то же самое

    let date = new Date(2011, 0, 1, 2, 3, 4, 567);
    alert( date ); // 1.01.2011, 02:03:04.567
```
## Получение компонентов даты

* getFullYear() берет год (4 цифры) из Date
* getMonth() берет месяц (0-11)
* getDate() берет число (1-31)
* getHours(), getMinutes(), getSeconds(), getMilliseconds() без комментариев

Есть метод getYear(), реализованный в некоторых браузерах, в каких-то он возвращает 2 цифры, в каких-то - 4.
Лучше использовать getFullYear().

* getDay() берет день недели (0 - воскресенье, 6 - суббота)

Все методы выше возвращают результат для местной временной зоны.

Для взятия времени для GMT+0 (UTC) есть методы:
* getUTCFullYear();
* getUTCMonth();
* getUTCDay();
* и т.д.

getTime() возвращает количество миллисекунд, прошедших с 1 января 1970 года GMT+0.

getTimeZoneOffset() возвращает разницу между местным и UTC-временем в минутах (почему не в часах?).

```javascript
    alert( new Date().getTimezoneOffset() ); // Для GMT+3 выведет -180
```
## Установка компонентов даты

Компоненты даты и времени устанавливаются функциями с похожими названями:
* setFullYear(year [, month, date])
* setMonth(month [, date])
* setDate(date)
* setHours(hour [, min, sec, ms])
* setMinutes(min [, sec, ms])
* setSeconds(sec [, ms])
* setMilliseconds(ms)
* setTime(milliseconds) (устанавливает всю дату по миллисекундам с 01.01.1970 UTC)

Все, кроме setTime() обладают UTC-вариантом, например, setUTCHours().

setHours(), setMinutes() и setSeconds() довольно гибкие и позволяют также указать меньшие временные единицы:

```javascript
    let today = new Date();

    today.setHours(0);
    alert( today ); // сегодня, но час изменён на 0

    today.setHours(0, 0, 0, 0);
    alert( today ); // сегодня, ровно 00:00:00.
```

## Автоисправление даты

Если указать неверное значение элемента Date, включится автоисправление:

```javascript
    let d = new Date(2013, 0, 32); // 32 января 2013 ?!?
    alert(d); // ... это 1 февраля 2013!
```

Также оно само определяет, какая дата получится при ее изменении (и не нужно думать о високосном годе):

```javascript
    let d = new Date(2011, 1, 28);
    d.setDate(d.getDate() + 2);
    alert( d ); // 2 марта, 2011

    let d = new Date;
    d.setDate(1); // поставить первое число месяца
    alert( d );
    d.setDate(0); // нулевого числа нет, будет последнее число предыдущего месяца
    alert( d );

    let d = new Date;
    d.setDate(-1); // предпоследнее число предыдущего месяца
    alert( d );
```
## Преобразование к числу, разность дат

Когда Date преобразовывается в число, получается количество миллисекунд:

```javascript
    alert(+new Date) // +date то же самое, что: +date.valueOf()
```
Даты можно вычитать, они преобразуются в числа и выходит разница миллисекунд:

```javascript
    let start = new Date; // засекли время

    // что-то сделать
    for (let i = 0; i < 100000; i++) {
        let doSomething = i * i * i;
    }

    let end = new Date; // конец измерения
    alert( "Цикл занял " + (end - start) + " ms" );
```

## Бенчмаркинг

Это можно использовать в бенчмаркинге. Определяем, какая функция работает быстрее:

```javascript
    let arr = [];
    for (let i = 0; i < 1000; i++) arr[i] = 0;

    function walkIn(arr) {
        for (let key in arr) arr[key]++;
    }

    function walkLength(arr) {
        for (let i = 0; i < arr.length; i++) arr[i]++;
    }

    function bench(f) {
        let date = new Date();
        for (let i = 0; i < 10000; i++) f(arr);
        return new Date() - date;
    }

    alert( 'Время walkIn: ' + bench(walkIn) + 'мс' );
    alert( 'Время walkLength: ' + bench(walkLength) + 'мс' );
```
Во время замера может выполняться какой-нибудь другой процесс, что замедлит работу функции.
Более справедливый результат получится, если пакет тестов прогнать много раз:

```javascript
    // bench для каждого теста запустим много раз, чередуя
    let timeIn = 0,
        timeLength = 0;
    for (let i = 0; i < 100; i++) {
        timeIn += bench(walkIn);
        timeLength += bench(walkLength);
    }

    alert( 'Время walkIn: ' + timeIn + 'мс' );
    alert( 'Время walkLength: ' + timeLength + 'мс' );
```
Метод performance.now() возвращает количество миллисекунд, прошедшее от начала загрузки страницы
до вызова этого метода. Возвращаемое значение имеет значение 3 знака после запятой (микросекунды).
Не работает в IE9-.

console.time('метка') и console.timeEnd('метка') включает и выключает внутренний секундомер браузера.
Для каждой метки запускается свой секундомер, что позволяет параллельно мерить время.
При вызове console.timeEnd результат выводится в консоль, так что без нее ничего не увидеть.

```javascript
    let arr = [];
    for (let i = 0; i < 1000; i++) arr[i] = 0;

    function walkIn(arr) {
        for (let key in arr) arr[key]++;
    }

    function walkLength(arr) {
        for (let i = 0; i < arr.length; i++) arr[i]++;
    }

    function bench(f) {
        for (let i = 0; i < 10000; i++) f(arr);
    }

    // Делаем общий замер "All Benchmarks", на его фоне замеряем "walkIn" и "walkLength"
    console.time("All Benchmarks");

    console.time("walkIn");
    bench(walkIn);
    console.timeEnd("walkIn");

    console.time("walkLength");
    bench(walkLength);
    console.timeEnd("walkLength");

    console.timeEnd("All Benchmarks");
```
При замерах обязательно стоит учитывать различные оптимизации, содержащиеся в интерпретаторе JavaScript.
Современные интерпретаторы JavaScript делают массу оптимизаций, например:
* Автоматически выносят инвариант, то есть постоянное в цикле значение типа arr.length, за пределы цикла.
* Стараются понять, значения какого типа хранит данная переменная или массив, какую структуру имеет объект 
и, исходя из этого, оптимизировать внутренние алгоритмы.
* Выполняют простейшие операции, например сложение явно заданных чисел и строк, на этапе компиляции.
* Могут обнаружить, что некий код, например присваивание к неиспользуемой локальной переменной, ни на что 
не влияет и вообще исключить его из выполнения, хотя делают это редко.

## Форматирование и вывод дат

Во всех браузерах, кроме IE10-, поддерживается стандарт ECMA 402, добавляющий специальные методы для форматирования
дат:

```javascript
    let date = new Date(2014, 11, 31, 12, 30, 0);

    let options = {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    alert( date.toLocaleString("ru", options) ); // среда, 31 декабря 2014 г. н.э. 12:30:00
    alert( date.toLocaleString("en-US", options) ); // Wednesday, December 31, 2014 Anno Domini 12:30:00 PM
```
Подробнее можно узнать по ссылке: https://learn.javascript.ru/intl

Есть методы, возвращающие стандартное строчное представление, которое зависит от браузера:
toString(), toDateString(), toTimeString().

```javascript
    let d = new Date();
    alert( d.toString() ); // вывод, похожий на 'Wed Jan 26 2011 16:40:50 GMT+0300'
```
toUTCString() аналогичен toString() для формата UTC.
toISOString() возвращает дату в формате ISO (детали далее, не поддерживается IE8-):

```javascript
    let d = new Date();

    alert( d.toISOString() ); // вывод, похожий на '2011-01-26T13:51:50.417Z'
```
Если хочется больше гибкости и кросс-браузерности, можно использовать библиотеку, например, Moment.JS или
написать функции форматирования самому.

Все современные браузеры, включая IE9+, понимают даты в упрощённом формате ISO 8601 Extended.

Этот формат выглядит так: YYYY-MM-DDTHH:mm:ss.sssZ, где:

    YYYY-MM-DD – дата в формате год-месяц-день.
    Обычный символ T используется как разделитель.
    HH:mm:ss.sss – время: часы-минуты-секунды-миллисекунды.
    Часть 'Z' обозначает временную зону – в формате +-hh:mm, либо символ Z, обозначающий UTC. 
        По стандарту её можно не указывать, тогда UTC, но в Safari с этим ошибка, так что лучше указывать всегда.
    Также возможны укороченные варианты, например YYYY-MM-DD или YYYY-MM или даже только YYYY.

## Разбор строки, Date.parse

Метод Date.parse(str) разбирает строку str в таком формате и возвращает соответствующее ей количество миллисекунд. 
Если это невозможно, Date.parse возвращает NaN.

```javascript
    let msUTC = Date.parse('2012-01-26T13:51:50.417Z'); // зона UTC
    alert( msUTC ); // 1327571510417 (число миллисекунд)

    let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
    alert( ms ); // 1327611110417 (число миллисекунд)
```
О форматах для старых IE можно почитать здесь: http://msdn.microsoft.com/en-us/library/k4w173wk%28v=vs.85%29.aspx

Если нужна поддержка IE8- для современного формата, нужна библиотека es5-shim.

## Date.now

Метод Date.now возвращает дату сразу в виде миллисекунд.
Технически, он аналогичен вызову +new Date(), но в отличие от него не создаёт промежуточный объект даты, а поэтому – во много раз быстрее.
Его использование особенно рекомендуется там, где производительность при работе с датами критична. 
Обычно это не на веб-страницах, а, к примеру, в разработке игр на JavaScript.