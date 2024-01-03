function checkMood(mood, goodCallback, badCallback) {
    if (mood === "good") {
        goodCallback();
    } else {
        badCallback();
    }
}

function cry() {
    console.log("I'm crying");
}

function sing() {
    console.log("Sing us Song!");
}

function dance() {
    console.log("dance party");
}

checkMood("bad", sing, cry);