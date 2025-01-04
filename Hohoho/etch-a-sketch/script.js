
const container=document.querySelector(".container")

//set no. of grids dynamically


//16X16 grid
for(let i=0; i<100*100; i++){
    const element=document.createElement("div");
    element.classList.add("cell")
    container.appendChild(element);
}

//Select all cells
const cells=document.querySelectorAll(".cell")

//set up a clear button
const clear= document.querySelector(".clear")
clear.addEventListener("click", (event)=>{
    cells.forEach(element=>{
        element.style.backgroundColor="white";
    })
})

//change colour
container.addEventListener("mouseover", (event)=>{
    if(event.target.classList.contains("cell")){

        if(event.target.classList.contains("active"))
            event.target.style.backgroundColor="black";

        if(event.target.classList.contains("erase"))
            event.target.style.backgroundColor="white";
    }
})

//Activating drawing board using space key
document.addEventListener("keydown",(event)=>{
    if(event.key==" "){
        cells.forEach(element=>{
            element.classList.toggle("active")
        })
    }
})

//button to erase
eraser=document.querySelector(".eraser")
eraser.addEventListener("click", (event)=>{
    cells.forEach(element=>{
        element.classList.toggle("erase");
    })
})
