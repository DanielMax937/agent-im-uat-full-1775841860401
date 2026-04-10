'use strict';

const { taskId } = require('./task');

describe('task', () => {
  test('taskId matches UAT3 fixture', () => {
    expect(taskId()).toBe('UAT3-full-1775841860401');
  });
});
