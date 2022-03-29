/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                   v
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// step 1:
frequencyMap = { }
// step 2:
// extract [keys? values? something?]
// if it's an array -> sort
// ["b70", "a84", "c42"]

// step 3:
// return a string

// hints:
// parseInt(str)
// isNaN(x)
// myObj.hasOwnProperty("key")

function rehash(str) {
    let rehashedObj = {};
    let output = "";
    let number = "";
    let key = "";
    for (let i = 0; i < str.length; i++) {
        number = "";
        key = str[i++]; // this works because ++ increments after the operation!

        // feed characters into number until we reach a non-number
        while (i < str.length && !isNaN(str[i])) {
            number += str[i++];
        }
        i--; // decrement because while loop has incremented to the next key, and the for loop will increment again

        // check if rehashed object already has key - if so, add to key, if not, create key
        if (rehashedObj.hasOwnProperty(key))
            rehashedObj[key] += parseInt(number);
        else 
            rehashedObj[key] = parseInt(number);
    }
    
    // convert object to array
    let rehashedArr = [];
    for (key in rehashedObj)
        rehashedArr.push(key + rehashedObj[key]);
    
    // sort (will compare the letters since they're first in each item in the array)
    rehashedArr.sort(); 
    
    // convert to string
    for (item of rehashedArr)
        output += item;
    
    return output;
}

console.log(rehash(str1));
console.log(rehash(str1) === expected1, "<-- should be \"true\"");