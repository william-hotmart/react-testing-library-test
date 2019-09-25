module.exports = {
  rootDir: '../',
  verbose: true,
  clearMocks: true,
  setupFilesAfterEnv: [
    '<rootDir>/config/setup-tests.js'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/node_modules/'
  ],
  moduleDirectories: ['.', 'src', 'node_modules'],
  moduleNameMapper: {
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(jsx|js)$': 'babel-jest'
  }
}
