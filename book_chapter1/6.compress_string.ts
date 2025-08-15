import readline from "readline";


function compressString(str: string): string {
  let compressed = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i]! + count;
      count = 1;
    }
  }

  return compressed.length < str.length ? compressed : str;
}

// Read user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter string: ", (str: string) => {
    console.log(compressString(str));

    rl.close();
});