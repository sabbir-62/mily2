let bg = document.querySelector(".bg");
let lodingText = document.querySelector(".lodingText");
let load = 0;
let p = 100;

setInterval(function(){

    p--;
    load++;
   if(load<101 && p>=0){
    lodingText.innerText = `${load}%`;
    bg.style.filter = `blur(${p}px)`;
   }
   if(load==101){
       lodingText.style.opacity = 0;
   }

}, 500);
