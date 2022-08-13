const hourel=document.getElementById("hour")
const minel=document.getElementById("minutes")
const secel=document.getElementById("seconds")
const ampmel=document.getElementById("ampm");
function updateclock(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm="am"
    if(h>12){
        h=h-12
        ampm="PM"
    }
    h=h<10?"0"+h:h;
    s=s<10?"0"+s:s;
    m=m<10?"0"+m:m;
    hourel.innerText=h;
    minel.innerText=m;
    secel.innerText=s;
    ampmel,(innerText=ampm)
    setTimeout(()=>{
        updateclock()
    },1000)
}
updateclock()