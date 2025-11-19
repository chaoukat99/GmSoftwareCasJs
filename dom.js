
// // DOM(document object model)

// // Selection 
// // Control tag content 
// // Control attributes
// // manages Styles
// // ClassList
// // Dom traversing
// // Create Elements 
// // Events 




// // Selection 


// // Selection By Id 

// // let title=document.getElementById("titre");

// // console.log(title);


// // Selection By className 


// // let classeCls=document.getElementsByClassName("cls");

// // console.log(classeCls[0]);


// // selection By tagname 


// // let paras=document.getElementsByTagName("p");


// // console.log(paras)



// // selectionCss 

// // QuerySelector

// // let mypara=document.querySelector(".cls")
// // console.log(mypara);

// // QuerySelectorAll

// // let allCls=document.querySelectorAll(".cls");

// // console.log(allCls)




// // let myInput=document.querySelector("input[type='password']");











// let myH1=document.querySelector("#titre");


// // read content
// // innerHTML  && innerText
// // const h1text=myH1.innerHTML;

// // console.log(h1text);

// // Update content
// myH1.innerHTML="Hello gomycode";




// // let clsElms=document.querySelectorAll(".cls");
// // clsElms[clsElms.length-1].innerHTML="<b>SDHJSH@HKSHD&é123</b>";










// // js 

// // let userPrompt=prompt("Insert a text ")
// // let mypara=document.querySelector("#mypara");


// // mypara.innerHTML=userPrompt;


// // function Addition(n1,n2){
// //     return n1+n2
// // }
// // function Sous(n1,n2){
// //     return n1-n2
// // }


// // function Multi(n1,n2){
// //     return n1*n2;
// // }


// // function Division(n1,n2){
// //     if(n2!=0){
// //         return n1/n2
// //     }
// //      alert("Impossible")
// // }

// // function Calculator(num1,opearator,num2){
// //      let numOne=document.querySelector(".num1");
// //      let numTwo=document.querySelector(".num2");
// //      let op=document.querySelector(".opeartor");
// //      let result=document.querySelector(".result")
// // let maindiv=document.querySelector(".calculatrice");
// //     switch(opearator){
// //         case "+":{
// //         numOne.innerHTML=num1;
// //         op.innerHTML=opearator;
// //         numTwo.innerHTML=num2;
// //         result.innerHTML=Addition(num1,num2)


// //         }break;
// //         case "-":{
// //         numOne.innerHTML=num1;
// //         op.innerHTML=opearator;
// //         numTwo.innerHTML=num2;
// //         result.innerHTML=Sous(num1,num2)


// //         }break;
// //         case "x":{
// //         numOne.innerHTML=num1;
// //         op.innerHTML=opearator;
// //         numTwo.innerHTML=num2;
// //         result.innerHTML=Multi(num1,num2)


// //         }break;
// //         case "/":{
// //         numOne.innerHTML=num1;
// //         op.innerHTML=opearator;
// //         numTwo.innerHTML=num2;
// //         result.innerHTML=Division(num1,num2)


// //         }break;

// //         default:{
// // maindiv.innerHTML="Invalid Operator"
// //         }
// //     }
// // }










// // let p1=prompt("num1 : ")
// // let p2=prompt("operateur : ")
// // let p3=prompt("num2 : ")
// // Calculator(+p1,p2,+p3);





// // Read attributes


// let passwordInput=document.querySelector("#pass");
// // element.attributename
// console.log(passwordInput.placeholder)

// console.log(passwordInput.getAttribute("name"))


// // Update attributes

// // let mylink=document.querySelector("a");

// // console.log(mylink.href)

// // mylink.setAttribute("href","https://wa.me")


// // // Update Href 

// // mylink.href="https://gomycode.com/ma/fr/"

// // let myp=document.querySelector("p");

// // console.log(myp.className)



// // Styling 


// // 2 method 


// let h1=document.querySelector("#titre");



// // Style inline 

// // element.style.propertcss=value;

// // h1.style.color="red";


// let obj={
//     id:1,
//     name:"hello"
// }
// console.log(obj.name)


// // h1.style.backgroundColor="black";
// // h1.style.padding="20px";
// // h1.style.borderRadius="2"

// // 2éme cssText


// // h1.style.cssText="color:red;background-color:black;padding:10px;"
// // console.log(h1);



// // classList

// // contains

// // console.log(h1.classList.contains("cls"))

// // add


// document.querySelector("button").addEventListener("click",()=>{
// h1.classList.toggle("active")
// })




// // 




// const imagSrcs=["https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s"]



// // let myImage=document.querySelector("img");

// let imgButton=document.querySelector("#imgid");

// // let i=0
// // imgButton.onclick=()=>{
// //     let rand=Math.floor(Math.random()*3) 
// //     myImage.src=imagSrcs[i]
// //     i++;
// // }


// // let inp=document.querySelector("#passwordinp");

// // imgButton.onclick=()=>{
// //   if(inp.type==="text"){
// //     inp.type="password"
// //   }else{
// //     inp.type="text"
// //   }
// // }


// // let checkbox=document.querySelector("input[type='checkbox']");

// // console.log(checkbox.checked)

// let notif=100;
// notif=notif-20
// document.title=`(${notif}) Whatsapp`;
// // document.body.style.backgroundColor="black"

// // classList


// // elm.classList.add("classname")
// // elm.classList.remove("classname")
// // elm.classList.toggle("classname")


// // let switchMode=document.querySelector("#mode")

// // switchMode.onclick=()=>{
// //   document.body.classList.toggle("darkmode")
// // }



// // forms 
// // images
// // links


let para=document.querySelector("#myP");


// parentElement = select parent of an element
// children=list children elements 
// previousElementSibling = khouk lkbir
// previousElementSibling = khouk  Sghir
// console.log(para.parentElement.children);
// console.log(para.nextElementSibling);


let inp=document.querySelector("input[type='text'");

// console.log(inp.pare)

// childNodes // texte et balises

// parentNode // parent 
// nextSibling   // khouk sghir b texte
// previousSibling  // khouk lkbir b texte

// let mark = document.querySelector("mark");
// console.log(mark.previousSibling)
// console.log(mark.nextSibling)


// append vs Remove



let allLinks=document.links;

let images=document.images;

let forms = document.forms;


// let myForm=forms[0]


// console.log(myForm.age)

// 


// let inputs=document.querySelectorAll("input");

// for(let i of inputs){
//     i.required=true;
// }



let p=document.querySelector("p");

let inpText=document.querySelector("input")
// element.onclick=()=>{ code a executer   }

let btn=document.querySelector("button");

btn.onclick=()=>{
    p.innerHTML=inpText.value;
}


console.log()
