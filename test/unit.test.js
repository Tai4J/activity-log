import assert from 'assert';

console.log('Running unit tests...');
console.log(`TEST_ENV = ${process.env.TEST_ENV}`);

assert.strictEqual(1 + 1, 2);
assert.strictEqual('hello'.toUpperCase(), 'HELLO');

console.log('unit tests passed');
