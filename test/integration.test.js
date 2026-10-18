import assert from 'assert';
import fs from 'fs';

console.log('Running integration tests...');
console.log(`TEST_ENV = ${process.env.TEST_ENV}`);

// 模擬整合測試：確認 build 產物確實存在
assert.ok(fs.existsSync('build.zip'), 'build.zip artifact should exist');

console.log('integration tests passed');
