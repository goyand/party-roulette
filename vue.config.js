module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles/global.scss";',
      },
    },
  },
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/party-roulette/' // 任意
      : '/',
};
