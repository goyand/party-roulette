module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: `${__dirname}/dist`,
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: {
              loader: 'css-loader',
            },
            scss: {
              loader: 'sass-loader',
              options: {
                data: '@import "global.scss";',
                // includePaths: path.resolve(__dirname, './src/assets/styles/'),
              },
            },
          },
        },
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
  },
};
