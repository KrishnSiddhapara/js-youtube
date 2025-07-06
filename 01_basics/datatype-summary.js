// primitive

// 7 types : string , Number , boolean , null , undefined , symbol , bigInt


//Reference (Non-Premitive)

//functions , objects , arrays

const score = 100
const scoreValue = 100.4

const IsLoggedIn = false 

const outsideTemp = null 



let userEmail;  //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);


 const BigNumber = 212121211113333n


 const heros = ["shaktiman",  "naagraj" , "doga"]


 let myObj ={

    name: "Krishn",
    age : 22
 }

//  console.log(myObj)

const myFunction = function(){

    console.log("hello world");
}


//console.log(typeof anotherId)


//+++++++++++++++++++++ Stack and Heap Property ++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non - primitive)

let myyoutubename = "krishnsiddhaparadotcom";

let anothername = myyoutubename
anothername = "chaaanecode"
//console.log(anothername)
//console.log(myyoutubename)

let userOne = {
        email : "user@gmail.com", 
        upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "krishn@google.com"


console.log(userOne.email)
console.log(userTwo.email)