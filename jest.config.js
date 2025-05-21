module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    // Handle CSS imports (e.g., .css, .scss)
    '\\.(css|scss)$': 'identity-obj-proxy',
    // Handle image imports
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    // Handle module aliases
    '^@shared/(.*)$': '<rootDir>/src/app/shared/$1',
    '^@modules/(.*)$': '<rootDir>/src/app/modules/$1',
    // If you have other aliases in tsconfig.json, add them here
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Ensure this points to your tsconfig
    },
  },
};
