const date = new Date();

// full
// const formated = date.toLocaleDateString('en-US', { 
//   weekday:'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric'


// const formated = date.toLocaleDateString('en-US', {
//   weekday: 'long',
//   year: 'numeric'
// }); 

// document.querySelector('#FormatFullDate').innerText = formated;
// console.log(formated);

// OR

// create an object
const dateOptions = {
  weekday:'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

// pass in the object to the method
date.toLocaleDateString('en-US', dateOptions);
document.querySelector('#FormatFullDate').innerText = date.toLocaleDateString('en-US', dateOptions)


