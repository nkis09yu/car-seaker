//配置路径别名
module.exports = {
  //修改文件路径
  //publicPath:process.env.NODE_ENV === 'production'?'./':'/',
   publicPath: './',
  //声明配置webpack
  configureWebpack: {
    resolve: {
      //配置路径别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {
    proxy:  {
      '/api': {
        target: 'http://yingyanchaxun.com', // 目标服务器 代理的地址
        changeOrigin: true, // 允许跨域
        secure: true, // 支持https
        pathRewrite: { '^/api': '' } // 相当于用'/api'代替target里面的地址，调接口时用/api代替
      },
    }
    //proxy:'http://yingyanchaxun.com'
  }
}
