/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let character of s) {
    const characterIndex = s.indexOf(character);
    if (characterIndex == s.lastIndexOf(character)) {
      return characterIndex;
    }
  }

  return -1;
};
