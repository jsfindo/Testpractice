export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};


export const reversestring = (str) =>{
    return str.split('').reverse().join('');


}

export const caesarCipher = (str, shift) => {
  return str.replace(/[a-z]/gi, (char) => {
    const start = char <= 'Z' ? 65 : 97; // ASCII for 'A' or 'a'
    return String.fromCharCode(
      ((char.charCodeAt(0) - start + shift) % 26) + start
    );
  });
};