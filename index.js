const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let words = tutorials.map(str => {
    return str.split(" ")
      .map(w => w[0].toUpperCase() + w.slice(1))
      .join(" ");
  });

  // takes the str
  // splits the str
  // capitalizes each word
  // joins and returns the str


  return words;
}
