/**
 * - match all characters into lowercase
 *  - store the lowercaser version of the string
 * remove spaces and other invalid characters
 * store a reverse version of the modified string
 * compared the modified reverse string with the modifies string and see they are the same
 *
 */

const isPalindrome = (s) => {
  const modifiedS = s.replace(/[\W_]/g, "").toLowerCase();

  if (modifiedS === null) return true;

  const reverseS = modifiedS.split("").reverse().join("");
  // console.log(modifiedS, reverseS);

  if (modifiedS === reverseS) {
    return true;
  }

  return false;
};

// console.log(isPalindrome("ab_a"));
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
