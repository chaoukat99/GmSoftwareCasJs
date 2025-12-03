
let arr=["samir","karim","ibrahim","sami"];

let [user1,user2,...user3]=arr;

let user={
    email:"omar@gmail.com",
    password:"pass123"
}


let {email,password2}=user;
console.log(password2)
// let email=user.email;
// let password=user.password;

console.log(user3);
// let user1=arr[0]
// let user2=arr[1]
// let user3=arr[2]


// Arrays

// arr.hof((el,index)=>)



// find (Search)

let users=[
    {
        id:1,
        name:"Samir",
        age:48,
        profession:"Web developer"
    },
    {
        id:2,
        name:"Sara",
        age:22,
        profession:"Web Marketer"
    },
    {
        id:3,
        name:"Ibrahim",
        age:30,
        profession:"Graphic Designer"
    },
    {
        id:3,
        name:"Karim",
        age:30,
        profession:"Graphic Designer"
    },
]


// let UserSearch=users.find((el,i)=>el.name.startsWith("Iphone"));
// console.log(UserSearch);


// HOF

// filter return []
let filteredUsers=users.filter((el,i)=>el.age==21);


// let nums=["samir","brahim","aya"];

// console.log(nums.sort())
console.log(filteredUsers);


let nums=[20,30,5,12,22,45,18];

const Pair=nums.filter((el,i)=>el%2==0)
const Impair=nums.filter((el,i)=>el%2!=0)
console.log(Pair);
console.log(Impair);
// find 

// reduce

// findindex
// let position=users.findIndex((el,i)=>el.age==22);
// console.log(position)
// map


// let names=[];
// for(let i of users){
//     names.push(i.name);
// }


let names=users.map((el,i)=>`<div>${el.name}</div>`);
console.log(names)




// Reduce 
let numbers=[10,20,30];


// let somme=numbers.reduce((prev,curr)=>prev+curr,1)
// console.log(somme)


// foreach
// let ul;
// let li;
// ul=document.createElement("ul");
// users.forEach((el,i)=>{
//     li=document.createElement("li");
//     li.innerHTML=el.name;
//     ul.append(li);

// })
// document.body.append(ul)




// find
// filter
// map
// reduce
// foreach

// ...existing code...

const products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 899.99,
        stock: 15,
        rating: 4.5
    },
    {
        id: 2,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 29.99,
        stock: 50,
        rating: 4.2
    },
    {
        id: 3,
        name: "USB-C Cable",
        category: "Electronics",
        price: 12.99,
        stock: 100,
        rating: 4.7
    },
    {
        id: 4,
        name: "T-Shirt",
        category: "Clothing",
        price: 19.99,
        stock: 45,
        rating: 4.0
    },
    {
        id: 5,
        name: "Jeans",
        category: "Clothing",
        price: 49.99,
        stock: 30,
        rating: 4.3
    },
    {
        id: 6,
        name: "Running Shoes",
        category: "Footwear",
        price: 79.99,
        stock: 20,
        rating: 4.6
    },
    {
        id: 7,
        name: "Coffee Maker",
        category: "Home Appliances",
        price: 59.99,
        stock: 12,
        rating: 4.4
    },
    {
        id: 8,
        name: "Desk Lamp",
        category: "Home Decor",
        price: 35.99,
        stock: 25,
        rating: 4.1
    },
    {
        id: 9,
        name: "Backpack",
        category: "Accessories",
        price: 44.99,
        stock: 18,
        rating: 4.5
    },
    {
        id: 10,
        name: "Headphones",
        category: "Electronics",
        price: 129.99,
        stock: 22,
        rating: 4.8
    }
];






// search a product By Name 



// filter  products By category 

// filter products By Prices [150-200]


// Get  porducts with the max Rating



// Transform Product to this 
// <div>
        // <h2>Name : TV</h2>
        // <h3>Price : 200 $</h3>
        // <span>Category : Electronics </span>
        // <span>Rating : 4.5/5</span>
        // <span>Disponible Or Out of Stock</span>
// </div>