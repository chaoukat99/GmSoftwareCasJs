// // element.oneventName=()=>{
    
// // }



// // element.addEventListener("eventname",()=>{
    

// // })



// // CLick  && dblClick

// let h1=document.querySelector("h1");



// h1.addEventListener("dblclick",(e)=>{
//     alert(" Click");
//     console.log(e);
// })
// // h1.onclick=()=>{

// //     alert("H1 clicked");
// // }


// // h1.addEventListener("click",()=>{
// //     alert("H1 clicked");
// // })

// // Inputs (focus blur input)



// let input=document.querySelector("input");

// let btn = document.querySelector("button");
// input.addEventListener("focus",()=>{
//     console.log("Input Focused");
// })


// input.addEventListener("blur",()=>{
//     console.log("Input Blured");
// })

// let max= document.querySelector("span");
// input.addEventListener("input",()=>{
   
//     if(max.innerHTML==0){
//         alert("you can add more caracters");
//         let finalStr=input.value.slice(0,-1);
//         input.value=finalStr;
//         input.blur();
//     }else{

//         max.innerHTML=30-input.value.length;
//     }
   
// })


// // Mouse (move enter leave)


// let AlertCls=document.querySelector(".cls");


// btn.addEventListener("mouseleave",(ev)=>{
//     // AlertCls.style.display="block";
// })

// // btn.addEventListener("mouseenter",()=>{
// //     console.log("mouse Entered");
// // })
// // btn.addEventListener("mouseleave",()=>{
// //     console.log("mouse Leave");
// // })

// const colors = [
//     "red",
//     "blue",
//     "green",
//     "yellow",
//     "orange",
//     "purple",
//     "pink",
//     "brown",
//     "gray",
//     "black",
//     "white",
//     "cyan",
//     "magenta",
//     "lime",
//     "navy",
//     "teal",
//     "olive",
//     "maroon",
//     "coral",
//     "salmon",
//     "khaki",
//     "gold",
//     "indigo",
//     "violet",
//     "turquoise",
//     "peachpuff",
//     "lightblue",
//     "lightgreen",
//     "lightyellow",
//     "lightcoral",
//     "darkred",
//     "darkgreen",
//     "darkblue",
//     "darkorange",
//     "darkviolet",
//     "crimson",
//     "forestgreen",
//     "royalblue",
//     "steelblue",
//     "slateblue"
// ];
// // Keyboard 
 


// window.addEventListener("keydown",(e)=>{

//    if(e.key=="s" || e.key=="S"){
//     console.log("nadi")
//    }
//  })



// // contextMenu


// window.addEventListener("contextmenu",()=>{
//     console.log("menu opened");
// })
// // scroll

// let Line=document.querySelector(".line");

// let random;
// let val=10;
// // window.addEventListener("scroll",()=>{
// //     // val=window.scrollY;
// //     // Line.style.width=val+"px"
// //     // random=Math.floor(Math.random()*colors.length-1)
  
// //     // document.body.style.background=colors[random]
// //     console.log()
// // })

// // submit




// // Events 





// let toTop=document.querySelector(".top");


// toTop.addEventListener("click",()=>{
//     window.scrollTo(0,0)
// })





// window.addEventListener("scroll",()=>{
//     if(window.scrollY>=809){
//         toTop.style.visibility="visible";
//     }else{
//         toTop.style.visibility="hidden";

//     }
// })


// window.addEventListener("selectstart",()=>{
//     console.log("selection")
// })






let link = document.querySelectorAll("a");

// E.preventDefault();


// link.onclick=(e)=>{
// e.preventDefault();

// console.log("Maendk fin tmshi")
// }


// link[1].addEventListener("click",(e)=>{
// e.preventDefault();
// })


// window.addEventListener("selectstart",(e)=>{
// e.preventDefault();
// })
// window.addEventListener("contextmenu",(e)=>{
// e.preventDefault();
// console.log("sorry")
// })




// submit

let form=document.forms[0]
// form validation


// fullname [8-14] carcters
// email starts with  fullname and  has @

// password [10-12]
// confirm password equal to password

form.addEventListener("submit",(ev)=>{
    ev.preventDefault();//block event
    
 
    if(form.email.value.includes("@")){
        console.log("Good job")
        form.submit();
    }else{
        console.log("sorry you can't submit ")
    }



}) 