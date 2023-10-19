const parent = document.querySelector(".container");
for(let i=0; i<30; i++){
    const child1 = document.createElement('div');
    child1.classList.add("container_div");
    parent.appendChild(child1);
    // console.log(child1);
}
let color_divs = document.querySelectorAll(".container_div");
// console.log(color_div);
generateColorForDiv()
function generateColorForDiv(){
    color_divs.forEach((color_div)=>{
        // console.log(color_div)
       let new_color = generateRandomColor()
        // console.log(new_color);
        color_div.style.backgroundColor = "#" + new_color;
        color_div.innerText = "#" + new_color;
    });
}

function generateRandomColor(){
    let hexChars = "0123456789abcdef"
    let colorCodeString = "";
    let colorCodeStringLength = 6;

    for(let i=0; i<colorCodeStringLength; i++){
       let randomIndex = Math.floor(Math.random() * 16);
    //    console.log(randomIndex);
       colorCodeString = colorCodeString + hexChars[randomIndex];
    //    console.log(colorCodeString);
    }
    return colorCodeString;
}
