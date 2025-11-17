
// DOM(document object model)

// Selection 
// Control tag content 
// Control attributes
// manages Styles
// ClassList
// Dom traversing
// Create Elements 
// Events 




// Selection 


// Selection By Id 

// let title=document.getElementById("titre");

// console.log(title);


// Selection By className 


// let classeCls=document.getElementsByClassName("cls");

// console.log(classeCls[0]);


// selection By tagname 


// let paras=document.getElementsByTagName("p");


// console.log(paras)



// selectionCss 

// QuerySelector

// let mypara=document.querySelector(".cls")
// console.log(mypara);

// QuerySelectorAll

// let allCls=document.querySelectorAll(".cls");

// console.log(allCls)




// let myInput=document.querySelector("input[type='password']");











let myH1=document.querySelector("#titre");


// read content
// innerHTML  && innerText
// const h1text=myH1.innerHTML;

// console.log(h1text);

// Update content
myH1.innerHTML="<b style='color:red'>Hello gomycode</b>";












// js 

// let userPrompt=prompt("Insert a text ")
// let mypara=document.querySelector("#mypara");


// mypara.innerHTML=userPrompt;


function Addition(n1,n2){
    return n1+n2
}
function Sous(n1,n2){
    return n1-n2
}


function Multi(n1,n2){
    return n1*n2;
}


function Division(n1,n2){
    if(n2!=0){
        return n1/n2
    }
     alert("Impossible")
}

function Calculator(num1,opearator,num2){
     let numOne=document.querySelector(".num1");
     let numTwo=document.querySelector(".num2");
     let op=document.querySelector(".opeartor");
     let result=document.querySelector(".result")
let maindiv=document.querySelector(".calculatrice");
    switch(opearator){
        case "+":{
        numOne.innerHTML=num1;
        op.innerHTML=opearator;
        numTwo.innerHTML=num2;
        result.innerHTML=Addition(num1,num2)


        }break;
        case "-":{
        numOne.innerHTML=num1;
        op.innerHTML=opearator;
        numTwo.innerHTML=num2;
        result.innerHTML=Sous(num1,num2)


        }break;
        case "x":{
        numOne.innerHTML=num1;
        op.innerHTML=opearator;
        numTwo.innerHTML=num2;
        result.innerHTML=Multi(num1,num2)


        }break;
        case "/":{
        numOne.innerHTML=num1;
        op.innerHTML=opearator;
        numTwo.innerHTML=num2;
        result.innerHTML=Division(num1,num2)


        }break;

        default:{
maindiv.innerHTML="Invalid Operator"
        }
    }
}










let p1=prompt("num1 : ")
let p2=prompt("operateur : ")
let p3=prompt("num2 : ")
Calculator(+p1,p2,+p3);