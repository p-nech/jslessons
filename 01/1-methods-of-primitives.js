/*
Can I add a string property?

Consider the following code:

let str = "Hello";

str.test = 5;

alert(str.test);
How do you think, will it work? What will be shown?
*/

/*
= Мой ответ - нельзя задать свойство объекту-обертке для примитива и прочитать его, так как обертка удалится тут же после обращения к свойству. Поэтому вернется ошибка.

= Правильный ответ - вызовет ошибку при указании "use strict", без него - undefined. В строгом режиме даже нельзя изменить свойство "обертке", в обычном обертка удалится.
*/