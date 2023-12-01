const fs = require('fs'); // Import the 'fs' module for file operations

// Read input text from a file (e.g., input.txt)
const inputFilePath = 'input.txt'; // Replace with the path to your input file
const text = fs.readFileSync(inputFilePath, 'utf-8');

function translate(char) {
  let diff;
  if (/[A-Z]/.test(char)) {
    diff = "𝐀".codePointAt(0) - "A".codePointAt(0);
  } else if (/[a-z]/.test(char)) {
    diff = "𝐚".codePointAt(0) - "a".codePointAt(0);
  } else {
    return char; // Return unchanged for non-alphabetic characters
  }
  return String.fromCodePoint(char.codePointAt(0) + diff);
}

// Replace words enclosed between * with their Unicode bold variants
const newText = text.replace(/\*([^*]+)\*/g, (match, word) => {
    return `${word.split('').map(translate).join('')}`;
    });

// Write the modified text to an output file (e.g., output.txt)
const outputFilePath = 'output.txt'; // Replace with the desired output file path
fs.writeFileSync(outputFilePath, newText, 'utf-8');

console.log('Text processed successfully. Modified text saved to output.txt');

