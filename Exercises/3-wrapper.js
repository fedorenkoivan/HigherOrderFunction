'use strict';

const contract = (fn, ...types) => (...args) => {
    args.forEach((arg, index) => {
        const name = types[index].name.toLowerCase();
        if (typeof arg !== name) {
            throw new TypeError(`Argument type ${name} expected`);
          }
    });

  const res = fn(...args);
  const def = types[types.length - 1];
  const name = def.name.toLowerCase();
  if (typeof res !== name) {
    throw new TypeError(`Result type ${name} expected`);
  }
  return res;
};

module.exports = { contract };
