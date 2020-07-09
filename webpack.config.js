const path = require('path')

module.exports = {
    watch: process.env.NODE_ENV === 'development',
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        library: 'jslib_webpack_boilerplate',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
            },
        ],
    },
}
