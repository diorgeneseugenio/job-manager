module.exports = {
  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest",
  },
  setupFiles: ["jest-canvas-mock"],
  testEnvironment: "jest-environment-jsdom-fourteen",
  moduleFileExtensions: ["js", "ts", "tsx"],
  testMatch: null,
  testRegex: "(components).*\\.spec\\.tsx?$",
};
