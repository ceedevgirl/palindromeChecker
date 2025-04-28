export function updateResultDisplay(isPalindromeResult, inputText) {
  const resultDisplay = document.getElementById("result");

  if (isPalindromeResult) {
      resultDisplay.textContent = `${inputText} is a palindrome.`;
      resultDisplay.style.color = "lightgreen";
  } else {
      resultDisplay.textContent = `${inputText} is not a palindrome.`;
      resultDisplay.style.color = "orange";
  }
}
