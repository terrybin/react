function isKoreanFood(food) {
    if (food === "bul" || food === "bibim" || food === "tteok") {
        return true;
    } else {
        return false;
    }
}

const food1 = isKoreanFood("bul");
const food2 = isKoreanFood("pasta");
console.log(food1); // true
console.log(food2); // false



const getMeal = mealType => {
    if (mealType === "korea") return "bulgogi";
    if (mealType === "noodle") return "pasta";
    if (mealType === "china") return "menbosha";
    if (mealType === "japan") return "sushi";
    return "starve";
}

console.log(getMeal("korea"));
console.log(getMeal("japan"));
console.log(getMeal("spain"));