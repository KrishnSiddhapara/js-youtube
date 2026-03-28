//const TinderUser = new Object()

const TinderUser = {}

TinderUser.id = "123abc"
TinderUser.name = "Sanny"
TinderUser.isLoggedIn = false


// console.log(TinderUser)

// const RegularUser={
//     fullname:{
//         userfullname:{
//             name:"Krishn Siddhapara",
//             designation:"full-stack developer",
//             salary:35000,
//             isLoggedin:false
//         }
//     }
// }

// console.log(RegularUser.fullname.userfullname.name)


const myobj1 = {1 :"a" , 2:"b"}
const myobj2 = {3 :"a" , 4:"b"}



const myobj3 =Object.assign({} , myobj1 , myobj2);



const myobj4 = {...myobj1 , ...myobj2}

// console.log(myobj4)



const users =[


    {
        id:1,
        email:"maa123@gmail.com"
    },
    {
        id:12,
        email:"maa1223@gmail.com"
    },
    {
        id:3,
        email:"maa1323@gmail.com"
    },
    {
        id:4,
        email:"maa1423@gmail.com"
    },
    {
        id:5,
        email:"maa1523@gmail.com"
    }
]


// console.log(users[2].email)
// console.log(myobj3)





console.log(Object.keys(TinderUser))
console.log(Object.values(TinderUser))
console.log(Object.entries(TinderUser))



console.log(Object.hasOwnProperty('name'))