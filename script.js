'use strict'

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
let allDay = ""
let d = new Date()

for (let key in week) {
    let temp = ""
    temp = week[key]
    if (key == 5 || key == 6) {
        temp = "<i>" + temp + "</i>"
    }
    if (key == d.getDay()-1 || key-6 == d.getDay()) {
        temp = "<b>" + temp + "</b>"
    }
    allDay += temp + "<br>"
}

document.getElementById('days').innerHTML= allDay