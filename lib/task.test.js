'use strict';

const { taskId } = require('./task');

describe('task', () => {
  test('taskId matches UAT fixture', () => {
    expect(taskId()).toBe('UAT-full-1775841860401');
  });
});
