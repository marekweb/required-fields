import test from 'ava';
const required = require('./required-fields');

var options = {name: 'maximus', age: 30};

test('should work requiring any fields', () => {
  required(options);
});

test('should not throw with all fields present', () => {
  required(options, 'name', 'age');
});

test('should throw with one missing field and one present field', t => {
  t.throws(() => {
    required(options, 'name', 'status');
  }, 'Missing field: status');
});

test('should throw with a missing field', t => {
  t.throws(() => {
    required(options, 'count');
  }, 'Missing field: count');
});

test('should throw with a multiple missing field', t => {
  t.throws(() => {
    required(options, 'width', 'height');
  }, 'Missing fields: width, height');
});
