module.exports = {
  rootDir: '../',
  roots: ['<rootDir>'],
  setupFiles: ['<rootDir>/__tests__/setupTests.js'],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/setupTests.js',
    '<rootDir>/__tests__/jest.config.js',
    '<rootDir>/__tests__/coverage'
  ],
  coveragePathIgnorePatterns: [
    '/__tests__/',
    '/store/',
    '/constants/'
  ],
  coverageDirectory: '<rootDir>/__tests__/coverage',
  collectCoverageFrom: [
    '**/*.js'
  ]
};
