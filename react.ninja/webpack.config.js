'use strict'
const path = require('path');

module.exports = {

    entry: path.join(__dirname , 'src' , 'main.ts'),

    output: {
        path: path.join(__dirname , 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    resolve: {
        extensions: ['.ts' , '.js' ,'.jsx', '.json','.less']
    },
    module : {
        rules: [
            { 
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }            
            ,{ 
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                        ,options: {
                            sourceMap:true,
                            modules: true,
                            noIeCompat:true
                        }
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    }
}