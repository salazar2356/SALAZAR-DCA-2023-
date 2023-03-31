const path = require('path');

    module.exports = {
    entry: './app/index.ts',
    mode: "development",
    
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css?$/i,
            use: ['css-loader'],
            exclude: /node_modules/,
        },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    };