/**
 * 1. Primitive Type (원시타입)
 * 
 * 한 번에 하나의 값만 가진다.
 * 하나의 고정된 저장 공간을 이용한다.
 * 
 * 2. Non-Primitive Type (비 원시타입)
 * 
 * 한 번에 여러 개의 값을 가진다.
 * 여러 개의 고정되지 않은 동적 공간을 사용한다.
 */

let number = 10;
let number2 = "2";

console.log(number + number2); // 결과값: 102, 숫자 10과 문자 2의 덧셈이므로 문자형으로 묵시적 형변환 발생
console.log(number + parseInt(number2)); // 결과값: 12, 문자 2를 숫자로 형변환하여 덧셈