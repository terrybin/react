// 5가지 배열 변형 메서드

// 1. filter
//  - 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
    {name: "이정환", hobby: "테니스"},
    {name: "김태형", hobby: "테니스"},
    {name: "이지은", hobby: "독서"},
]

const tennisPeople = arr1.filter(item => item.hobby === "테니스");

// 2. map
//  - 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
    return item * 2;
});

let names = arr1.map(item => item.name);

// 3. sort
//  - 배열을 사전순으로 정렬하는 메서드
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
    if (a > b) {
        // b가 a 앞으로
        return 1;
    } else if (b > 1) {
        // a가 b 앞으로
        return -1;
    } else {
        // 자리 바꾸지 않는다.
        return 0;
    }
});

// 4. toSorted
//  - 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join
//  - 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "terry"];
const joined = arr6.join(",");