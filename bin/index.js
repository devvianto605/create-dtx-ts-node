#!/usr/bin/env node

const { exec } = require('child_process');
const path = require('path');
const readline = require('readline');

// Create an interface to prompt the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user for the project name
rl.question('Enter the project name: ', (projectName) => {
  // Close the readline interface
  rl.close();

  // Path to the shell script
  const scriptPath = path.join(__dirname, '../run-script.sh');

  // Execute the shell script with the provided project name
  exec(`bash ${scriptPath} ${projectName}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error.message}`);
      process.exit(1);
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
  });
});
