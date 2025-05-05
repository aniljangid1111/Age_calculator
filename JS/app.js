function calAge() {
    let userdata = document.querySelector("#userdata").value;
    let userTime = document.querySelector("#userTime").value;
    let year = document.querySelector("#year");
    let month = document.querySelector("#month");
    let day = document.querySelector("#day");
    let hoursUser = document.querySelector("#hours");
    let minutesUser = document.querySelector("#minutes");
    let secondsUser = document.querySelector("#seconds");



    let currentTime = new Date();
    // let userTimeZone = new Date(userdata + " " + userTime);
    // let userTimeZone = new Date(userdata + " " + userTime);
    let userTimeZone = new Date(userdata + "T" + (userTime || "00:00"));



    if (!userdata) {
        alert("Please enter your birth date.");
        return;
    }

    let timeDifference = currentTime - userTimeZone







    let years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
    let months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    let days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    // let days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365.25) - (months * (1000 * 60 * 60 * 24 * 30.44))) / (1000 * 60 * 60 * 24));


    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((timeDifference % (1000 * 60)) / 1000);
    year.value = years;
    month.value = months;
    day.value = days;
    hoursUser.value = hours;
    minutesUser.value = min;
    secondsUser.value = sec;

}
window.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.getElementById("userdata");
    const timeInput = document.getElementById("userTime");

    // Handle date input
    dateInput.addEventListener("focus", function () {
        this.type = "date";
    });
    dateInput.addEventListener("blur", function () {
        if (!this.value) this.type = "text";
    });

    // Handle time input
    timeInput.addEventListener("focus", function () {
        this.type = "time";
    });
    timeInput.addEventListener("blur", function () {
        if (!this.value) this.type = "text";
    });
});
