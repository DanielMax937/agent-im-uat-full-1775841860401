/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['lib/**/*.js'],
  coverageReporters: ['json', 'text', 'json-summary'],
};
