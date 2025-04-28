const isPalindrome = require('../js/palindrome.js');

describe('Palindrome Checker', () => {
  test('detects a simple palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('detects a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('ignores casing and non-alphanumeric characters', () => {
    expect(isPalindrome('A man, a plan, a canal, Panama!')).toBe(true);
  });

  test('returns true for empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('returns false for non-string input', () => {
    expect(isPalindrome(12321)).toBe(false);
  });

  test('detects a single character as a palindrome', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('detects numbers inside string as palindrome', () => {
    expect(isPalindrome('12321')).toBe(true);
    expect(isPalindrome('12345')).toBe(false);
  });

  test('handles special characters only', () => {
    expect(isPalindrome('!!!')).toBe(true); // cleaned to empty => true
  });

  test('handles mixed alphanumeric and special characters', () => {
    expect(isPalindrome('No lemon, no melon')).toBe(true);
    expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
  });

  test('returns false for null or undefined', () => {
    expect(isPalindrome(null)).toBe(false);
    expect(isPalindrome(undefined)).toBe(false);
  });
});
