const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const utf = ['\u0031', '\u0032', '\u0033', '\u0034', '\u0035', '\u0036', '\u0037', '\u0038', '\u0039' ]
const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {

if (key === '\u0003') {
  console.log("Thanks for using me, ciao!");
  process.exit();
};

if (key === '\u0062') {
  process.stdout.write('beep');
}

else if (utf.includes(key)) {
  const index = utf.indexOf(key)
  console.log(`setting timer for ${number[index]}`);
  timer(number[index]);
}
});

console.log('after callback');

const timer = (time) => {
  setTimeout(() => {
    process.stdout.write('beeping');
  }, time * 1000);
};