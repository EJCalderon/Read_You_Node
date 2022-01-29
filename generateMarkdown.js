// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return '';
  }
  else{
    return '';

  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# README Project
  ${answers.name}

## Table of Contents:
- [Name](#name)  
- [License](#license)  
- [Description](#description)  
- [Installation Steps](#installationSteps)  
- [Test](#test)  
- [Github Repo](#githubRepo)  
- [Email](#email)  
- [Contributors](#contributors)

## License:
[![License:${answers.license}]]

## Description:
${answers.description}

## Images:
![Project Screenshot](./imagePathHere.png)

![Project Screenshot](./imagePathHere.png)

![Project Screenshot](./imagePathHere.png)

## Installation Steps
${answers.description}

## Test Command:
To test type ${answers.test} into the terminal

## My Github Repo
Checkout more of my projects on my Github at https://github.com/${answers.gitHub}

## My Email Address:
If you have any questions or concerns please reach out to me at my email at ${answers.email}

## Other Contributors
${answers.contributors}
`; 
}

module.exports = generateMarkdown;
