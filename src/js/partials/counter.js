let clicks = 0;
function initiateClicks() {
    var clickStr = localStorage.getItem("clicks");
    if(clickStr == undefined){
        localStorage.setItem("clicks", 0);
        clicks = 0;
    }else{
        clicks = parseInt(clickStr);   
    }
    document.querySelector(".counter_value").innerHTML = clicks;
}
function plusClick(){
    clicks +=1;
    localStorage.setItem("clicks", clicks);
    document.querySelector(".counter_value").innerHTML = clicks;
}

function minusClick() {
    clicks -= 1;
    localStorage.setItem("clicks", clicks);
    document.querySelector(".counter_value").innerHTML = clicks;
}
// document.querySelector(".increment").onclick=plusClick;
document.querySelector(".decrement").onclick = minusClick;
initiateClicks();

let clicks2 = 0;
function initiateClicks2() {
    var clickStr = localStorage.getItem("clicks2");
    if(clickStr == undefined){
        localStorage.setItem("clicks2", 0);
        clicks2 = 0;
    }else{
        clicks2 = parseInt(clickStr);   
    }
    document.querySelector(".counter_value2").innerHTML = clicks2;
}

function plusClick2(){
    clicks2 +=1;
    localStorage.setItem("clicks2", clicks2);
    setTimeout(() =>{document.querySelector(".counter_value2").innerHTML = clicks2;},2000);
}

function minusClick2() {
    clicks2 -= 1;
    localStorage.setItem("clicks2", clicks2);
   setTimeout(() => {document.querySelector(".counter_value2").innerHTML = clicks2;
       
   }, 2000); 
}
document.querySelector(".increment2").onclick=plusClick2;
document.querySelector(".decrement2").onclick=minusClick2;
initiateClicks2();

// function resert() {
//     localStorage.clear();
//     document.querySelector(".counter_value2").innerHTML =0;
//     document.querySelector(".counter_value").innerHTML =0;
// }
// document.querySelector(".resert").onclick=resert;

