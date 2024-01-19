function isSymmetric(a) {
    const l = a.length;
    for (let i = 0; i < l / 2; i++) {
        if (a[i] !== a[l - 1 - i]) {
            return false;
        }
    }
    return true;
}

function generateRandomArray(len) {
    const arr = [];
    for (let i = 0; i < len; i++) {
        const e = Math.floor(Math.random() * 10) + 1;
        arr.push(e);
    }
    return arr;
}

const a = generateRandomArray(5);
console.log("Array:", a);
const r = isSymmetric(a);
console.log("Is symmetric:", r);
