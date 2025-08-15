import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Simple O(n) check for one edit distance
function isOneEditDistance(s: string, t: string): boolean {
  const m = s.length, n = t.length;
  if (Math.abs(m - n) > 1) return false;
  let i = 0, j = 0, edits = 0;
  while (i < m && j < n) {
    if (s[i] !== t[j]) {
      if (edits === 1) return false;
      edits++;
      if (m > n) i++;
      else if (m < n) j++;
      else { i++; j++; }
    } else {
      i++; j++;
    }
  }
  // If last char is extra in either string
  if (i < m || j < n) edits++;
  return edits === 1;
}

// Read inputs sequentially
rl.question("Enter string 1: ", (str1) => {
  rl.question("Enter string 2: ", (str2) => {
    if (isOneEditDistance(str1, str2)) {
      console.log("Strings are one edit distance apart");
    } else {
      console.log("Strings are not one edit distance apart");
    }
    rl.close();
  });
});