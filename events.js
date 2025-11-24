// element.oneventName=()=>{
    
// }



// element.addEventListener("eventname",()=>{
    

// })



// CLick  && dblClick

let h1=document.querySelector("h1");



h1.addEventListener("dblclick",()=>{
    alert("double Click");
})
// h1.onclick=()=>{

//     alert("H1 clicked");
// }


// h1.addEventListener("click",()=>{
//     alert("H1 clicked");
// })

// Inputs (focus blur input)



let input=document.querySelector("input");

let btn = document.querySelector("button");
input.addEventListener("focus",()=>{
    console.log("Input Focused");
})


input.addEventListener("blur",()=>{
    console.log("Input Blured");
})

let max= document.querySelector("span");
input.addEventListener("input",()=>{
   
    if(max.innerHTML==0){
        alert("you can add more caracters");
        let finalStr=input.value.slice(0,-1);
        input.value=finalStr;
        input.blur();
    }else{

        max.innerHTML=30-input.value.length;
    }
   
})


// Mouse (move enter leave)


// btn.addEventListener("mousemove",(ev)=>{
//     console.log(ev);
// })

// btn.addEventListener("mouseenter",()=>{
//     console.log("mouse Entered");
// })
// btn.addEventListener("mouseleave",()=>{
//     console.log("mouse Leave");
// })


// Keyboard 

// window.addEventListener("keydown",(ev)=>{

//     console.log(ev.key)
// })



// contextMenu


window.addEventListener("contextmenu",()=>{
    console.log("menu opened");
})
// scroll
window.addEventListener("scroll",()=>{
    console.log(window.scrollY);
})

// submit