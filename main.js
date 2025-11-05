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
//     }break;
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


// let sum=0;
// for(let i=1;i<=10;i++){
//     sum=sum+i
// }


// console.log(sum)

// 0 sum0  0+0;
// 1 0   0+=11
// 2 sum1  1+2=3
// 55




// break 
// continue

// for(let i=0;i<10;i++){

//     console.log("Hello "+i);

//     if(i==3){
//         break;
//     }
    
// }


let users=""
//continue 


// for(let i=0;i<10;i++){
//     if(i==4){
//         continue;
//     }
//     console.log("hello "+i)
// }




// let date=new Date();

// console.log(date.toLocaleTimeString());
// while
// let f=0;
// while(f<5){
//   console.log("Hello "+Math.floor(Math.random()*200000));
//  f++;
//  }
// let conf=confirm("do you want more ? ")

//  while(conf){


//     console.log("Hello "+Math.floor(Math.random()*200000))
      
//       conf=confirm("Are you sure; ");
// }


// do{

// }while(condition)

// let conf2=confirm("are you sure ? "); // false

/* do{

    console.log("Hello"+Math.floor(Math.random()*200000))

    conf2=confirm("are you sure ? ");
}while(conf2)
*/


// let UserName="Basem";
// console.log(UserName.toLowerCase())
// console.log(UserName[0]+UserName[4])
// console.log(UserName[0]);
// console.log(UserName[1]);
// console.log(UserName[2]);
// console.log(UserName[3]);
// console.log(UserName[4]);

// B
// a
// s
// e
// m






// function CustomLength(text){
// let lg=0;

// let test=true
// do{
//     if(text[lg] !=undefined){
//         lg++;
       
//     }else{
//       test=false;
//     }
// }while(test)


//     console.log(lg);
// }



// CustomLength("basem")



// Lists []


// let users2=["User1",2000,true,undefined,null,20.5,30>40,"User2","User3","User4"]
// console.log(users2[users2.length-1])
// console.log(users2[7][1]);

// let uSername=["bassem"];
// console.log(uSername[0][3])

// CRUD  

// let mutidimensionsarr=[]

// 

// let companies=[
// ["test@gmail.com","test2@gmail.com","test3@gmail.com"],
// ["test@gmail.com","test5@gmail.com","test3@gmail.com"],
// ["test@gmail.com","test2@gmail.com","test3@gmail.com"]

// ]

// console.log(companies[1][1])

// let str="hello";

// console.log(str[str.length-1]);


// let emails = ["test@gmail.com","test5@gmail.com","test3@gmail.com"];



// for( let i=0;i<emails.length;i++){
//     console.log(emails[i]);
    
// }

// for(let i in emails){
//     console.log(emails[i]); // i =0 , 1 , 2 ...
// }
// let names=["salim","hakim","brahim"];

// console.log(names);
// names[2]="karim"
// console.log(names);
// new values 
// names[names.length]="Sara";
// names[names.length]="Khalid";
// console.log(names);
// for(let i of names){
//     console.log(i) // i =salim , hakim , ...
// }



// let nums=[12,3,15,20,-33,2,17];

// let pairs=[];

// let Impairs=[];
// names[names.length]="Sara";
// let f=10;



// let arr2=["test1","test2","test3",29];

// let str="";

// for(let i of arr2){
//     str=str+i+" "
// }
// console.log(str); // "test1 test2 test3"
// console.log(arr2[0]+arr2[1]+arr2[2])



// let names=["samir","salim","Karim","hamid","brahim","Karim","amir","hakim"];
// let searchedValue=prompt("Insert the value : ");
// let inc=0;


// for(let i of names){
//     if(i==searchedValue){

//         inc+=1; // inc=inc+1;
//     }
// }

// console.log(`le nom ${searchedValue} est répeté ${inc} fois`)



// console.log("") // le nom samir se répéte 0 fois 



// let f=false;
// for(let i of names){
//     if(i=="karim"){
//        f=true;
//     }
// }


// if(f){
//     console.log("karim exist");
    
// }else{
//     console.log("Karim does not exist");
    
// }



// let str=prompt("insert a text");
// let v=0;
// for(let i=0;i<str.length;i++){
//     if(str[i]=="a" || str[i]=="i" || str[i]=="e"  ){
//        v++;
//     }
// }



// console.log("V="+v);





// methodes 


// insert 
// push

// let nums=[1,2,3];
// nums.push(100,23,24,"jdkjhqsdk");

// nums.unshift(5,6,7)


// for(let i of nums){
//     console.log(i);
// }



// pop 

// users=users.filter(el=>el!="user2"); HOF
//  users.pop(); // supprime le dernier 
// let deletedValue=users.pop();


// console.log("Delete value "+deletedValue)
// users.shift();  // supprime le premier 


users=["user1","user2","user3"];
// let search = prompt("insert a value");

// console.log(users.join(" "));
// console.log(users)

//  console.log(users);


// f=0;

// for(let i of users){
//     if(i=="test"){
//         f++
//     }
// }
 




// let user =["mr","Samir"];
// console.log(user.join(" "))

let str="hello world";
// str=str.replace("world","");
// let strArr=str.split(" ")
// strArr.pop();
// console.log(strArr.join(" "))
// console.log(str.split(" "));
// console.log(str)




let arr2=["test1","test2","test3","test4"];

// let pos=arr2.indexOf("testttt")
// arr2[pos]="wiam"
// console.log(pos)
// let newStr=arr2.join(" ");
// newStr=newStr.replace("test2","Wiam");

// console.log(newStr.split(" "));
// arr2[1]="WIAM";

// console.log(arr2);


let arr1=[20,30,40];
let arr3=[50,60,70];

// let newArr2=arr1.concat(arr3,arr2);

// console.log(newArr2)



// push (insert f lekher)
// pop (delete f lekher)
// unshift(insert f luwel )
// includes (check if exist true / false )
// shift (delete f luwel)
// join   (['f','d','s'].join(" ") // 'f d s' ktjm3hom)
//indexOf("text") // ktjib lik la position dial le texte
//concat // ktjma3 les valeurs dial les tableaux

  

let userss=["hello","world"];

// prompt Menu 
// 1-Lister les élements
// 2-insert new element 
// 3-Update element
// 4-delete element
// 5-Exit 


// 1- Prompt 
// let option =prompt("Menu:\n1-Lister les élément\n2-...")

//  Do while

     // -switch case 



    //  1 - 


    // let times=prompt("combien d'élement ")


    // for(let i=0;i<times;i++){
    //     valueToInsert=prompt("Insert the value number "+(i+1))
    //     userss.push(valueToInsert);
    // }


    // console.log("new array : "+userss)


    // 1-Lister

    // for(let i of userss){
    //     console.log(i);
    // }


    // 3- 

let newArr=[];

// MENU
let products =[];


// Afficher un menu 


// CRUD



// 1- Inputs 
// 2-Traitement 
// 3- Output 



// 1- show products 


// for(let i of products){
//     console.log(i);
    
// }




// Join 

// console.log(products.join("---"))



// Insert Product
// let newProduct=prompt("Insert the new Product");


//     if(newProduct!=null && newProduct.length>3){  

//     products.push(newProduct);
//     console.log(products);
// }else{
//     alert("Sorry try to insert a real product ");
// }




// Update

// 1-get the old product

// 2- get the new product value
// 3- update 




// let old=prompt("insert the value to update ?");


// if(products.includes(old)){
//     // Update 

//     // get position / index 
//     let index=products.indexOf(old);
//     // get new value;
//     let newValue=prompt("Insert the new Value :");

//     // Update
//     products[index]=newValue;
//     alert("Product Updated");
    

// }else{
//     alert("Unfound Product");
// }


// const tab=['1',"3",'10'];

// tab[2]="Test"//





// Delete

// let valueToDelete=prompt("Insert the value to delete");

// if(products.includes(valueToDelete)){
//     // Delete

//     products=products.join(" ").replace(" "+valueToDelete," ").split("  ");
//     console.log(products);


 

// }else{
//     alert("Insert a valid value ");
// }





// let tab=["hello","world","web"];
// console.log(tab)
// tab=tab.filter(el=>el!="hello");
// console.log(tab)

// tab=tab.join(" ");

// console.log
//  tab=tab.replace("world ","");
// console.log(tab)
// console.log(tab.split(" "))

// let stop=true;

// do{
//     let Text=`Menu\n1- show products \n2- Insert product\n3- Update product \n4- Delete Product\n5- Exit `

// // Inputs 
//     let promptMenu=prompt(Text);
//     if(promptMenu!=null){

//         switch(promptMenu){
//             case "1":{
//                 // show
//                 if(products.length>0){
    
//                     alert(products.join("---"))
//                 }else{
//                     alert("No data")
//                 }
        
//             }break;
//             case "2":{
//                 // insert
//                 let newProduct=prompt("Insert the new Product");
        
        
//                      if(newProduct!=null && newProduct.length>3){  
        
//                           products.push(newProduct);
//                           console.log(products);
//                      }else{
//                         alert("Sorry try to insert a real product ");
//                         }
        
//             }break;
        
//             case "3":{
//                 // update 
        
//                 let old=prompt("insert the value to update ?");
        
        
//                    if(products.includes(old)){
//             // Update 
        
//             // get position / index 
//                   let index=products.indexOf(old);
//             // get new value;
//                   let newValue=prompt("Insert the new Value :");
        
//             // Update
//                   products[index]=newValue;
//                   alert("Product Updated");
            
        
//                 }else{
//                          alert("Unfound Product");
//                       }
//             }break;
//             case "4":{
//                 // delete 
//          let valueToDelete=prompt("Insert the value to delete");
        
//         if(products.includes(valueToDelete)){
//             // Delete
        
//           for(let i of products){
//             if(i!=valueToDelete){
//                 newArr.push(i);
//             }
//           }
        
//           products=newArr;
        
//           console.log(products);
        
        
         
        
//         }else{
//             alert("Insert a valid value ");
//         }
        
        
        
//             }break;
        
//             case "5":{
//                 stop=false;
//                 alert("BY BY ")
//             }
//         }
//     }else{
//         stop=false;
//     }
// }while(stop)




// Math Object 


// let number=25;
// console.log(Math.sqrt(number));




// const PI=Math.PI;
// console.log(PI);

// ceil / floor
// let num=20.4;
// console.log(Math.round(num))


// console.log(Math.max(12,20,5,-10,-30))
// console.log(Math.min(12,20,5,-10,-30))

let numss=[20,12,23,5,8,1,-5];

// console.log(Math.max(...numss));

// let name=["samir","hajib"];

// let newArr2=[...name,"salim","brahim"]

// console.log(newArr2)




// let arrr=[["one"],["three"]];
// // let val=prompt("insert a ne w value");

// arrr=[...arrr,["he","llo"]];

// console.log(arrr)







// console.log(Math.tan(0))

// console.log(Math.sin(0)/Math.cos(0))


// RANDOM
// let randomNumber=Math.floor(Math.random()*100000000);

// console.log(randomNumber)


// let rand=

// console.log(_.random(, 9000));
// Guess a number 


// let  entry=prompt("Insert A number between 0 and 5");
// let computerNumber=_.random(0,5);

// if(entry==computerNumber){
//     alert(`You win because computer choose ${computerNumber}`)
// }else{
//     alert(`You lost because the computer choose ${computerNumber}`);
// }


let choices =["👊","🖐️","✌️"]

// let userchoice=prompt("Choose (✌️,👊,🖐️)");


let computerChoice=_.random(0,2);

console.log(choices[computerChoice])

// Conditions 