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

// const titleCased = (data) => {
//    let oldArray = data;
//    let finalArray = [];
//    for(const element of oldArray) {
//      let array = element.split(" ");
//      let newArray = [];
//      newArray = array.map(word => word[0].toUpperCase() + word.slice(1));
//      let string = newArray.join(" ");
//      finalArray.push(string);
//    };
//    return finalArray;
// };

const titleCased = () => {
   const newArray = tutorials.map(function(tutorial) {
    let strings = tutorial.split(" ");

    for(let i = 0; i < strings.length; i++){
      strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
    }
    let newStrings = strings.join(" ");
    return newStrings
    });
    return newArray;
};
