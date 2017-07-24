const path = require('path');
const vueLoaderConf = require('./vue-loader.conf');

module.exports = {
  webpack: function (webpackConfig) {
    webpackConfig.module.rules.forEach(loader => {
      if (loader.loader == 'vue-loader') {
        Object.assign(loader.options, vueLoaderConf)
      }
    });

    webpackConfig.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|woff|woff2|svg)([\?#\w]*)?$/,
      loader: '@ali/img-upload-loader!url?name=[path][name].[ext]&limit=10000!img-compress'
    })
    return webpackConfig
  },
  html: {
    title: '神小马',
    template: path.join(__dirname, '../peek.html')
  }
};
