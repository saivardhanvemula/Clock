let p = document.querySelector("p");
let hrhand=document.querySelector(".hrhand")
let minhand=document.querySelector(".minhand")
let sechand=document.querySelector(".sechand")
let i=0
setInterval(() => {
    const now = new Date();
    const hr = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    hrhand.style.transform=`rotate(${i}deg)`
    i=i+1
    console.log(hr,min,sec)
}, 1000);
