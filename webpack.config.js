const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const eventName = process.env.npm_lifecycle_event;

module.exports = [
  {
    mode: 'development',
    entry: {
      app: [
        './src/index.js',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: eventName === 'build' ? './' : '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/.*/,
          loader: 'babel-loader',
          query: {
            presets: [
              [
                '@babel/preset-env',
                {
                  "useBuiltIns": "usage"
                }
              ],
              '@babel/preset-react',
            ]
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${__dirname}/src/index.html`,
        hash: true,
      }),
    ],
  },
];
