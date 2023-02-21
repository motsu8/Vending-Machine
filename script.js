// slider
let slider = document.getElementById("slider");
let sliderItems = document.querySelectorAll("#slider .slider-data .slider-item");

let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

sliderShow.classList.add("col-12", "d-flex", "flex-nowrap");

main.append(sliderItems[0]);
sliderShow.append(main);
sliderShow.append(extra);
slider.append(sliderShow);

main.setAttribute("data-index", "0")

// btn生成
let btn = document.getElementById("btns");
for(let i=0; i < sliderItems.length; i++){
    let jumpBtn = document.createElement("button");
    jumpBtn.innerHTML = i+1;
    btn.append(jumpBtn);
}

// slideJump
function slideJump(){

}

console.log(sliderItems);