var numberHours = document.querySelector('.number_hours');
var secondsBar = document.querySelector('.seconds_bar');

var numberElement = [];
var barElement = [];

for (let i = 1; i <= 12; i++) {
    numberElement.push(
        `<span style="--index:${i}"><p>${i}</p></span>`
    );
}
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

for (let i = 1; i <= 60; i++) {
    barElement.push(
        `<span style="--index:${i}"><p></p></span>`
    );
}
secondsBar.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector('.hand.hour');
const handMinutes = document.querySelector('.hand.minute');
const handSeconds = document.querySelector('.hand.second');

function getCurrentTime() {
    let date = new Date();
    let currentHours = date.getHours();
    let currntMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    handHours.style.transform = `rotate(${currentHours * 30 + currntMinutes / 2}deg)`;
    handMinutes.style.transform = `rotate(${currntMinutes * 6}deg)`;
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}

getCurrentTime();
setInterval(getCurrentTime, 1000);