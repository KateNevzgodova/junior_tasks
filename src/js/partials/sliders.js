const griffindor = ["src/img/golden.jpg", "src/img/gryffindor.jpg", "src/img/hermiona.jpg", "src/img/hp.jpg",
"src/img/marauders_map.jpg","src/img/ron.jpg","src/img/train.jpg"];

var griffindorContainer = document.querySelector(".griffindor-container");
var griffindorSlider = griffindorContainer.querySelector(".slider");
var griffindorIndex = 0;
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


// <div class="slytherin-container">
//     <div class="container slider-container">
//         <div class="slider"></div>
//         <div class="circle-btns"></div>
//     </div>
// </div>

var hufflepuff = ["src/img/Hufflepuff-header.jpg","src/img/scarf.jpg","src/img/sedric.jpg","src/img/huff.jpg","src/img/salamander.png","src/img/huf_aesthetic.jpg"];
var hufflepuffContainer = document.querySelector(".hufflepuff-container");
var hufflepuffSlider = hufflepuffContainer.querySelector(".slider");
var hufflepuffIndex = 0;
hufflepuffSlider.style.backgroundImage = "url(".concat(hufflepuff[hufflepuffIndex], ")");
setInterval(function () {
    if (hufflepuffIndex === hufflepuff.length - 1) {
        hufflepuffIndex=0;
    } else {
        hufflepuffIndex +=1;
    }
    hufflepuffSlider.style.backgroundImage = "url(".concat(hufflepuff[hufflepuffIndex], ")");  
}, 3000);