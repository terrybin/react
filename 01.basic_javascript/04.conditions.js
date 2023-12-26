let a = 3;

if (a >= 5) {
    console.log("a는 5 이상");
} else if (a >= 3) {
    console.log("a는 3 이상");
} else {
    console.log("a는 3 미만");
}


let country = "ko";

// if
if (country === "ko") {
    console.log("Korea");
} else if (country === "cn") {
    console.log("China");
} else {
    console.log("undefined");
}

// switch
switch(country) {
    case "ko":
        console.log("Korea");
        break;
    case "cn":
        console.log("China");
        break;
    default:
        console.log("undefined");
        break;
}

