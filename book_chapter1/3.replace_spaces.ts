function replaceSpaces(strArray: string[], trueLength: number): string[] {
    let spaceCount = 0;
  
    // Count spaces
    for (let i = 0; i < trueLength; i++) {
      if (strArray[i] === ' ') {
        spaceCount++;
      }
    }
  
    let newIndex = trueLength + spaceCount * 2;
  
    // Add optional null terminator (not really needed in JS/TS)
    if (newIndex < strArray.length) {
      strArray[newIndex] = '\0';
    }
  
    // Fill array backwards
    for (let i = trueLength - 1; i >= 0; i--) {
      if (strArray[i] === ' ') {
        strArray[newIndex - 1] = '0';
        strArray[newIndex - 2] = '2';
        strArray[newIndex - 3] = '%';
        newIndex -= 3;
      } else {
        strArray[newIndex - 1] = strArray[i] ?? '';
        newIndex--;
      }
    }
  
    return strArray;
  }
  
  function task3() {
    const input: string[] = [
      'M', 'r', ' ',
      'J', 'o', 'h', 'n', ' ',
      'S', 'm', 'i', 't', 'h',
      '', '', '', '', '', '', ''
    ];
  
    const trueLength = 13;
  
    const result = replaceSpaces(input, trueLength);
  
    // Output the joined string
    console.log(result.join('')); // "Mr%20John%20Smith"
  }
  
  // Call the function
  task3();