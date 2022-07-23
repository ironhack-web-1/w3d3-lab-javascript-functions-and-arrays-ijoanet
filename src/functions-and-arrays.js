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
            throw new Error("unsupported data type sir or ma'am");
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
function greatestProduct(matrix) {
    let maxValue = 0;

    for (let y = 0; y < matrix.length; y++) {
        let up = -1;
        let down = -1;
        if (y > 0) {
            up = y - 1;
        }
        if (y < matrix.length - 1) {
            down = y + 1;
        }

        for (let x = 0; x < matrix[y].length; x++) {
            let left = -1;
            let right = -1;

            if (x > 0) {
                left = x - 1;
            }
            if (x < matrix[y].length - 1) {
                right = x + 1;
            }

            maxValue = maxOfTwoNumbers(
                maxValue,
                crossMultiply(matrix, x, y, up, down, left, right)
            )
        }
    }

    return maxValue
}

function crossMultiply(matrix, x, y, up, down, left, right) {
    let upVal = 1;
    let downVal = 1;
    let leftVal = 1;
    let rightVal = 1;

    if (up != -1) {
        upVal = matrix[up][x];
    }
    if (down != -1) {
        downVal = matrix[down][x];
    }
    if (left != -1) {
        leftVal = matrix[y][left];
    }
    if (right != -1) {
        rightVal = matrix[y][right];
    }

    return upVal * downVal * leftVal * rightVal;
}


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
