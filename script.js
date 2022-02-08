'use strict'

let time1, time2 = ""
let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']


const ifOneSign = function(num) {
    if(num .toString().length == 1) {
        num = "0" + num
    }
    return num
}

const createDate = function() {
    let d = new Date();
    let find = ""

    time1 = "Сегодня " + days[d.getDay()] + ", "
    time1 += d.getDate() + " " + month[d.getMonth()] + " "
    time1 += d.getFullYear() + " года, "

    find = d.getHours() .toString();
    if(find.endsWith(1)) {
        time1 += d.getHours() + " час "
    } else if (d.getHours() >= 17) {
        time1 += d.getHours() + " часов "
    } else {
        time1 += d.getHours() + " часа "
    }

    find = d.getMinutes() .toString()
    if (find.endsWith(1)) {
        time1 += d.getMinutes() + " минута "
    } else if (find.endsWith(2) || find.endsWith(3) || find.endsWith(4)) {
        time1 += d.getMinutes() + " минуты "
    } else {
        time1 += d.getMinutes() + " минут "
    }
    
    find = d.getSeconds() .toString()
    if (find.endsWith(1)) {
        time1 += d.getSeconds() + " секунда "
    } else if (find.endsWith(2) || find.endsWith(3) || find.endsWith(4)) {
        time1 += d.getSeconds() + " секунды "
    } else {
        time1 += d.getSeconds() + " секунд "
    }

    time1 = "<b>" + time1 + "</b>"

    time2 = ifOneSign(d.getDate()) + "."
    time2 += ifOneSign(d.getMonth()+1) + "."
    time2 += d.getFullYear() + " - "
    time2 += ifOneSign(d.getHours()) + ":"
    time2 += ifOneSign(d.getMinutes()) + ":"
    time2 += ifOneSign(d.getSeconds())

    time2 = "<b>" + time2 + "</b>"

    document.getElementById('Time1').innerHTML = time1
    document.getElementById('Time2').innerHTML = time2
}
setInterval(createDate, 1000)



