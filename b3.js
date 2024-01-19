function sortString(s) {
    const letters = [];
    const numbers = [];
    const specials = [];
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if (/[a-zA-Z]/.test(c)) {
            letters.push(c);
        } else if (/[0-9]/.test(c)) {
            numbers.push(c);
        } else {
            specials.push(c);
        }
    }
    return letters.concat(numbers, specials);
}
const userInput = prompt("Nhập vào một chuỗi bất kỳ:");
const sortedArray = sortString(userInput);
console.log("Chuỗi sau khi sắp xếp:", sortedArray.join(''));
