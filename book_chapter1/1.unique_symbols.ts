const readline = require("readline");

// Check without data structures
function uniqueWithoutDataStructures(str: string): boolean {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

// Check using dictionary
function uniqueUsingDictionary(str: string): boolean {
    const dict: { [key: string]: boolean } = {};
    for (const ch of str) {
        if (dict[ch]) {
            return false;
        }
        dict[ch] = true;
    }
    return true;
}

// Read user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter string: ", (str: string) => {
    if (uniqueWithoutDataStructures(str)) {
        console.log("Symbols unique by first check");
    } else {
        console.log("Symbols not unique by first check");
    }

    if (uniqueUsingDictionary(str)) {
        console.log("Symbols unique by second check");
    } else {
        console.log("Symbols not unique by second check");
    }

    rl.close();
});