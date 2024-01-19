function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const numArray = [2, 7, 13, 5, 10, 19, 3, 8];
console.log("Mảng số nguyên:", numArray);
console.log("Các số nguyên tố trong mảng là:");
for (let i = 0; i < numArray.length; i++) {
    if (isPrime(numArray[i])) {
        console.log(numArray[i]);
    }
}
