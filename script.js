// complete the given function

function palindrome(s){
	// const cleanedString = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

	const cleanedString = [];
	  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    if (isAlphanumeric(char)) {
      cleanedString.push(char);
    }
  }
	
  const length = cleanedString.length;
  for (let i = 0; i < length / 2; i++) {
    if (cleanedString[i] !== cleanedString[length - 1 - i]) {
      return false;
    }
  }
  return true;
}
module.exports = palindrome
