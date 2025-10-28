// console.log("test");
// // single comment

// /*
// multiple 
// line
// comment
// */



// // data Type


// // String (text) (chaine de carctére )
// // console.log("hello \n world")

// console.log('Name:samir\nEmail:email@gmail.com\nAge:25\nAddress:Casablanca Morocco')


// // Numbers 
// // int

// // console.log(2e6);

// // console.log(23.56)



// // Boolean (true | false)



// // null
// //DRY (dont repeat yourself)


// // variables & constants 

// // camelCase
// // declaration
// let user="Salim";

// // static type
// // String user="Salim";

// // dynamic type 

// // update
//  user="Karim";


// // let age=20;

// // let age=22;



// // let age=20;
// // age=21;
// // let age2=age;

// // console.log(age2)


// // let number1=12;

// // let number2=10;

// // let num3=number1+number2-22;

// // console.log(num3)

// // Constante
// const PI=3.14837387 ;
// // console.log(PI);

// let firstname="Salim ";
// let lastname="ALAOUI";
// let age=20;
// let address="Casablanca , Morocco"

// console.log(firstname+ lastname)
// console.log('Name:samir\nEmail:email@gmail.com\nAge:25\nAddress:Casablanca Morocco')



// console.log(`Name:${firstname+lastname}\nAge:${age}\nAddress:${address}`)




// let City="Casablanca";

// // console.log(City.length);

// // console.log(typeof null)


// // opérateurs 3 types 
// // -Arith  + - * / %
// // -Comparaison == === < > <= >= !=
// // -Logique   &&(and) ||(or) !(not)


// // DOM (document object model)



// // let num1=20;
// // let num2=10;


// // console.log(num1%num2);
// // console.log(Math.sqrt(25))

// // let MontantHt=3e6;
// // 20%

// // Tva=mtHt*20%

// // console.log(MontantHt*1.2)


// // num1=12;
// // num2=12;

// // console.log(num1<=num2);

// // pattern 
// // REGEX

// let password="omar123@";

// console.log(password.length>=8 && password.length<=20)

// // true && true = true
// // false && true =false
// // true && false=false
// // false && false=false



// let user1="Samir";
// let user2="samir";

// console.log(user1===user2 || 20<21 || password.length>4 )
// false || true || true=true
//  true  || true = true 
//  true  || false = true 
//  false  || true = true 
//  false  || false  = false 


// let test=false;

// console.log(!test);


// let a =10;
// let b=5;
// let c=a+b
// let d=c+15-10
// let Salma=(a+b!=c-2) || "omar".length+1!=4+2 && c*2>=(a+b)*2
// let  Hamza=d*2-(c*2)>30 && !("OMAR" != "oMAR") || a*2-5!=c;


// let Akram=!(((a+b)*2)%2!==0) && !(!("test".length!="sali".length)) || b==5


// true  ||  true && true


// false && true || false=false && true=false

// true && false || true=true && true=true
// console.log(Salma)
// console.log(Hamza)
//  console.log(Akram)



// control flow 


// condition 

// if 

age=15;

// if(condition){
// traitement
      
// }

// if(age>=17 && age<=30){
//     console.log("Welcome Back !")
// }
age=17;


// let test=true;
// if(!test){
//     console.log("Welcome Back !")
// }else{
//     console.log("Sorry!")
// }



let day="2";

// if(day==1){
//     console.log("Lundi");
// }


// if(day==2){
//     console.log("Mardi")
// }


// if(day==1){
//     console.log("Lundi");
// }else if(day==2){
//     console.log("Mardi")
// }else if(day==3){
//     console.log("Mercredi");
// }else if(day==4){
//     console.log("Jeudi")
// }else{
//     console.log("Invalid Day")
// }


// Switch Case 



// switch(day){
//     case "1":{
//         console.log("Lundi");
//     }
//     case "2":{
//         console.log("Mardi");
//     }break;
//     case "3":{
//         console.log("Mercredi");
//     }
//     break;
//     case "4":{
//         console.log("Jeudi");
//     }
//     break;
//     case "5":{
//         console.log("Vendredi");
        
//     }break;
//     case "6":{
//         console.log("Samedi");
//     }break;
//     case "7":{
//         console.log("Dimanche")
//     }break;
//     default:{
//         console.log("Invalid day ");
//     }
    
// }


// age=prompt("Insert The age?");

// let result="";

// if(age>=18){
//     result="adult";
// }else{
//     result="minor";
// }


// alert("You are "+result)


// 




// let num1 = prompt("Num 1 :")
// let num2 = prompt("Num 2 :")

// let result=num1-num2
// alert(`the sum is ${result}`)





// let operator=prompt("Select : + | - | x | /|")


// let num="2000";







// let res="";

// age=20;
// ternary condition
// res=age>18?"adult":age==17?"you're close ":"sorry";
// if(age>18){
    //     res="Adult"
    // }else if(age==17){
        //     res="Mineur";
        // }else{
            // res="sorry"
            // }
            
            
            
            
            // let somme=11;
            // somme=somme+1
            // somme+=10
            // console.log(somme);
            // let sentence="hello";
            // sentence=sentence+" world"
            // sentence+="world"
            // console.log(sentence)
            
            
            
            // 
            
// loops  for ,  while , do while 

// for(let i=0;i<3;i++){
//    console.log("hello "+(+i+1))
   
// }
// i=0 0<5 i=0+1=1

// i=2 2<5 i=2+1= 3

// i=3 3<3 i=2+1 =3
// i=3 3<5 i=3+1=4
// i=4 4<5 i=4+1=5

// i=5 5<5


let sum=0;
for(let i=1;i<=10;i++){
    sum=sum+i
}


console.log(sum)

// 0 sum0  0+0;
// 1 0   0+=11
// 2 sum1  1+2=3
55