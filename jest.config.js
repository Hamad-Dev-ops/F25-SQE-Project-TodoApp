module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testMatch: [
    '**/tests/unit/**/*.test.js',
    '**/tests/api/**/*.test.js'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/server/index.js'
  ],
  // Add this to fix the TextEncoder issue
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
};