
let [millieseconds, seconds, minutes, hours]=[0,0,0,0];
let timeRef=document.querySelector(".timer-display");
let int=null;

document.getElementById("start-timer").addEventListener("click",()=>
{
    if(int!==null){
        clearInterval(int);
    }
    int=setInterval(displayTimer,10);
});

document.getElementById("pause-timer").addEventListener("click",()=>{
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", ()=>{
    clearInterval(int);
    [millieseconds, seconds, minutes, hours]=[0,0,0,0];
    timeRef.innerHTML="00 : 00 : 00 : 000"
});

function displayTimer(){
    millieseconds += 10;
    if(millieseconds ==1000){
        millieseconds=0;
        seconds++;
        if(seconds ==60 ){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
            }

        }
    }
    let h =hours < 10 ? "0" +hours : hours;
    let m =minutes < 10 ? "0" +minutes : minutes;
    let s =seconds < 10 ? "0" +seconds: seconds;
    let ms= millieseconds < 10 ? "00" +millieseconds: millieseconds < 100 ? "0" + millieseconds : millieseconds;

    timeRef.innerHTML=`${h}: ${m} : ${s} : ${ms}`


}