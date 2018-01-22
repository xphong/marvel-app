module.exports = {
  rootDir: '../',
  roots: ['<rootDir>'],
  setupFiles: ['<rootDir>/__tests__/setupTests.js'],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/setupTests.js',
    '<rootDir>/__tests__/jest.config.js',
    '<rootDir>/__tests__/coverage',
    '<rootDir>/__tests__/mocks'
  ],
  coveragePathIgnorePatterns: [
    '/__tests__/',
    '/store/',
    '/constants/',
    '/mocks/',
    'index.js',
    'DevTools.js',
    'routes.js'
  ],
  coverageDirectory: '<rootDir>/__tests__/coverage',
  collectCoverageFrom: [
    '**/*.js'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
