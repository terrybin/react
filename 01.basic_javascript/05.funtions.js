// 아래 두 코드는 중복된 기능 -> 중복되는 기능을 하나의 함수로 구현
let width1 = 10;
let height1 = 20;
let area1 = width1 * height1;
console.log(area1);

let width2 = 30;
let height2 = 15;
let area2 = width2 * height2;
console.log(area2);

// =====================================

// func create
function getArea(width, height) {
    let area = width * height;
    return area;
}

// func start
let areaFinal = getArea(10, 20); // expect: 200, result: 200
console.log("func completed :: ", areaFinal);