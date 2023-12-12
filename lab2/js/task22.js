let userName = "Владимир"
let hobby = "Языки"
let favColor = "Фиолетовый"

function myInfo() {
    const userName1 = prompt("Имя:", userName);
    const hobby1 = prompt("Хобби:", hobby);
    const favColor1 = prompt("Любимый цвет:", favColor);
    displayNewData(userName1, hobby1, favColor1)
}

function changeInfo() {
    if (confirm("Хотите ввести новое имя?")) {
        userName = prompt("Новое имя:", userName);
    }
    if (confirm("Хотите ввести новое хобби?")) {
        hobby = prompt("Новое хобби:", hobby);
    }
    if (confirm("Хотите ввести новый любимый цвет?")) {
        favColor = prompt("Новый цвет:", favColor);
    }
    displayNewData(userName, hobby, favColor)
}


function displayNewData(userName, hobby, favColor) {
    let message = `Ваши измененные данные:\n\tВаше имя: ${userName}!\n\t Ваше хобби: ${hobby}\n\t Ваш любимый цвет: ${favColor}`
    alert(message.replace(/\t/g, " "))
}

