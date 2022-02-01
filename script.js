'use strict'

let str = prompt("Введите строку:");

const method = function (arg) {
    if (arg == (arg*1)) {
        alert("Введеные данные не являются строкой");
    } else if (typeof arg === 'string') {
        arg = arg.trim();
        if (arg.length > 30) {
            arg = arg.substring(0, 30) + "...";
        }
        console.log(arg);
    }
}

method(str);