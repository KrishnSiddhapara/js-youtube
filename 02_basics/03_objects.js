// Singleton   


// object literals

const mySym = Symbol("key1");

const Jsuser = {
    name:"Krishn",
    "full name":"Krishn Siddhapara",
    [mySym]:"myKey1",
    age:21,
    location:"Ahmedabad",
    email:"krishn@google.com",
    isLoggedIn:false
}


// console.log(Jsuser.email);
// console.log(Jsuser["email"])

// console.log(Jsuser["full name"])

// console.log(Jsuser[mySym]);

// console.log(typeof Jsuser[mySym])



Jsuser.email = "krishn@chatgpt.com"

// Object.freeze(Jsuser)

Jsuser.email  = "krishn@antigravity.com"


// console.log(Jsuser)


Jsuser.greeting = function(){
    console.log("Hello JS User")
}

Jsuser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`)
}



console.log(Jsuser.greeting())

console.log(Jsuser.greetingTwo())
