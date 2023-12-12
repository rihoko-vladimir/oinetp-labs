let a = "";
let b = [];
let c = "";
let i = 0;
let res = 0;
let sign = ""; // знак операции
let finish = false;
let viv = 0;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const action = ["-", "+", "*", "/", "++", "--", "N", "log"];

const out = document.querySelector(".clc-screen");

function clearAll() {
    a = "";
    b = [];
    c = "";
    i = 0;
    sign = "";
    res = "";
    finish = "";
    out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
    if (!event.target.classList.contains("btn")) return;
    if (event.target.classList.contains("ac")) return;

    if (
        out.textContent === "Error" ||
        out.textContent === "Limit exceeded"
    ) {
        clearAll();
    }

    // получаю нажатую кнопку
    const key = event.target.textContent;
    a += key;
    out.textContent = a;
    if (out.textContent.length > 20) {
        out.textContent = out.textContent.slice(0, 20);
        a = a.slice(0, 20);
        c = c.slice(0, 20);
    }

    //если нажата клавиша 0-9 или .
    if (digit.includes(key)) {
        c += key;
    }
    if (action.includes(key)) {
        if (c !== "") {
            b[i] = c;
            i++;
            b[i] = key;
            i++;
            c = "";
        } else if (c === "") {
            b[i] = key;
            i++;
        }
    }

    if (key === "=") {
        if (
            b[i - 1] !== c &&
            c !== "+" &&
            c !== "-" &&
            c !== "/" &&
            c !== "*" &&
            c !== ""
        ) {
            b[i] = c;
            i++;
            c = "";
        }


        if (b.length === 2 && b[1] !== "++" && b[0] !== "++" && b[1] !== "--" && b[0] !== "--" && b[0] !== "N" && b[0] !== "log") {
            out.textContent = "Error";
            a = "";
            b = [];
            c = "";
            i = 0;
            sign = "";
            res = "";
            finish = false;
            throw new Error("Error");
        }

        for (let j = 0; j < b.length; j++) {
            if (b[j] === "N") {
                if (j === 0) {
                    b[j] = +b[j + 1] * -1;
                    b.splice(j + 1, 1);
                } else if (
                    !action.includes(b[j + 1])
                ) {
                    b[j] = +b[j + 1] * -1;
                    b.splice(j + 1, 1);
                }
            }
        }

        for (let j = 0; j < b.length; j++) {
            if (b[j] === "log") {
                if (b[j + 1] === "0") {
                    out.textContent = "Error";
                    a = "";
                    b = [];
                    c = "";
                    i = 0;
                    sign = "";
                    res = "";
                    finish = false;
                    throw new Error("Error");
                } else if (
                    !action.includes(b[j + 1])
                ) {
                    b[j] = Math.log(Number(b[j + 1]));
                    b.splice(j + 1, 1);
                }
            }
        }

        for (let j = 0; j < b.length; j++) {
            if (b[j] === "++") {
                if (!action.includes(b[j - 1]) && j !== 0) {
                    b[j - 1] = +b[j - 1] + +1;
                    b.splice(j, 1);
                    i = i - 1;
                    j = j - 1;
                } else if (!action.includes(b[j + 1]) && j !== b.length - 1) {
                    b[j + 1] = +b[j + 1] + +1;
                    b.splice(j, 1);
                    i = i - 1;
                    j = j - 2;
                }
            }

            if (b[j] === "--") {

                if (!action.includes(b[j - 1]) && j !== 0) {
                    b[j - 1] = +b[j - 1] - 1;
                    b.splice(j, 1);
                    i = i - 1;
                    j = j - 1;
                } else if (!action.includes(b[j + 1]) && j !== b.length - 1) {
                    b[j + 1] = +b[j + 1] - 1;
                    b.splice(j, 1);
                    i = i - 1;
                    j = j - 2;
                }
            }
        }
        for (let j = 0; j < b.length; j++) {
            if (b[j] === "/") {
                if (b[j + 1] === "0") {
                    out.textContent = "Error";
                    throw new Error();
                } else if (
                    !action.includes(b[j - 1]) &&
                    !action.includes(b[j + 1])
                ) {
                    b[j - 1] = +b[j - 1] / +b[j + 1];
                    b.splice(j, 2);
                    j--;
                } else if (
                    !action.includes(b[j - 1]) &&
                    action.includes(b[j + 1]) &&
                    !action.includes(b[j + 2]) &&
                    b[j + 1] === "-"
                ) {
                    b[j - 1] = (+b[j - 1] / +b[j + 2]) * -1;
                    b.splice(j, 3);
                    j--;
                }
            }
            if (b[j] === "*") {
                if (
                    !action.includes(b[j - 1]) &&
                    !action.includes(b[j + 1])
                ) {
                    b[j - 1] = `${+b[j - 1] * +b[j + 1]}`;
                    b.splice(j, 2);
                    j--;
                } else if (
                    !action.includes(b[j - 1]) &&
                    action.includes(b[j + 1]) &&
                    !action.includes(b[j + 2]) &&
                    b[j + 1] === "-"
                ) {
                    b[j - 1] = +b[j - 1] * +b[j + 2] * -1;
                    b.splice(j, 3);
                    j--;
                }
            }
        }

        for (let j = 0; j < b.length; j++) {
            if (b[j] === "+") {
                if (j === 0) {
                    b[j] = +b[j + 1];
                    b.splice(j + 1, 1);
                } else if (
                    !action.includes(b[j - 1]) &&
                    !action.includes(b[j + 1])
                ) {
                    b[j - 1] = +b[j - 1] + +b[j + 1];
                    b.splice(j, 2);
                    j--;
                } else if (action.includes(b[j + 1])) {
                    out.textContent = "Error";
                }
            }
            if (b[j] === "-") {
                if (j === 0) {
                    b[j] = +b[j + 1] * -1;
                    b.splice(j + 1, 1);
                } else if (
                    !action.includes(b[j - 1]) &&
                    !action.includes(b[j + 1])
                ) {
                    b[j - 1] = +b[j - 1] - +b[j + 1];
                    b.splice(j, 2);
                    j--;
                } else if (action.includes(b[j + 1])) {
                    out.textContent = "Error";
                }
            }
        }
        if (b.length > 1) {
            out.textContent = "Error";
            a = "";
            b = [];
            c = "";
            i = 0;
            sign = "";
            res = "";
            finish = false;
        } else {
            viv = +res + +b[0];
            if (viv <= 99999999999) {
                out.textContent = viv;
                if (out.textContent.length > 20) {
                    out.textContent = out.textContent.slice(0, 20);
                }
            } else {
                out.textContent = "Error";
            }

            a = viv;
            res = 0;

            b = [];
            c = "";
            i = 1;
            sign = "";
            finish = false;
            b[0] = viv;
        }
    }
};