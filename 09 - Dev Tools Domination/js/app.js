const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular

console.log('hello');

// Interpolated - not that useful now that we have ES6 backticks

console.log('hello i am a %s string!', 'blob');

// Styled

console.log('%c i am some great text', 'font-size: 50px');

// warning!

console.warn('OH NOOOO');

// Error :|

console.error('shit!');

// Info

console.info('crocodiles eat 3-4 people per year');

// Testing
console.assert(1 === 1, 'that is wrong!');
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');

// timing

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
