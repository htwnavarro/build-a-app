export default {
    displayName: 'build-a-app',
    preset: '../../jest.preset.js',
    transform: {
        '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
        '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }]
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: '../../coverage/apps/build-a-app'
};
