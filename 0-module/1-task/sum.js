function sum(a, b) {
  /* ваш код */
  if (![a, b].every(Number)) throw new TypeError();
  return a + b;
}

module.exports = sum;
