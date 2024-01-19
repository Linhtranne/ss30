function findTripletsWithSum(arr, targetSum) {
    const n = arr.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === targetSum) {
                    return [arr[i], arr[j], arr[k]];
                }
            }
        }
    }
    return [];
}

const integerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetNumber = 15;
console.log("Mảng số nguyên:", integerArray);
console.log("Số nguyên:", targetNumber);

const resultTriplets = findTripletsWithSum(integerArray, targetNumber);
if (resultTriplets.length > 0) {
    console.log("Ba phần tử có tổng bằng", targetNumber, "là:", resultTriplets);
} else {
    console.log("Không có ba phần tử nào có tổng bằng", targetNumber);
}
