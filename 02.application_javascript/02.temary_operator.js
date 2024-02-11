let a = 3;

a >= 0 ? console.log("양수") : console.log("음수");


let b = [];

if (b === null) {
    console.log("null");
} else {
    console.log("not null");
}


let c = [1, 3];

c.length === 0 ? console.log("empty") : console.log("not empty");


// 다중 삼항연산자

// TODO
//  90점 이상 A+
//  80점 이상 B+
//  둘 다 아니면 F

let score = 90;
score >= 90 ? console.log("A+") : score >= 80 ? console.log("B+") : console.log("F") 

// 위와 같이 사용은 가능하나 가독성을 해치기 때문에 아래와 같이 if 문은 사용해서 풀어주는 것이 좋다
if (score >= 90) {
    console.log("A+");
} else if (score >= 80) {
    console.log("B+");
} else {
    console.log("F");
}
