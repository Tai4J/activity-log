import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('integration: build artifact exists', () => {
  assert.ok(fs.existsSync('build.zip'), 'build.zip artifact should exist');
});
