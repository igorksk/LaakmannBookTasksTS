/**
 * Task 9 — String Rotation
 * Description: Check if one string is a rotation of another by verifying
 * whether `s2` is a substring of `s1 + s1`.
 */
import readline from "readline";

function isRotation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;
  const combined = s1 + s1;
  return combined.includes(s2);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Read inputs sequentially
rl.question("Enter string 1: ", (str1) => {
  rl.question("Enter string 2: ", (str2) => {
    if (isRotation(str1, str2)) {
      console.log("Strings are rotations of each other");
    } else {
      console.log("Strings are not rotations of each other");
    }
    rl.close();
  });
});
