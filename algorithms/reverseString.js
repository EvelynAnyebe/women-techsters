/**
 * @param {character[]} 
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let index = s.length-1;
    for (i=0; i<s.length; i++){
        const temp=s[index];
        s[index]=s[i];
        s[i]=temp;
        if(index===Math.round(s.length/2)){
            break;
        }
        index--;   
    }

    return s;
    
};

console.log(reverseString(["h","e","l","l","o"]));