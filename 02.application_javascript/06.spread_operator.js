// spread operator
// - 중복된 코드를 계속 생산해야하는 경우에 사용

const cookie = {
    base: "cookie",
    madeIn: "korea"
};

const chocochip = {
    ...cookie, // spread operator
    toping: "chocochip"
};

const blueberry = {
    ...cookie,
    toping: "blueberry"
};

const strawberry = {
    ...cookie,
    toping: "strawberry"
};

console.log(chocochip);



// 다른 두 개의 배열을 합치는 경우에도 사용 가능
const cookieArr = ["chocochip", "bananaKick"];
const meatArr = ["pork", "beef", "ramb"];

const allArr = [...cookieArr, ...meatArr];
console.log(allArr); // (5) ['chocochip', 'bananaKick', 'pork', 'beef', 'ramb']