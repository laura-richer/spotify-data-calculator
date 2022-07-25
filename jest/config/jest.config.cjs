module.exports = {
  rootDir: '../../',
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      { preprocess: "<rootDir>/svelte.config.test.cjs" },
    ],
    "^.+\\.ts$": "ts-jest",
    "^.+\\.js$": "ts-jest",
  },
  moduleFileExtensions: ["js", "ts", "svelte"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/jest/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/jest/__mocks__/fileMock.js",
    "^\\$lib(.*)$": "<rootDir>/src/lib$1",
    "^\\$app(.*)$": [
      "<rootDir>/.svelte-kit/dev/runtime/app$1",
      "<rootDir>/.svelte-kit/build/runtime/app$1",
    ],
  },
  setupFilesAfterEnv: ["<rootDir>/jest/config/jest-setup.ts"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx,svelte,js,jsx}"],
};
