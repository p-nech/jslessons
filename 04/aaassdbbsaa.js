/*
Создать функцию, которая проходит по строке и возвращает строку по такому образцу:

‘aaassdbbsaa’ => ‘3a2s1d2b1s2a’
*/

function compressString(str) {
    let repeatNum = 1; // Количество одинаковых символов подряд
    let result = '';

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]){
            repeatNum++;
        } else {
            result += repeatNum + str[i - 1];
            repeatNum = 1;
        }
    }

    return result + repeatNum + str[str.length - 1];
}