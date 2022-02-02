const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  entry: ['./src/demo-range-slider.js'],
  output: {
    filename: 'demo-range-slider.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        test: /\.s[ac]ss$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        use: [
          'sass-to-string',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed',
              }
            }
          }
        ]
      },
    
      /* {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      } */
    ]
  },
};