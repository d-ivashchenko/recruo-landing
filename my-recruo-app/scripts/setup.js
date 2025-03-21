// scripts/setup.js
const fs = require('fs');
const path = require('path');

// Create the data directory if it doesn't exist
const dataDir = path.join(process.cwd(), 'data');

if (!fs.existsSync(dataDir)) {
  console.log('Creating data directory...');
  fs.mkdirSync(dataDir, { recursive: true });
  console.log('Data directory created at:', dataDir);
} else {
  console.log('Data directory already exists at:', dataDir);
}

// Create an empty submissions file if it doesn't exist
const submissionsFile = path.join(dataDir, 'submissions.json');

if (!fs.existsSync(submissionsFile)) {
  console.log('Creating empty submissions file...');
  fs.writeFileSync(submissionsFile, '[]', 'utf8');
  console.log('Submissions file created at:', submissionsFile);
} else {
  console.log('Submissions file already exists at:', submissionsFile);
}

console.log('Setup complete!');