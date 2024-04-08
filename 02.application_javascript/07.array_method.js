// 6가지의 요소 조작 메서드

// 1. push
//  - 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1= [1, 2, 3];
arr1.push(4, 5, 6, 7);

// 2. pop
//  - 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// 3. shift
//  - 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// 4. unshift
//  - 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength = arr4.unshift(0);

// push, pop 은 맨 뒤의 요소에 추가, 제거 하는 것이므로 인덱스 이동이 없지만
// shift, unshift는 맨 앞에 요소를 추가, 제거하므로 인덱스의 이동이 발생하여 위의 push, pop보다 실행이 느리다.


// 5. slice
//  - 배열의 특정 범위를 잘라내서 새로운 배열로 반환
//  - slice의 경우 기존 배열을 잘라서 새로운 배열로 반환하더라도 기존의 배열은 영향을 받지 않는다.
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 2번 인덱스부터 5번 인덱스 전까지 slice
let sliced2 = arr5.slice(2); // 2번부터 뒤의 인덱스 모두
let sliced3 = arr5.slice(-1); // 뒤에서부터 1개의 인덱스 추출

// 6. concat
//  - 두 개의 서로 다른 배열을 붙여 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatArr = arr6.concat(arr7);
