//introduce an array to store all the elements to operated upon and a strinf to store characters temporarily before moving into the array

let arr=[];
let temp="";


//use event listener to give functionality to diffferent buttons 
//push strings of numbers or operates into an array
input=document.querySelector(".input");
input.addEventListener("click", e=>{
    let button=e.target;

    //if operand is clicked, the digit will be added to the string of the digits before (here, temp) 
    if(button.id=="operand"){
        temp+=button.textContent;
        display(temp);
    }
    
    //if it's an operator then  
    else if(button.id=="operator"){
        //if the temp is empty, this means there is no number in the temp, hence the element pushed into array before this was an operator or blank, manage that
        if(temp===""){
            arr.pop();
        }
        //push previous number into the array
        arr.push(temp);
        //push the operator into the array and empty the string for next number
        temp=button.textContent;
        arr.push(temp);
        display(temp);
        temp="";
    }

    //clear the array, reset temp and clear display
    else if(button.id=="allClear"){
        temp="";
        arr.splice(0);
        display(""); 
    }

    //if equal, then check if the last element is an operator and push accordingly, call the calculate function and clear the temp and array
    else if(button.id=="equal"){
        if(!isOperator(temp)){
            arr.push(temp);
        }
        calculate();
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

//define the calculate function which iterates thorugh the whole of  array and returns the answer, it also displays the result.
function calculate(){
    for(let i=0; i<arr.length; ){
        arr[i]=Number(arr[i]);
        i+=2;
    }

    //according to BODMAS, calculate multiply and divide first, then add and subtract
    for(let i=1; i<arr.length; i ){
        if(arr[i]==="*"){
            //push product of the number before operator and after in place of the three elements
            let product=arr[i-1]*arr[i+1];
            arr.splice(i-1, 3, product);
            //adjust the index after splicing
            i-=2;
        }
        else if(arr[i]==="/"){
            let quot=arr[i-1]/arr[i+1];
            arr.splice(i-1, 3, quot);
            i-=2;
        }
        i+=2;
    }

    for(let i=1; i<arr.length;  ){
        if(arr[i]==="+"){
            let sum=arr[i-1]+arr[i+1];
            arr.splice(i-1, 3, sum);
            i-=2;
        }
        else if(arr[i]==="-"){
            let diff=arr[i-1]-arr[i+1];
            arr.splice(i-1, 3, diff);
            i-=2;
        }
        //iterate through all the operators, all of which are on odd indices
        i+=2;
    }
    //the final answer will be an array with single element, thats our answer, display it
    display(arr[0]);
}
