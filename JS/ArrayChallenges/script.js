//1. Always Hungry
function alwaysHungry(arr) {
    let status ='im hungry'
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==="food") {
            console.log("yummy");
            status =''
        }
    }
    console.log(status);
}
alwaysHungry([1,2,3,4,5,6,true])

//2. high pass filter
function highPass(arr,cutoff) {
    //can be solved in two ways first using .filter() method or manually using for loop
    // let filteredArr = arr.filter(item => item > cutoff)
    let filteredArr =[]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>cutoff) {
           filteredArr.push(arr[i]) 
        }
    }
    return filteredArr
}
console.log(highPass([1,2,4,5,6,7,8,9,10],4));

//3. better than average
function betterThanAverage(arr) {
    let sum  = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let average = sum / arr.length
    let newArr = arr.filter((item) => item > average)
    console.log(newArr.length);
}
betterThanAverage([1,2,3,4,5,6,7,8,9])

// 4. reverse
function reverse(arr) {
    let reversedArr =[]
    for (let i = arr.length-1; i >= 0; i--) {
        reversedArr.push(arr[i])
    }
    return reversedArr
}
console.log(reverse(['alsawaf','ibrahim','yousef','ahmed']));

// 5.fibonacci array
function fibonacci(num) {
    let arr = [0,1]
    if (num == 1) {
        arr = [0]
    }
    else if(num == 0){
        arr = []
    }
    for (let i = 2; i < num; i++) {
        arr.push(arr[i-2]+arr[i-1])
    }
    return arr
}
console.log(fibonacci(10));