module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,vue}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/main.js/**",
    "!**/coverage/**",
    "!**/*.config.js/**",
    "!**/tests/e2e/**",
  ],
  coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: -10
      }
    },
    moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
 
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}