function rotateMatrix(matrix: number[][]): void {
    const n = matrix.length;
    if (n === 0 || matrix[0]?.length !== n) {
        throw new Error("Matrix must be square");
    }
    // Layer by layer rotation
    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
        const first = layer;
        const last = n - 1 - layer;
        for (let i = first; i < last; i++) {
            const offset = i - first;
            // Save top
            const top = matrix[first]![i]!;
            // Left -> Top
            matrix[first]![i] = matrix[last - offset]![first]!;
            // Bottom -> Left
            matrix[last - offset]![first] = matrix[last]![last - offset]!;
            // Right -> Bottom
            matrix[last]![last - offset] = matrix[i]![last]!;
            // Top -> Right
            matrix[i]![last] = top;
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
                    rotateMatrix(matrix);
                    console.log('Rotated matrix:');
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