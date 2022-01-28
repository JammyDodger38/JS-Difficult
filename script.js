// Переменные
let num = 266219
let str = num.toString()
let factorial = 1
let str2 = ""
for (let i = 0; i < str.length; i++)
{
    factorial *= Number(str[i]);
}

console.log(factorial)
str2 = (factorial ** 3).toString();
console.log(str2.substring(0, 2))