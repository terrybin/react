// 5가지 요소 순회 및 탐색 메서드

// 1. foreach
//  - 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function(item, idx, arr) {
    console.log(idx, item * 2)
});

let doubledArr = [];
arr1.forEach(item => {
    doubledArr.push(item * 2);
})
console.log(doubledArr);

// 2. includes
//  - 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(4);
console.log(isInclude);

// 3. indexOf
//  - 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
//  - 찾으려는 값이 여러개인 경우 가장 앞에 위치한 값의 인덱스를 반환한다.
//  - 값이 존재하지 않으면 -1을 반환한다.
let arr3 = [1, 2, 3];
let arr3_1 = [1, 1, 1];
let index = arr3.indexOf(2);
let index2 = arr3_1.indexOf(1);
console.log(index);
console.log(index2);

// 4. findIndex
//  - 모든 요소를 순회하면서, 콜백함수를 만족하는 특정요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findIndex = arr4.findIndex(item => item % 2 !== 0)
console.log(findIndex);

// 5. find
//  - 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾고, 그 요소를 그대로 반환
let arr5 = [
    { name : "이정환" },
    { name : "김태형" }
]
let findResult = arr5.find(item => item.name === "김태형");
console.log(findResult);