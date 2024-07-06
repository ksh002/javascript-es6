// 문제 1
let name="noona's fruit store"
let fruits = ["banana","apple","mango"]
let address="Seoul"

let store = {name, fruits, address}
console.log(store)

// 문제 2
let name="noona's fruit store"
let fruits = ["banana","apple","mango"]
let address="Seoul"
console.log(`제 가게 이름은 ${name} 입니다. 위치는 ${address} 에 있습니다`)

// 문제 3
let calculate = ({a, b, c}) => a + b + c
console.log(calculate({a:1,b:2,c:3}))

// 문제 4
let name="noona store"
let fruits = ["banana","apple","mango"]
let address={
    country:"Korea",
    city:"Seoul"
}

function findStore(obj){
   let {name,address:{city}} = obj
    return name=="noona store" && city=="Seoul"
}
console.log(findStore({name,fruits,address}))

// 문제 5
function getNumber(){
    let array = [1,2,3,4,5,6]   // 여기서부터 바꾸시오
    let [first, ,third, forth, ...rest] = array

    return {first,third,forth}
}
console.log(getNumber()) //  결과값 { first: 1, third: 3, forth: 4 }

// 문제 6
function getCalendar(first, ...rest) {
    return (
      first === "January" &&
      rest[0] === "Febuary" &&
      rest[1] === "March" &&
      rest[2] === undefined
    );
  }
  console.log(getCalendar("January", "Febuary", "March")); // 여기를 바꾸시오

// 문제 7
function getMinimum(){
    let a= [45,23,78]
    let b = [54,11,9]
    return Math.min(...a, ...b) // 여기를 바꾸시오
}
console.log(getMinimum())

// 문제 8
function sumNumber() {
    const sum = (a,b) => a + b;
    return sum(40, 10)
}
console.log(sumNumber())

// 문제 9
function sumNumber() {
    //여기를 바꾸시오
   
   let addNumber = (a) => (b) => (c) => a + b + c;
   return addNumber(1)(2)(3);
     
  }
  
  console.log(sumNumber())