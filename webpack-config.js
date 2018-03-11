var path = require ('path');
var webpack = require ('webpack');
module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx']
      },
    entry : path.resolve(__dirname,'./src/index.js'),
    devtool: 'source-map',
    output : {

        path: path.resolve(__dirname+'/build'),
        filename : 'bundle.js',
        publicPath:'/'
         
    },
    module:{
        loaders:[

            {test: /\.js$/,exclude:/node_modules/,use: ['babel-loader']},
            { test: /(\.css)$/, loaders: ['style', 'css'] },
            { test: /(\.png)$/, loader: 'url?limit=10000' },
            { test: /(\.jpg)$/, loader: 'url?limit=10000' },
            { test: /(\.jpeg)$/, loader: 'url?limit=10000' }
            ],
         }
         
        };