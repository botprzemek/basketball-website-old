const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: { devtool: false },
  publicPath: '/',
  pwa: {
    name: 'knuryknurow.pl',
    themeColor: '#1D1D1D',
    msTileColor: '#F23535',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#F23535',
    iconPaths: {
      faviconSVG: 'favicon/favicon.svg',
      favicon128: 'favicon/favicon-128x128.png',
      favicon86: 'favicon/favicon-86x86.png',
      favicon64: 'favicon/favicon-64x64.png',
      favicon48: 'favicon/favicon-48x48.png',
      favicon32: 'favicon/favicon-32x32.png',
      favicon16: 'favicon/favicon-16x16.png',
      appleTouchIcon: 'favicon/apple-touch-icon.png',
      msTileImage: 'favicon/favicon-128x128.png',
      maskIcon: 'favicon/favicon-maskable.png',
    },
  },
})
