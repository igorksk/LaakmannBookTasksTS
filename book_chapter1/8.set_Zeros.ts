function setZeros(matrix: number[][]): void {
  const n = matrix.length;
  if (n === 0 || matrix[0]?.length !== n) {
    throw new Error("Matrix must be square");
  }
  const rows = matrix.length;
  const cols = matrix[0].length;
  const zeroRows = new Set<number>();
  const zeroCols = new Set<number>();

  // First pass: find all the rows and columns that need to be zeroed
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i]![j] === 0) {
        zeroRows.add(i);
        zeroCols.add(j);
      }
    }
  }

  // Second pass: set the appropriate rows and columns to zero
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (zeroRows.has(i) || zeroCols.has(j)) {
        matrix[i]![j] = 0;
      }
    }
  }
}

// Simple CLI for input/output
if (require.main === module) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let n: number | null = null;
    const matrix: number[][] = [];

    console.log('Enter n (matrix size):');
    rl.on('line', (line: string) => {
        if (n === null) {
            n = parseInt(line.trim(), 10);
            if (isNaN(n) || n <= 0) {
                console.log('Please enter a valid positive integer for n.');
                n = null;
                return;
            }
            console.log(`Enter ${n} rows, each with ${n} space-separated numbers:`);
        } else {
            const row = line.trim().split(/\s+/).map(Number);
            if (row.length !== n || row.some(isNaN)) {
                console.log(`Please enter exactly ${n} valid numbers.`);
                return;
            }
            matrix.push(row);
            if (matrix.length === n) {
                try {
                    setZeros(matrix);
                    console.log('Set zeros:');
                    matrix.forEach(r => console.log(r.join(' ')));
                } catch (e) {
                    if (e instanceof Error) {
                        console.log('Error:', e.message);
                    } else {
                        console.log('Unknown error:', e);
                    }
                }
                rl.close();
            }
        }
    });
}