'use strict'

//Первое подзадание

let arr = ["234", "777", "562", "432", "444", "987", "789"]

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == "2" || arr[i][0] == 4) {
        console.log(arr[i]);
    }
}

//Второе подзадание

let esNum

for (let i = 2; i < 100; i++) {
    esNum = true;
    for (let j = 2; j < 10; j++) {
        if(j != i) {
            if (i % j == 0) {
                esNum = false
                break
            }
        }
        else {continue}
    }
    if (esNum == true) {
        console.log("Делители этого числа: 1 и " + i);
    }
}