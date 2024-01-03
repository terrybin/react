/**
 *  함수 표현식
 * 
 * 호이스팅이 되지 않기 때문에 함수를 실행할 순서가 되어야 함수를 생성한다.
 * 즉, 함수가 선언되기 전에 해당 함수를 호출할 수 없다.
 */
let hello = function() {
    return "Hello world";
}; 

const helloText = hello();
console.log(helloText);


/**
 *  함수 선언식
 * 
 * 호이스팅이 가능해서 함수가 직접적으로 실행되지 않더라도 함수를 호출할 수 있다.
 */
function helloDeclare() {
    return "Hell world";
}

console.log(helloDeclare());


// Arrow Function (화살표 함수)
let helloA = () => "Hello World22";
console.log(helloA());

let helloB = width => "width:: " + width;
console.log(helloB(10)); // width:: 10