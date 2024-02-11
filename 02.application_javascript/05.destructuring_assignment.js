// 배열의 비구조화 할당
let arr = ["one", "two", "three"];
let [one, two, three] = arr; // => let [one, two, three] = ["one", "two", "three"];
console.log(one, two, three);

// 객체의 비구조화 할당
let object = {
    one: "one",
    two: "two",
    three: "three"
};

let o = object.one;
let t = object.two;
let th = object.three;

console.log(o, t, th);