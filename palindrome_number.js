var reverseString = (str) => {
    let reversedString = '';
    const idxDelimiter = str.length - 1;
    
    for (let i = idxDelimiter; i >= 0; i--) {
        reversedString += str[i];
    }
    
    return reversedString;
}

var isPalindrome = function(x) {
    const str = String(x);
    
    if (reverseString(str) === str) {
        return true
    } else {
        return false
    }
}




