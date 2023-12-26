let compareA = 3;
console.log(typeof compareA); // number, 해당 변수의 타입을 출력

// ?? : null 병합 연산자
let a; // undefined (값이 할당되지 않은 상태)
a = a ?? 10; // 값이 있다면 a, 없다면 10을 할당
console.log(a);