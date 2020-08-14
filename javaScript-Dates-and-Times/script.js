const date = new Date();

const formated = date.toLocaleDateString('en-US', { 
  weekday:'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

document.querySelector('#FormatFullDate').innerText = formated;
console.log(formated);