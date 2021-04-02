const path = require('path')
module.exports = {
    entry: './src/index.ts',
    output: {
        libraryTarget: 'umd',
        filename: 'js-reward.js',
    },
    resolve: {
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [
                    { loader: 'ts-loader' }
                ]
            },
            {
                test: /\.scss?$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            },
            {
                test: /\.(png|jpg|gif|jpe|svg?g)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                       limit: 28192,
                       name:'images/[hash].[name].[ext]'
                    }
                  }
                ]
            }
        ]
    }
}