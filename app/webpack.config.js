module.exports = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        lodaer: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                    'sass-loader',
                ],
            },
        ],
    },
};