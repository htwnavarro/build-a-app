const { composePlugins, withNx, withWeb } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { runWebpackDevServer } = require('@nx/webpack/src/utils/run-webpack');
const path = require('node:path');

const pluginOption = {
    index: 'apps/build-a-app/src/index.html',
    main: 'apps/build-a-app/src/main.tsx',
    tsConfig: 'apps/build-a-app/tsconfig.app.json',
    outputPath: 'dist/apps/build-a-app',
    outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
    optimization: process.env['NODE_ENV'] === 'production',
    assets: ['apps/build-a-app/src/favicon.ico', 'apps/build-a-app/src/assets'],
    compiler: 'babel',
    styles: []
};

// Nx composable plugins for webpack.
module.exports = composePlugins(
    withNx(pluginOption),
    withWeb(),
    withReact(),
    (config, { options, context, configuration }) => {
        config.devServer = {
            port: 4200,
            historyApiFallback: {
                index: '/index.html',
                disableDotRule: true,
                htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
            }
        };

        runWebpackDevServer(config);

        return config;
    }
);
