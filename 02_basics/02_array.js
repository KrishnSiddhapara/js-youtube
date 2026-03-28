const Marvel_heroes = ["Ironman" , "Thor" , "Spiderman"]

const Dc_heroes = ["Superman" , "Flash" , "Batman"]


// Marvel_heroes.push(Dc_heroes)

// console.log(Marvel_heroes)


// const AllHeroes = Marvel_heroes.concat(Dc_heroes)

// console.log(AllHeroes)



// const All_New_Heroes = [...Marvel_heroes , ...Dc_heroes]

// console.log(All_New_Heroes)

const nArr = [1,2,3,4,[5,6,7,8] ,9,10,11,[12,[15],13],14]


const new_sorted_array = nArr.flat(Infinity)

// console.log(new_sorted_array)



console.log(Array.isArray("Krishn"));


console.log(Array.from("Krishn"));
console.log(Array.from({name: " Kishna"}));


let score1 = 100
let score2 = 100
let score3 = 100


console.log(Array.of(score1,score2,score3))
