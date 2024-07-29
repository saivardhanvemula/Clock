let p = document.querySelector("p");
let hrhand = document.querySelector(".hrhand");
let minhand = document.querySelector(".minhand");
let sechand = document.querySelector(".sechand");
let time=document.querySelector(".timecontainer")
const setTime=()=>{
    const now = new Date();
    const hr = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    // console.log(min)
    sechand.style.transform = `rotate(${sec*6-90}deg)`;
    minhand.style.transform = `rotate(${min*6-90}deg)`;
    hrhand.style.transform = `rotate(${hr*30-90}deg)`;
    time.innerHTML=`${hr}:${min}:${sec} ${hr<=12 ?"AM": "PM"}`
    // console.log(hr, min, sec);
}
// setTime()
setInterval(setTime,1000);
