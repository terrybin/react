let a = "";

if (a) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}

/**
 *  FALSY
 *  - null, undefined, 0, "", NaN
 */

const getName = person => {
    if (!person) { // undefined, null check
        return "Not a Object";
    }
    return person.name;
}

let person = { name : "lee" };
const name = getName(person);
console.log(name); // lee