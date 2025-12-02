// BROWSER OBJECT MODEL 



// alert prompt confirm print

// setTimeout setInterval



// setTimeout(()=>{
//    },timeout)
// setTimeout(()=>{
// alert("hello world")
// },5e3)




// setInterval(()=>console.log("hello"),1000)
let date;

// setInterval(()=>{
// date=new Date();
//     document.querySelector("span").innerHTML=date.toLocaleTimeString()
// },1000)

// location

// history

// open 
// Browser 

// document 
// navigator


// localstorage



// navigator


// let i =10;

// const T=setInterval(()=>{
//     if(i==0){
//         clearInterval(T);
//         location.href="https://www.google.com"
//     }
// document.querySelector("span").innerHTML=i;
// i--;

// },1000)


// location
// protocol



// reload

// href

// console.log(location.href)

// Redirection
// setTimeout(()=>{
//  location.href="https://www.google.com"   
// },5000)




    // AJAX

    // XMLHttpRequest

    // fetch 

// Location

// console.log(window.location.href);
// Redirection 

// setTimeout(()=>{
// window.location.href="https://www.google.com"
// },10000)


// SOAP
// let h1=document.querySelector("h1");

// h1.onclick=()=>{
//     document.querySelector("a").click();
// }



// History


// -back   

// forward 

// go  - (back)   +(forward)

// history.go(-2)




    // window.open("https://gomycode.com/ma/fr/","_blank","width:400px")



// Localstorage vs cookies 
 


// SetItem 

// key => value 

// localStorage.setItem("user","samir");
// localStorage.setItem("user","karim");





// Get 
localStorage.getItem("user") // key




let button=document.querySelectorAll("button");


// if(localStorage.getItem("color") !=null){
//     document.body.style.background=localStorage.getItem("color")
// }



// button[0].onclick=()=>{
//    document.body.style.background="black";
//    localStorage.setItem("color","black");
// }

// button[1].onclick=()=>{
//    document.body.style.background="white";
//    localStorage.setItem("color","white");
// }
// let i=0;
// i=localStorage.getItem("click")
// button[0].onclick=()=>{
//      ++i;
//      localStorage.setItem("click",i);
// }

let obj={
    id:1,
    name:"samir"
}

//obj -> JSON

let json=JSON.stringify(obj);
localStorage.setItem("user",json)

//JSON -> obj

let json2='{"id":1,"username":"samir"}';

console.log(JSON.parse(json2))
// let newJsObject=JSON.parse(json)


// localStorage.setItem("data",obj)
// delete one element by key

// localStorage.removeItem("user")
// clear localstorage

// localStorage.clear()


let quiz=[
    {
        question:"HTML Stands for ?",
        answers:["Hypertext model language","Hypertext Markup language","kjdhjs"],
        correctAnswer:"Hypertext Markup language"
    },
    {
        question:"HTML Stands for ?",
        answers:["Hypertext model language","Hypertext Markup language","kjdhjs"],
        correctAnswer:"Hypertext Markup language"
    },
    {
        question:"HTML Stands for ?",
        answers:["Hypertext model language","Hypertext Markup language","kjdhjs"],
        correctAnswer:"Hypertext Markup language"
    },
]


let btns=document.querySelectorAll("button");

let span=document.querySelector("span")
btns[0].onclick=()=>{
   span.innerHTML=quiz[0].question;
}