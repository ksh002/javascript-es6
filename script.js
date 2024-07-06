// let name = "ksh"
// let age = 28
// let person = {name : name, age : age}
// console.log(person)
// ES6 문법 사용
// let person = {name, age}
// console.log(person)

// let bts = {
//     name : "방탄",
//     num : 7
// }
// let name = bts.name
// let num = bts.num
// ES6 문법 사용
// let {name, num} = bts;
// console.log(name, num)

// ES6 문법 ""가 아닌 `` 백틱 사용

// let arr = [1,2,3]
// let a =[arr[0]]
// let b =[arr[1]]
// let c =[arr[2]]
// console.log(a,b,c)
// ES6 문법 사용
// let [a,b,c] = arr;
// console.log(a,b,c)
// let [a, ...rest] = arr;
// console.log(a)
// let a = [1,2]
// let b = [3,4]
// let c = [5,6]
// let result = [...a,...b,...c]
// console.log(result)

// function foo () {
//     console.log("옛날 사용법")
// }

// let foo = () => {
//     console.log("ES6 요즘 함수 선언 방법")
// }
// 콜백함수가 한줄 또는, 한개만 return하게되면
// let foo = () => "하이"
// 로 입력 가능

let age = 27
let person = {
    name:"hede",
    age: 20,
    getInfo : function(){
        console.log(this.age)
    }
}
person.getInfo()
// 화살표함수는 this 사용 불가