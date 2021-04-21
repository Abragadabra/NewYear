let countDownDate = new Date("Dec 31, 2021 23:59:59");
countDownDate.getTime;

let countDownFunc = setInterval(function () {
    let now = new Date();
    now.getTime;
    
    let DifferenceTime = countDownDate - now;
    

    let days = Math.floor(DifferenceTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((DifferenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((DifferenceTime % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((DifferenceTime % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "д " + hours + "ч " + minutes + "м " + sec + "с ";

    if (DifferenceTime < 0) {
        clearInterval(countDownFunc);
        document.getElementById("timer").innerHTML = "С Новым Годом!";
    }
}, 1000)