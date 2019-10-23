function strLog(str) {
        console.log(str);
}

strLog("hi hello");

setTimeout(() => { strLog("wut u want") }, 2000);

function getWords(str){
    let strArr = str.split(" ");
    let delay = 0;
    console.log(strArr[0])
    strArr.shift();
    // console.log(strArr);
    delay = 3000;
    function logIt(str1) {
        setTimeout(() => {
            console.log(str1);
        }, delay);
        delay += 1000;
    }
    strArr.forEach(logIt);
}

function done() {
    console.log('Job\'s done!');
}
function countdown(num,callback){
    let delay=1000;
    let delay2 = num*1000;
    console.log(num);
    num--;
    // for (i=0)
    setTimeout(() => {
        delay+=1000;
        if(num>0) {
            countdown(num,done);
        } else {
            setTimeout(() => {
                callback()
            }, delay2);
        }
    }, delay);
}

var lunchTime = true;
const orderMeSomeFood = (arg,food,bev) => {
    return new Promise((resolve,reject) => {
        if (arg) {
            resolve({lunch: food, drink: bev})
        } else {
            reject('it\'s not lunchtime')
        }
    });
};

orderMeSomeFood(lunchTime,"bacon wrapped bacon","bulleit rye")
    .then((result)=> console.log("I'm eating " + result.lunch + " and drinking " + result.drink + "!"))
    .catch((error)=> console.log(error))