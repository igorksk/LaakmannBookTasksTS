import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkIfPermutations(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  const letters: { [key: string]: number } = {};

  for (const c of str1) {
    letters[c] = (letters[c] ?? 0) + 1;
  }

  for (const c of str2) {
    letters[c] = (letters[c] ?? 0) - 1;
    if ((letters[c] ?? 0) < 0) {
        return false;
      }
  }

  return true;
}

// Read inputs sequentially
rl.question("Enter string 1: ", (str1) => {
  rl.question("Enter string 2: ", (str2) => {
    if (checkIfPermutations(str1, str2)) {
      console.log("Strings are permutations");
    } else {
      console.log("Strings are not permutations");
    }
    rl.close();
  });
});