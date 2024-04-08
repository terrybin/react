// 1. Date 객체 생성
let date1 = new Date();
let date2 = new Date("1997-12-07 10:10:10");

// 2. TimeStamp
//  - 특정 시간이 " 1970.01.01 00시 00분 00초 (UTC) "로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1= date1.getTime(); // getTime(): timestamp 형태로 값을 추출
let date4 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear(); // 년도
let month = date1.getMonth(); // 월
let date = date1.getDate(); // 일
let hour = date1.getHours(); // 시
let minute = date1.getMinutes(); // 분
let second = date1.getSeconds(); // 초

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());