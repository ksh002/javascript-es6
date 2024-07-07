let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
];
// map 문제
let mapA = names.map(item => {
    console.log(item.toUpperCase())
})
let mapB = names.map(item => {
    let parts = item.split(" ")
    console.log(parts[0])
})
let mapC = names.map(item => {
    let parts = item.split(" ")
    let initial = parts.map(item => item.charAt(0)).join("");
    return initial; 
})
console.log(mapC)

// filter 문제
let filterA = names.filter(item => item.includes("a"))
console.log(filterA)
let filterB = names.filter(item => /(.)\1/.test(item));
console.log(filterB)

// some 문제
let someA = names.some(item => item.length >= 20)
console.log(someA)
let someB = names.some(item => {
    let parts = item.split(" ")
    parts.pop()
    return parts.some(item => item.toLowerCase().includes("p"))
})
console.log(someB)

// every 문제
let everyA = names.every(item => item.length >= 20);
console.log(everyA)
let everyB = names.every(item => item.includes('a'))
console.log(everyB)

// find 문제
let findA = names.find(item => item.length >= 20)
console.log(findA)
let findB = names.find(item => {
    parts = item.split(" ")
    return parts.slice(1, parts.length -1);
})
console.log(findB)


// findIndex 문제
let findIndexA = names.findIndex(item => item.length >= 20)
console.log(findIndexA)
let findIndexB = names.findIndex(item => {
    parts = item.split(" ")
    return parts.slice(1, parts.length -1)
})
console.log(findIndexB)