import readline from "readline";

function isPalindromePermutation(str: string): boolean {
  const dictionary: { [key: string]: number } = {};

  for (let i = 0; i < str.length; i++) {
    const symbol = str[i] ?? '';
    if (symbol === ' ') {
      continue; // Ignore spaces
    }

    const lowerSymbol = symbol.toLowerCase();

    if (dictionary.hasOwnProperty(lowerSymbol)) {
      dictionary[lowerSymbol]!++;
    } else {
      dictionary[lowerSymbol] = 1;
    }
  }

  let oddCount = 0;

  for (const key in dictionary) {
    if ((dictionary[key] ?? 0) % 2 === 1) {
      oddCount++;
    }
  }

  // Can be only 0 or 1 odd chars count
  return oddCount < 2;
}

// Main function to read input and print result
function task4() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter a string: ", (input) => {
    const result = isPalindromePermutation(input);
    console.log(`Is palindrome permutation? ${result}`);
    rl.close();
  });
}

// Call main function
task4();