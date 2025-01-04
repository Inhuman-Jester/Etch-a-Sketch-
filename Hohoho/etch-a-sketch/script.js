//select container
const container=document.querySelector(".container");

//set no. of grids dynamically
const gridSize=document.querySelector(".gridSize");

gridSize.addEventListener("click", (event)=>{
    let size=0;
    while(size<1 || size>100){
        size=prompt("Enter the pixel size from 0-100");
    }
    run(size);
})


function run(size){

    //clear all of the divs inside to reset the whole board and give board with new dimensions
    container.textContent=""

    //16X16 grid
    for(let i=0; i<size*size; i++){
        const element=document.createElement("div");
        element.classList.add("cell");
        container.appendChild(element);
    }

    //Select all cells
    const cells=document.querySelectorAll(".cell");

    //dynamically allocating no. of grids
    cells.forEach(element=>{
        element.style.flexBasis=`calc(100% / ${size})`;
    })

    //change colour
    container.addEventListener("mouseover", (event)=>{
        if(event.target.classList.contains("cell")){

            if(event.target.classList.contains("active")){
                if(event.target.classList.contains("write"))
                    event.target.style.backgroundColor="black";

                if(event.target.classList.contains("erase"))
                    event.target.style.backgroundColor="white";
            }
        }
    })

    //Activating drawing board using enter key
    document.addEventListener("keydown",(event)=>{
        if(event.key=="Enter"){
            cells.forEach(element=>{
                element.classList.toggle("active");
            })
        }
    })

    //select buttons to apply features
    const btn=document.querySelector(".btn");
    btn.addEventListener("click", event=>{

        //add functionality to write button
        if(event.target.className==="write"){
            cells.forEach(element=>{
                element.classList.toggle("write");
            })
        }

        //add functionality to erase button
        if(event.target.className==="erase"){
            cells.forEach(element=>{
                element.classList.toggle("erase");
            })
        }

        //add functionality to clear button
        if(event.target.className==="clear"){
            cells.forEach(element=>{
                element.style.backgroundColor="white";
            })
        }
    })
}