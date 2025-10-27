console.log("test");
// single comment

/*
multiple 
line
comment
*/



// data Type


// String (text) (chaine de carctére )
// console.log("hello \n world")

console.log('Name:samir\nEmail:email@gmail.com\nAge:25\nAddress:Casablanca Morocco')


// Numbers 
// int

// console.log(2e6);

// console.log(23.56)



// Boolean (true | false)



// null
//DRY (dont repeat yourself)


// variables & constants 

// camelCase
// declaration
let user="Salim";

// static type
// String user="Salim";

// dynamic type 

// update
 user="Karim";


// let age=20;

// let age=22;



// let age=20;
// age=21;
// let age2=age;

// console.log(age2)


// let number1=12;

// let number2=10;

// let num3=number1+number2-22;

// console.log(num3)

// Constante
const PI=3.14837387 ;
// console.log(PI);

let firstname="Salim ";
let lastname="ALAOUI";
let age=20;
let address="Casablanca , Morocco"

console.log(firstname+ lastname)
console.log('Name:samir\nEmail:email@gmail.com\nAge:25\nAddress:Casablanca Morocco')



console.log(`Name:${firstname+lastname}\nAge:${age}\nAddress:${address}`)




let City="Casablanca";

// console.log(City.length);

// console.log(typeof null)


// opérateurs 3 types 
// -Arith  + - * / %
// -Comparaison == === < > <= >= !=
// -Logique   &&(and) ||(or) !(not)


// DOM (document object model)



// let num1=20;
// let num2=10;


// console.log(num1%num2);
// console.log(Math.sqrt(25))

// let MontantHt=3e6;
// 20%

// Tva=mtHt*20%

// console.log(MontantHt*1.2)


// num1=12;
// num2=12;

// console.log(num1<=num2);

// pattern 
// REGEX

let password="omar123@";

console.log(password.length>=8 && password.length<=20)

// true && true = true
// false && true =false
// true && false=false
// false && false=false



let user1="Samir";
let user2="samir";

console.log(user1===user2 || 20<21 || password.length>4 )
// false || true || true=true
//  true  || true = true 
//  true  || false = true 
//  false  || true = true 
//  false  || false  = false 


// let test=false;

// console.log(!test);


let a =10;
let b=5;
let c=a+b
let d=c+15-10
let Salma=(a+b!=c-2) || "omar".length+1!=4+2 && c*2>=(a+b)*2
let  Hamza=d*2-(c*2)>30 && !("OMAR" != "oMAR") || a*2-5!=c;


let Akram=!(((a+b)*2)%2!==0) && !(!("test".length!="sali".length)) || b==5


// true  ||  true && true


// false && true || false=false && true=false

// true && false || true=true && true=true
// console.log(Salma)
// console.log(Hamza)
//  console.log(Akram)