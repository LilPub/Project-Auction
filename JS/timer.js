var timeDefault = 60;
time = timeDefault * 60;
time1 = timeDefault * 75;
time2 = timeDefault * 45;
time3 = timeDefault * 50;

var text = document.getElementById('timer')
var text1 = document.getElementById('timer1')
var text2 = document.getElementById('timer2')
var text3 = document.getElementById('timer3')

var timer = setInterval(countdownTimer,1000);
var timer1 = setInterval(countdownTimer1,1000);
var timer2 = setInterval(countdownTimer2,1000);
var timer3 = setInterval(countdownTimer3,1000);

function countdownTimer() {
    minutes = Math.floor(time/60);
    hour = Math.floor(minutes/60);
    minutes = minutes%60;
    seconds = time%60;
    seconds = seconds>=10? seconds:'0'+seconds;
    text.innerHTML = `${hour} : ${minutes} : ${seconds}`;

    if(time==0){
        clearInterval(timer);
        text.innerHTML = 'Hết giờ !'
    }
    time--;

}

function countdownTimer1(){
    minutes1 = Math.floor(time1/60);
    hour1 = Math.floor(minutes1/60);
    minutes1 = minutes1%60;
    seconds1 = time1%60;
    seconds1 = seconds1>=10? seconds1:'0'+seconds1;
    text1.innerHTML = `${hour1} : ${minutes1} : ${seconds1}`;

    if(time1==0){
        clearInterval(timer1);
        text1.innerHTML = 'Hết giờ !'
    }
    time1--;
}

function countdownTimer2(){
    minutes2 = Math.floor(time2/60);
    hour2 = Math.floor(minutes2/60);
    minutes2 = minutes2%60;
    seconds2 = time2%60;
    seconds2 = seconds2>=10? seconds2:'0'+seconds2;
    text2.innerHTML = `${hour2} : ${minutes2} : ${seconds2}`;

    if(time2==0){
        clearInterval(timer2);
        text2.innerHTML = 'Hết giờ !'
    }
    time2--;
}

function countdownTimer3(){
    minutes3 = Math.floor(time3/60);
    hour3 = Math.floor(minutes3/60);
    minutes3 = minutes3%60;
    seconds3 = time3%60;
    seconds3 = seconds3>=10? seconds3:'0'+seconds3;
    text3.innerHTML = `${hour3} : ${minutes3} : ${seconds3}`;

    if(time3==0){
        clearInterval(timer3);
        text3.innerHTML = 'Hết giờ !'
    }
    time3--;
}