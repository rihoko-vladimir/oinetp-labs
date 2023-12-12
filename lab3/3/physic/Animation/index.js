window.onload = function () {
    initValues();
    const stopBtn = document.querySelector("#StopBtn");
    const rotateBtn = document.querySelector("#RotateBtn");
    const moreSpeedBtn = document.querySelector("#MoreSpeedBtn");
    const lessSpeedBtn = document.querySelector("#LessSpeedBtn");
    const startBtn = document.querySelector("#StartBtn");

    const orbitClass = document.getElementById("orbit");
    const planetClass = document.getElementById("planet");
    const sunClass = document.getElementById("sun");
    const moonClass = document.getElementById("moon");
    const orbitMoonClass = document.getElementById("orbit_moon");
    const systemClass = document.getElementById("system");

    rotateBtn.addEventListener("click", () => {
        if (orbitClass.className === "orbit_animation1") {
            orbitClass.className = "orbit_animation2";
        } else {
            orbitClass.className = "orbit_animation1";
        }
        if (planetClass.className === "planet-animation1") {
            planetClass.className = "planet-animation2";
        } else {
            planetClass.className = "planet-animation1";
        }
    });

    moreSpeedBtn.addEventListener("click", () => {
        const speedValue =
            document.documentElement.style.getPropertyValue("--speed");
        let speedValueNumber = speedValue.split("s")[0];
        if (speedValueNumber > 1) {
            speedValueNumber--;
        }
        setSpeedValue(speedValueNumber);
    });

    lessSpeedBtn.addEventListener("click", () => {
        const speedValue =
            document.documentElement.style.getPropertyValue("--speed");
        let speedValueNumber = speedValue.split("s")[0];
        if (speedValueNumber < 20) {
            speedValueNumber++;
        }
        setSpeedValue(speedValueNumber);
    });

    startBtn.addEventListener("click", () => {
        sunClass.style = "animation-play-state: running";
        orbitClass.style = "animation-play-state: running";
        planetClass.style = "animation-play-state: running";
        moonClass.style = "animation-play-state: running";
        systemClass.style = "animation-play-state: running";
        orbitMoonClass.style = "animation-play-state: running";
    });
    stopBtn.addEventListener("click", () => {
        sunClass.style = "animation-play-state: paused";
        orbitClass.style = "animation-play-state: paused";
        planetClass.style = "animation-play-state: paused";
        moonClass.style = "animation-play-state: paused";
        systemClass.style = "animation-play-state: paused";
        orbitMoonClass.style = "animation-play-state: paused";
    });
};

const VARIABLES = {
    START_ROTATE: "--my-start-rotate",
    END_ROTATE: "--my-end-rotate",
};

function initValues() {
    setSpeedValue(10);
}
const speedValueElem = document.documentElement.style;

function setSpeedValue(value) {
    speedValueElem.setProperty("--speed", value + "s");
    speedValueElem.setProperty("--speed2", value + "s");
}
