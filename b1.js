function isSymmetric(arr) {
    const len = arr.length;
    for (let i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function generateRandomArray(length) {
    const randomArr = [];
    for (let i = 0; i < length; i++) {
        const randElement = Math.floor(Math.random() * 10) + 1;
        randomArr.push(randElement);
    }
    return randomArr;
}

const myArr = generateRandomArray(5);
console.log("Array:", myArr);
const result = isSymmetric(myArr);
console.log("Is symmetric:", result);
