export const caesarCipher = (text, shift) => {
  if (typeof text !== 'string') throw new Error('Input must be a string');
  if (typeof shift !== 'number') throw new Error('Shift must be a number');
  
  return text
    .split('')
    .map(char => {
      const code = char.charCodeAt(0);
      
      // Handle uppercase letters
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      // Handle lowercase letters
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
      // Return unchanged for non-letters
      return char;
    })
    .join('');
};

export const encrypt = (text, shift) => caesarCipher(text, shift);
export const decrypt = (text, shift) => caesarCipher(text, -shift); 