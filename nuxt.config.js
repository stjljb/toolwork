const CompressionPlugin = require('compression-webpack-plugin');
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ToolWork - 工具集合',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'theme-color',
        content: '#00b482'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '//cdn.toolwork.cn/toolwork/favicon.ico'
    }]
  },
  loading: {
    color: '#00b482'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ant-design-vue/dist/antd.less', '~/styles/main.scss', '~/styles/normalize.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    {
      src: './plugins/clipboard.js',
      ssr: false
    },
  ],

  // 预加载
  render: {
    resourceHints: false
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  router: {
    prefetchLinks: false
  },

  resourceHints: false,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/,
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false
      })
    ],
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    },
    loaders: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#00b482',
          'link-color': '#2b3e4e',
        }
      }
    },
    analyze: false,
    productionSourceMap: false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css', 'svg'],
  }
}
