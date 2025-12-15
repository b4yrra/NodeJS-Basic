/// 1.

const Add = (a, b) => {
  return a + b;
};

const Subtract = (a, b) => {
  return a - b;
};

module.exports = {
  Add: Add,
  Subtract: Subtract,
};

/// 2.

const sayHello = (name) => {
  return `Sain baina uu, ${name}`;
};

module.exports = {
  sayHello: sayHello,
};

/// 3.

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  isEven: isEven,
};

/// 4.

const toUpper = (text) => {
  return text.toUpperCase();
};

const textLength = (text) => {
  return text.length;
};

module.exports = {
  toUpper: toUpper,
  textLength: textLength,
};

/// 5.

const isAdult = (age) => {
  if (age >= 18) {
    return "Nasand hursen";
  } else {
    return "Nasand hureegui";
  }
};

module.exports = {
  isAdult: isAdult,
};
