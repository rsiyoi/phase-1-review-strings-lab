// Write your code in this file!

// String concatenation is a way to take two strings and add one to the other, creating a single, longer string using the + operator

// String interpolation lets us dynamically insert values in the middle of a string. To do this, we need to use  strings wrapped in backticks rather than single or double quotes. e.g.  '$ {myString}

const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ' +  ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ' +  ${currentUser.slice(0,1)}!`;