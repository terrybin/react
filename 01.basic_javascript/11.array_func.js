// 배열 내장함수
let arr = [1, 2, 3, 4];

/**
 *  1. foreach
 *   - 배열의 모든 요소를 한번씩 순회하는 함수
 */ 
arr.forEach(x => console.log(x)); // 1, 2, 3, 4

const newArr = [];
arr.forEach(x => newArr.push(x * 2));
console.log(newArr); // [2, 4, 6, 8]

/**
 *  2. map
 *   - 원본 배열을 순회하여 연산 등을 거쳐 새로운 값을 리턴하는 함수
 */
const newArr2 = arr.map(x => {
    return x * 3;
});
console.log(newArr2); // [3, 6, 9, 12]


/**
 *  3. includes
 *   - 배열 안에 제시하는 값이 존재하는지 확인하는 함수
 */
let number = 3;
let number2 = "3"; 
console.log(arr.includes(number)); // true
console.log(arr.includes(number2)); // false, 데이터 형식이 맞지 않기 때문

/**
 *  4. indexOf
 *   - 제시하는 값이 존재한다면 그 값의 인덱스 위치를 반환하는 함수
 *   - 존재하지 않는 값이라면 -1을 리턴
 */
let temp = 3;
let temp2 = "3";
console.log(arr.indexOf(temp)); // 2, 존재하는 값이므로 인덱스의 위치 반환
console.log(arr.indexOf(temp2)); // -1, 존재하지 않는 값


/**
 *  5. findIndex()
 *   - 배열의 요소를 순회하며 조건에 만족하는 값의 index를 반환하는 함수
 *   - 동일한 value가 2개 이상인 경우 가장 처음 나온 요소의 index 반환
 */
const arr2 = [
    { color : "red" },
    { color : "blue" },
    { color : "green" },
    { color : "black" } 
]
console.log(arr2.findIndex(x => {
    return x.color === "green"; // 2
}));


/**
 *  6. find
 *   - 배열 요소를 순회하며 조건에 만족하는 첫 번째 요소를 반환하는 함수
 */
const element = arr2.find(x => {
    return x.color === "black";
})
console.log(element); // {color: 'black'}


/**
 *  7. filter
 *   - 콜백함수의 조건에 만족하는 모든 요소를 배열로 반환하는 함수
*/
console.log(arr2.filter(x => x.color === "blue"));

/**
 *  8. slice
 *   - 제시한 인덱스를 기준으로 배열을 자르는 함수
 */
let arran = [1, 2, 3];
console.log(arran.slice(0, 2)); // 0번째 인덱스부터 2번째 인덱스 전까지 출력, result: (2) [1, 2]

/**
 *  9. concat
 *   - 배열을 합치는 함수
 */
console.log(arr2.concat(arran)); // [{…}, {…}, {…}, {…}, 1, 2, 3]


/**
 *  10. sort
 *   - 원본 배열의 순서를 정렬하는 함수
 */
let chars = ["나", "다", "가"];
console.log(chars.sort()); // ['가', '나', '다']

let numbers = [0, 1, 3, 2, 10, 30, 20];
console.log(numbers.sort()); // [0, 1, 10, 2, 20, 3, 30]

// sort 정렬은 문자를 기준으로 정렬을 하므로 위의 숫자 배열은 사전순으로 정렬이 된 것
// 위와 같은 경우에는 비교함수를 만들어서 전달하면 정상 정렬이 된다.

/**
 * a와 b를 비교
 *  if a > b => a가 뒤로 이동 (+1)
 *  if a < b => a가 앞으로 이동 (-1)
 *  if a = b => 자리 유지 (0)
 *
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const compare = (a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}

// 비교함수를 전달하여 sort
numbers.sort(compare);
console.log(numbers); // [0, 1, 2, 3, 10, 20, 30]


/**
 *  11. join
 *   - 제시하는 기호 또는 공백으로 구분자를 추가하여 하나의 문자열로 합치는 함수
 */
const at = ["hey", "man", "hello", "world"];
console.log(at.join(",,")); // hey,,man,,hello,,world