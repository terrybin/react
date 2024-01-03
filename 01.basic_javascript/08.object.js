// 객체 선언 방식
let person = new Object();
let person2 = {}; // 객체 리터럴 방식, 많이 선호됨



let main = {
    key: 123, // property
    key2: "undo"
};

console.log(main) // {key: 'value', key2: 'value2'}
console.log(main.key); // result : 123 (key에 해당하는 value를 가져온다.)
console.log(main["key"]); // result : 123



let funcObj = {
    name: "ket",
    age: 25
};

function getPropertyValue(key) {
    return funcObj[key];
};

console.log(getPropertyValue("name"));



let addObj = {
    name: "terry",
    age: 31
};

addObj.location = "Korea";
addObj["gender"] = "man";

console.log(addObj); // {name: 'terry', age: 31, location: 'Korea', gender: 'man'}

// property delete

// 1. 아래와 같은 방법은 객체와 프로퍼티의 연결만 끊고 메모리는 그대로 소모하고 있는 상태
delete addObj["name"];
console.log(addObj); // {location: 'Korea', gender: 'man'}

// 2. 아래와 같이 작성하면 프로퍼티를 메모리에서 날릴 수 있다.
delete addObj.age
addObj.age = null;
console.log(addObj);



const objCallFunc = {
    name: "lee",
    age: 25,
    say: function() {
        // this: 자기 자신 객체(objCallFunc)를 의미
        console.log(`Hello My name is ${this.name}`)
    }
}

objCallFunc.say(); // Hello My name is lee


// 객체 안에 프로퍼티가 존재하는지 확인
console.log(`name : ${"name" in objCallFunc}`) // true
console.log(`name : ${"bob" in objCallFunc}`) // false
