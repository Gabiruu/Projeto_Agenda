module.exports = {
    //entry: ['@babel/polyfill', './src/main.js', './src/app.js', './src/index.js'],
    entry: {
        index: './src/index.js',
        inicio: './src/inicio.js',
        reg_adm: './src/reg_adm.js',
        agenda_home: './src/agenda_home.js'
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js',
    },
    devServer:{
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader', 
                }
            }
        ],
    },
};