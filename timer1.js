let array = process.argv.slice(2);
let arrayNum = array.map(element => parseInt(element));

const timer = (time) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time);
};

for (const elements of arrayNum) {
  if (typeof elements === "number" && elements >= 0) {
    timer(elements * 1000);
  };
};