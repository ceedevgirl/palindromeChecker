function isPalindrome(inputText) {
    if (typeof inputText !== 'string') return false;

    let cleanedText = inputText.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversedText = cleanedText.split("").reverse().join("");

    return cleanedText === reversedText;
}

// Only export for Node.js (Jest testing)
if (typeof module !== 'undefined') {
    module.exports = isPalindrome;
}
