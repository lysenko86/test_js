module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist/assets',
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    }
}
