var isPalindrome = function(x) {
    const number = String(x);
    const reversedNumber = number.split("").reverse().join("");

    if (number === reversedNumber) {
        return true
    } else {
        return false
    }
}


console.log(isPalindrome(10));

