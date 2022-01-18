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
    
    return reverseString(str) === str;
}




