// math module

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}

// <Common JS>
// module.exports = {
//     add,
//     sub
// }

// <ES module>
// 1. 
export { add, sub }

// 2. function 앞에 export 작성