const getName = person => {
    const name = person && person.name;
    return name || "not object";
};

let person;
const name = getName(person);
console.log(name);