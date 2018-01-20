module.exports = {
  roots: ['.'],
  setupFiles: ['./setupTests.js'],
  testPathIgnorePatterns: [
    './setupTests.js',
    './jest.config.js'
  ]
};
