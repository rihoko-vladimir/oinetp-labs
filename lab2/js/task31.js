let months = [];

function setLang() {
    let lang = prompt("Введите язык (существующий, пожалуйста):"); // lang: en-US, ru-RU, de-lu and so on
    generateMonths(lang);
}

function generateMonths(lang) {
    months = [];
    const options1 = {localeMatcher: "lookup"};
    let allLanguages = [];
    const englishLangRegex = /^[a-zA-Z-]*$/;
    if (
        (lang.length === 2 ||
            lang.length === 3 ||
            lang.length === 5 ||
            lang.length === 6 ||
            lang.length === 7 ||
            lang.length === 8) &&
        englishLangRegex.test(lang)
    ) {
        allLanguages = Intl.DateTimeFormat.supportedLocalesOf(lang, options1);
    }
    if (allLanguages.length === 0) {
        alert("Выбранный язык не существует\nВместо него будет использован РУССКИЙ");
        lang = "ru-RU";
    }

    for (let i = 0; i < 12; i++) {
        const date = new Date(2023, i, 1);
        const monthName = date.toLocaleString(lang, {month: "long"});
        months.push({id: i + 1, name: monthName});


        const option = document.createElement("option");
        option.value = i + 1;
        option.text = monthName;


        const option2 = document.createElement("option");
        option2.value = i + 1;
        option2.text = monthName;
    }
    console.log(lang);
}

function getNumber() {
    const month = prompt("Введите название месяца:");
    nameToNum(month);
}

function getName() {
    const monthId = parseInt(prompt("Введите номер месяца:"));
    numToName(monthId, months);
}

function nameToNum(m) {
    let foundMonth = months.find((month) => month.name === m);
    if (foundMonth) {
        alert(`${foundMonth.name} - это ${foundMonth.id} месяц в году!`);
    } else {
        alert("Ошибка!");
    }
}

function numToName(monthId, months) {
    const foundMonth = months.find((m) => m.id === monthId);

    if (foundMonth) {
        alert(`${foundMonth.id} месяц в году - это ${foundMonth.name}!`);
    } else {
        alert("Ошибка!");
    }
}

function calculateDateDifference() {
    const startDay = parseInt(document.getElementById("startDay").value);
    const startMonth = parseInt(document.getElementById("startMonth").value);
    const startYear = parseInt(document.getElementById("startYear").value);

    const endDay = parseInt(document.getElementById("endDay").value);
    const endMonth = parseInt(document.getElementById("endMonth").value);
    const endYear = parseInt(document.getElementById("endYear").value);

    // Валидация дня начальной даты
    if (startDay < 1 || startDay > getDaysInMonth(startMonth, startYear) || isNaN(startDay)) {
        alert("Введите корректный день начальной даты!");
        return;
    }

    // Валидация месяца начальной даты
    if (startMonth < 1 || startMonth > 12 || isNaN(startMonth)) {
        alert("Выберите корректный месяц начальной даты!");
        return;
    }

    // Валидация года начальной даты
    if (isNaN(startYear) || startYear < 1900) {
        alert("Введите корректный год начальной даты!");
        return;
    }

    // Валидация дня конечной даты
    if (endDay < 1 || endDay > getDaysInMonth(endMonth, endYear) || isNaN(endDay)) {
        alert("Введите корректный день конечной даты!");
        return;
    }

    // Валидация месяца конечной даты
    if (endMonth < 1 || endMonth > 12 || isNaN(endMonth)) {
        alert("Выберите корректный месяц конечной даты!");
        return;
    }

    //Валидация года конечной даты
    if (isNaN(endYear) || endYear < 1900) {
        alert("Введите корректный год конечной даты!");
        return;
    }

    const startDate = new Date(startYear, startMonth - 1, startDay);
    const endDate = new Date(endYear, endMonth - 1, endDay);

    const timeDifference = Math.abs(endDate - startDate);
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    alert(`Разница между датами: ${daysDifference} дней`);
}

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}








