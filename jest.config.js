module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/cypress/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
};
