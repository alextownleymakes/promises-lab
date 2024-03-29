async function maths(num1, num2) {
    return new Promise((resolve, reject) => {
        resolve(slowMath.add(num1, num2)
            .then((result) => { console.log(result); return slowMath.multiply(result, 2); })
            .then((result) => { console.log(result); return slowMath.divide(result, 4); })
            .then((result) => { console.log(result); return slowMath.subtract(result, 3); })
            .then((result) => { console.log(result); return slowMath.add(result, 98); })
            .then((result) => { console.log(result); return slowMath.remainder(result, 2); })
            .then((result) => { console.log(result); return slowMath.multiply(result, 50); })
            .then((result) => { console.log(result); return slowMath.remainder(result, 40); })
            .then((result) => { console.log(result); return slowMath.add(result, 32); })
            .then((result) => { console.log("The final result is " + result); })
            .catch(err => console.log(err)))
    })
}