function isPalindrome(str) {
  
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '');

 
      const reversedStr = cleanedStr.split('').reverse().join('');

  
  return cleanedStr === reversedStr;
}


const input = "MadaM";
if (isPalindrome(input)) {
    console.log(`"${input}" is a palindrome.`);
}

 else {
  console.log(`"${input}" is not a  palindrome.`);
}
