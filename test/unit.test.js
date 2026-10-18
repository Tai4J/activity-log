import test from 'node:test';
import assert from 'node:assert/strict';

test('unit: basic arithmetic', () => {
  assert.strictEqual(1 + 1, 2);
});

test('unit: string uppercase', () => {
  assert.strictEqual('hello'.toUpperCase(), 'HELLO');
});
