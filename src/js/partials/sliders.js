const slidersPage = document.querySelector(".sliders-page");
if (slidersPage) {
    
    slidersPage.onload = function () {
        const griffindor = ["src/img/golden.jpg", "src/img/gryffindor.jpg", "src/img/hermiona.jpg", "src/img/hp.jpg",
"src/img/marauders_map.jpg","src/img/ron.jpg","src/img/train.jpg"];

let griffindorContainer = document.querySelector(".griffindor-container");
let griffindorSlider = griffindorContainer.querySelector(".slider");
let griffindorIndex = 0;
griffindorSlider.style.backgroundImage = "url(".concat(griffindor[griffindorIndex], ")");
griffindorContainer.querySelector(".arrow.prev").addEventListener("click", function () {
        if(griffindorIndex === 0){
            griffindorIndex = griffindor.length - 1;
        } else {
        griffindorIndex -= 1;
        }
        griffindorSlider.style.backgroundImage = "url(".concat(griffindor[griffindorIndex], ")");
    });
griffindorContainer.querySelector(".arrow.next").addEventListener("click", function () {
    if (griffindorIndex === griffindor.length - 1) {
        griffindorIndex=0;
    } else { griffindorIndex+=1;
    }
griffindorSlider.style.backgroundImage = "url(".concat(griffindor[griffindorIndex], ")");
});

const slytherin = ["src/img/golden.jpg", "src/img/gryffindor.jpg", "src/img/hermiona.jpg", "src/img/hp.jpg",
"src/img/marauders_map.jpg","src/img/ron.jpg","src/img/train.jpg"];

const slytherinContainer = document.querySelector(".slytherin-container");
const slytherinSlider = slytherinContainer.querySelector(".slider");
const slytherinBtnsContainer = slytherinContainer.querySelector(".circle-btns");
let slytherinIndex=0;
// slytherinSlider.style.backgroundImage = "url(".concat(slytherin[slytherinIndex],")");
// slytherinSlider.style.backgroundImage = "url(" + slytherin[slytherinIndex] + ")";
slytherinSlider.style.backgroundImage = `url(${slytherin[slytherinIndex]})`;
slytherin.forEach((picture, index) => {
    const btn=document.createElement("button");
    if (index===0) {
        btn.className="active";
    }
    btn.addEventListener("click",function (event) {
        slytherinIndex=index;
        slytherinSlider.style.backgroundImage = `url(${slytherin[slytherinIndex]})`;
        const prevBtn = slytherinBtnsContainer.querySelector(".active");
        prevBtn.className="";
        btn.className="active";
    })
    slytherinBtnsContainer.appendChild(btn);
});

const ravenclaw = ["src/img/Hufflepuff-header.jpg","src/img/scarf.jpg","src/img/sedric.jpg","src/img/huff.jpg","src/img/salamander.png","src/img/huf_aesthetic.jpg"];
const ravenclawContainer = document.querySelector(".ravenclaw-container");
const ravenclawSlider = ravenclawContainer.querySelector(".slider");
let ravenclawIndex =0;
ravenclaw.forEach((picture,index)=>{
    const divImg = document.createElement('div');
    divImg.style.backgroundImage=`url(${picture})`;
    divImg.style.width=ravenclawSlider.offsetWidth +"px";
    divImg.style.height=ravenclawSlider.offsetHeight +"px";
    divImg.style.left=ravenclawSlider.offsetWidth * index +"px";
    ravenclawSlider.appendChild(divImg);
}
);
ravenclawContainer.querySelector(".next").addEventListener("click",function(event) {
    if (ravenclawIndex===ravenclaw.length-1) return;
    ravenclawIndex+=1;
    const imgs =ravenclawSlider.querySelectorAll("div");
    imgs.forEach((div,index)=>{

        let currentLeft = (+(div.style.left.replace("px", "")) - div.offsetWidth)+"px";
        div.style.left=currentLeft;
    })
});
ravenclawContainer.querySelector(".prev").addEventListener("click",function (event) {
    if (ravenclawIndex===0)return;
    ravenclawIndex-=1;
    const imgs = ravenclawSlider.querySelectorAll("div");
    imgs.forEach((div,index)=>{
        let currentLeft = (+(div.style.left.replace("px", "")) + div.offsetWidth)+"px";
        div.style.left=currentLeft;
    })
});


const hufflepuff = ["src/img/Hufflepuff-header.jpg","src/img/scarf.jpg","src/img/sedric.jpg","src/img/huff.jpg","src/img/salamander.png","src/img/huf_aesthetic.jpg"];
const hufflepuffContainer = document.querySelector(".hufflepuff-container");
const hufflepuffSlider = hufflepuffContainer.querySelector(".slider");
let hufflepuffIndex = 0;
hufflepuffSlider.style.backgroundImage = "url(".concat(hufflepuff[hufflepuffIndex], ")");
setInterval(function () {
    if (hufflepuffIndex === hufflepuff.length - 1) {
        hufflepuffIndex=0;
    } else {
        hufflepuffIndex +=1;
    }
    hufflepuffSlider.style.backgroundImage = "url(".concat(hufflepuff[hufflepuffIndex], ")");  
}, 2000);
}
}

