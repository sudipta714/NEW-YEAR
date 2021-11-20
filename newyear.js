const seconds=document.getElementById('seconds');
const mins=document.getElementById('mins');
const hours=document.getElementById('hours');
const days=document.getElementById('days');
const container=document.getElementById('container');
const currentYear=new Date().getFullYear();

const timeNextYear=new Date(`January 01 ${currentYear+1} 00:00:00`);
function updateContainer(){
    const timeNow=new Date();
    const result=timeNextYear-timeNow;
    const s=Math.floor(result/1000)%60;// / % is for converting the time from milisec to sec
    const m=Math.floor(result/1000/60)%60;
    const h=Math.floor(result/1000/60/60)%24;
    const d=Math.floor(result/1000/60/60/24);
    seconds.innerHTML=s;
    mins.innerHTML=m;
    hours.innerHTML=h;
    days.innerHTML=d; 
}
setInterval(updateContainer,1000);//it is used to call a function periodically after a set interval of time
