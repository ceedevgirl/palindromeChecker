import { updateResultDisplay } from './DOMUpdates.js';
// No import needed for isPalindrome because it's loaded via <script> tag too

document.getElementById("check-btn").addEventListener("click", function() {
    const inputText = document.getElementById("text-input").value;

    if (inputText.trim() === "") {
        alert("Please enter a word");
        return;
    }

    const isPalin = isPalindrome(inputText);
    updateResultDisplay(isPalin, inputText);
});
