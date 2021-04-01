module.exports = {
    entry: './src/index.ts',
    output: './dist/js-reward.js',
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.ts?$/,
                loaders: 'ts-loader'
            }
        ]
    }
}