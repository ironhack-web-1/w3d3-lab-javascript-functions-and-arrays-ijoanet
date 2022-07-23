// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
    if (a >= b) {
        return a;
    }
    return b;
}



// Iteration #2: Find longest word
function findLongestWord(words) {
    let longestWord = "";

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    if (longestWord === "") {
        return null;
    }

    return longestWord;
}



// Iteration #3: Calculate the sum
function sumNumbers(numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}



// Iteration #3.1 Bonus:
function sum(numbers) {
    let sum = 0;

    for (let num of numbers) {
        if (typeof num === 'object' || typeof num === 'array') {
            throw Error("unsupported data type sir or ma'am");
        }
        if (typeof num === 'string') {
            sum += num.length;
            continue;
        } else if (typeof num === 'boolean') {
            sum += Number(num);
            continue;
        }
        sum += num;
    }

    return sum
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
function averageNumbers(numbers) {
    if (!numbers.length) {
        return null;
    }

    return sumNumbers(numbers) / numbers.length;
}


// Level 2: Array of strings
function averageWordLength(words) {
    if (!words.length) {
        return null;
    }

    return sum(words) / words.length;
}

// Bonus - Iteration #4.1
function avg(arr) {
    if (!arr.length) {
        return null;
    }

    return sum(arr) / arr.length;
}

// Iteration #5: Unique arrays
function uniquifyArray(words) {
    if (!words.length) {
        return null;
    }

    const result = [];

    for (let word of words) {
        let exists = false;
        for (let item of result) {
            if (item === word) {
                exists = true;
            }
        }
        if (!exists) {
            result.push(word);
        }
    }

    return result;
}

// Iteration #6: Find elements
function doesWordExist(haystack, needle) {
    if (!haystack.length) {
        return null;
    }

    for (let item of haystack) {
        if (item === needle) {
            return true;
        }
    }

    return false;
}

// Iteration #7: Count repetition
function howManyTimes(haystack, needle) {
    if (!haystack.length) {
        return 0;
    }

    let count = 0;
    for (let item of haystack) {
        if (item === needle) {
            count += 1;
        }
    }

    return count;
}


// Iteration #8: Bonus
function greatestProduct(arr) {
    if (!arr.length) {
        return 0
    }
    let greatest = 1;
    for (let row of arr) {
        let maxInRow = 0;
        for (let item of row) {
            maxInRow = maxOfTwoNumbers(maxInRow, item)
        }
        greatest += maxInRow
    }
    return greatest
}
let matrix = [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ];
console.log(greatestProduct(matrix))



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        maxOfTwoNumbers,
        findLongestWord,
        sumNumbers,
        sum,
        averageNumbers,
        averageWordLength,
        avg,
        uniquifyArray,
        doesWordExist,
        howManyTimes,
        greatestProduct
    };
}
