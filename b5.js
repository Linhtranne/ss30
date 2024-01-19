function capitalizeLastLetterWord(inputStr) {
    const words = inputStr.split(' ');
    const capitalizedWords = words.map(word => {
        if (word.length > 1) {
            return word.slice(0, -1) + word.slice(-1).toUpperCase();
        } else {
            return word.toUpperCase();
        }
    });
    return capitalizedWords.join(' ');
}

const userInput = prompt("Nhập vào một chuỗi bất kỳ:");
const result = capitalizeLastLetterWord(userInput);
console.log("Chuỗi sau khi chuyển đổi:", result);
