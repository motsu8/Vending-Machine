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

// slide
function slideJump(steps){
    // 現在の要素
    let currentIndex = parseInt(main.getAttribute("data-index"));
    let currentElement = sliderItems[currentIndex];

    // 次の要素
    let nextIndex = parseInt(steps);
    let nextElement = sliderItems[nextIndex];
    main.setAttribute("data-index", steps);

    // アニメーション
    let animationType = currentIndex < nextIndex ? true : false;
    animation(currentElement, nextElement, animationType);
    console.log("Jumped!")
    console.log(animationType)
    console.log(currentIndex)
    console.log(nextIndex)
}

// アニメーション
function animation(currentElement, nextElement, animationType){
    main.innerHTML = "";
    main.append(nextElement);

    extra.innerHTML = "";
    extra.append(currentElement);

    main.classList.add("expand-animation");
    extra.classList.add("delete-animation");

    if(animationType){
        sliderShow.innerHTML = "";
        sliderShow.append(extra);
        sliderShow.append(main);
    } else {
        sliderShow.innerHTML = "";
        sliderShow.append(extra);
        sliderShow.append(main);
    }
}

// btn生成
let btn = document.getElementById("btns");
for(let i=0; i < sliderItems.length; i++){
    let jumpBtn = document.createElement("button");
    let currentIndex = i+1
    jumpBtn.innerHTML = currentIndex;
    jumpBtn.addEventListener("click", ()=>{
        slideJump(currentIndex);
    });
    btn.append(jumpBtn);
}