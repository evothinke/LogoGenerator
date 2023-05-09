const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What text should be displayed in the logo?',
    name: 'text',
  },
  {
    type: 'input',
    message: 'Enter a color for the text:',
    name: 'textColor',
  },
  {
    type: 'list',
    message: 'Choose a shape for the logo:',
    name: 'shape',
    choices: ['triangle', 'circle', 'square']
  },
  {
    type: 'input',
    message: 'Enter a color for the shape:',
    name: 'shapeColor',
  },
];

// Function to generate the SVG content based on user's answers
const generateSVG = (answers) => {
  if (answers.shape === 'circle') {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">
      <circle cx="150" cy="150" r="100" fill="${answers.shapeColor}" />
      <text x="150" y="180" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>`;
  }
  if (answers.shape === 'triangle') {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
      <polygon points="150, 20 280, 180 20, 180" fill="${answers.shapeColor}" />
      <text x="150" y="150" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>`;
  }
  if (answers.shape === 'square') {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">
      <rect x="50" y="50" width="200" height="200" fill="${answers.shapeColor}" />
      <text x="150" y="200" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>`;
  }
}

// Function to initialize the application
function init() {
  inquirer.prompt(questions).then((answers) => {
    const data = generateSVG(answers);
    fs.writeFileSync('logo.svg', data);
    console.log('Logo has been created!');
  });
}

// Call the init function to start the application
init();
