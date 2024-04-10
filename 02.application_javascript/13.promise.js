function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // executor
    
        // resolve("Hello") => promise 비동기 작업이 성공한 후의 작업
        // reject("why failed ??: "); // reject() => promise 비동기 작업이 실패했을 때의 작업
    
        setTimeout(() => {
            if (typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("NaN");
            }
        }, 2000);
    });

    return promise;
}

/*
setTimeout(() => {
    console.log(promise);
}, 3000);

// then 메서드
//  => Promise 후의 작업
promise.then((value) => {
    console.log(value);
})

promise.catch(error => {
    console.log(error);
})
*/

add10(15)
    .then((res) => {
        const newRes = add10(res);
        return newRes;
    }).then(finalResult => {
        return finalResult;
    }).then(final2 => {
        console.log(final2);
    }).catch(err => {
        console.log(err);
    })

