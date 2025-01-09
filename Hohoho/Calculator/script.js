//introduce an array to store all the elements to operated upon and a strinf to store characters temporarily before moving into the array

let arr=[];
let temp="";


//use event listener to give functionality to diffferent buttons
input=document.querySelector(".input");
input.addEventListener("click", e=>{
    let last=arr[arr.length-1];
    let button=e.target;

    if(button.id=="operand"){
        temp+=button.textContent;
        display(temp);
    }
    
    else if(button.id=="operator"){
        if(isOperator(last)){
            arr.pop();
        }
        arr.push(temp);
        arr.push(button.textContent);
        temp="";
    }

    else if(button.id=="allClear"){
        temp="";
        arr.splice(0);
        display(""); 
    }

    else if(button.id=="equal"){
        if(isOperator(last)){
            arr.pop();
        }
        arr.push(temp);
        if(isOperator(last)){
            arr.pop();
        }
        //calculate()
        arr.splice(0);
        temp="";
    }
})

//include function to display stuff

function display(string){
    let show=document.querySelector(".display")
    show.textContent=string;
}

//to check if element is an operator or blank

function isOperator(string){
    if(string==="" || string==="+" || string==="-" || string==="*" || string==="/")
        return true;    
}