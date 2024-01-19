function findSubarrayWithSumGreater(arr, targetSum) {
    let minSubarray = null;
    let currentSum = 0;
    for (let start = 0, end = 0; end < arr.length; end++) {
        currentSum += arr[end];
        while (currentSum > targetSum && start <= end) {
            if (minSubarray === null || end - start < minSubarray.length) {
                minSubarray = arr.slice(start, end + 1);
            }
            currentSum -= arr[start];
            start++;
        }
    }
    return minSubarray;
}

const anotherIntegerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const anotherTargetNumber = 20;
console.log("Mảng số nguyên:", anotherIntegerArray);
console.log("Số nguyên:", anotherTargetNumber);

const resultSubarray = findSubarrayWithSumGreater(anotherIntegerArray, anotherTargetNumber);
console.log("Mảng con nhỏ nhất có tổng lớn hơn", anotherTargetNumber, "là:", resultSubarray);
