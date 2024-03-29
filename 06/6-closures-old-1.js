/*
Что выведет say в начале кода?

Что будет, если вызов say('Вася'); стоит в самом-самом начале, в первой строке кода?
*/

say('Вася'); // Что выведет? Не будет ли ошибки?

var phrase = 'Привет';

function say(name) {
  alert( name + ", " + phrase );
}

/*
Ответ:

Так как Function Declaration определяется в самом начале работы скрипта, то функция выполнится и напечатает 
"Вася, undefined"
Переменная phrase существует (var тоже обрабатывается в самом начале), но в нее не успевает записаться значение.
*/