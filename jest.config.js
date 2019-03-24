module.exports = {
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(ts)$': '<rootDir>/node_modules/ts-jest',    // TypeScriptファイルをテストする場合
    },
    moduleFileExtensions: ['js', 'ts'], // テスト対象の拡張子を列挙する
    verbose: true,
    collectCoverageFrom: ['**/*.{js,jsx}', 'app/**', '!**/node_modules/**', '!**/dist/**', '!webpack.*', '!**/coverage/**', '!*.config.*']
};