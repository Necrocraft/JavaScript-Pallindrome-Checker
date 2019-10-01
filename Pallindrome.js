function palindrome(str) {
    // Good luck!
    let lower = str.toLowerCase();
    let arr = lower.split("");
    let newArr = [];
    let count = 0;
    for (let val in arr) {
        //Checking to remove any special characters or symbols
        if (arr[val].match(/[0-9]/) || arr[val].match(/[a-z]/)) {
            newArr.push(arr[val]);
        }
    }
    let reverseArr = [];
    for (let j = newArr.length - 1; j >= 0; j--) {
        reverseArr.push(newArr[j]);
    }

    for (let k = newArr.length - 1; k >= 0; k--) {
        if (newArr[k] === reverseArr[k]) {
            count++;
        }
    }
    if (count === newArr.length) {
        return true;
    } else {
        return false;
    }
}



palindrome("1 eye for of 1 eye.");