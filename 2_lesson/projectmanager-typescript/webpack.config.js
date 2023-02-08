const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    // export file vs location
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    // deploy server
    devServer: {
        static: {
            directory: path.join(__dirname, '/'),
        },
        port: 9003,
    },
    devtool: 'inline-source-map',
    // rule that exclude your modle
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};