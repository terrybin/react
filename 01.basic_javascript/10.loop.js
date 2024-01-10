// for 반복
for (let i = 0; i < 6; i++) {
    console.log(`Hello ${i}`);
}

/* 상기 코드 결과값
    Hello 0
    Hello 1
    Hello 2
    Hello 3
    Hello 4
    Hello 5
*/


// while 반복
let no = 0;
while (true) {
    console.log(`${no++} time loop`);
    if (no === 10) return;
}

/* 상기 코드 결과값
    0 time loop
    1 time loop
    2 time loop
    3 time loop
    4 time loop
    5 time loop
    6 time loop
    7 time loop
    8 time loop
    9 time loop
*/


// Object의 value를 받아오기
let person = {
    name: "lee",
    age: 25,
    tall: 175
};

const personKeys = Object.values(person);

for (let i = 0; i < personKeys.length; i++) {
    console.log(personKeys[i]);
}