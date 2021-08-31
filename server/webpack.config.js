const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',

    entry: './src/index.ts',

    output: {
        filename: 'server.js',
        path: path.join(__dirname, 'dist')
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },

    externals: [
        nodeExternals()
    ]
}