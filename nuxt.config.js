export default {
  loading: '~/components/loading.vue',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - セントマリアージュ青山',
    title: 'セントマリアージュ青山',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: '大手結婚相談所(ダイヤモンドファミリークラブ)にて多くの会員様の幸せを叶えてきた経験をもとに、お一人お一人に合ったきめ細やかなサポートをおこないます。20代～50代までの幅広い年齢層の方々のご成婚実績が多数ございますので、経験豊かなカウンセラーに安心してお任せください。'
      },
      {hid: 'og:site_name', property: 'og:site_name', content: 'セントマリアージュ青山'},
      {hid: 'og:type', property: 'og:type', content: 'website'},
      // {hid: 'og:url', property: 'og:url', content: 'https://tokyo-grand.jp/'},
      {hid: 'og:title', property: 'og:title', content: 'セントマリアージュ青山'},
      {
        hid: 'og:description',
        property: 'og:description',
        content: '大手結婚相談所(ダイヤモンドファミリークラブ)にて多くの会員様の幸せを叶えてきた経験をもとに、お一人お一人に合ったきめ細やかなサポートをおこないます。20代～50代までの幅広い年齢層の方々のご成婚実績が多数ございますので、経験豊かなカウンセラーに安心してお任せください。'
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'セントマリアージュ青山' },
      { name: 'twitter:description', content: '大手結婚相談所(ダイヤモンドファミリークラブ)にて多くの会員様の幸せを叶えてきた経験をもとに、お一人お一人に合ったきめ細やかなサポートをおこないます。20代～50代までの幅広い年齢層の方々のご成婚実績が多数ございますので、経験豊かなカウンセラーに安心してお任せください。' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/ring_logo__16.png', size: "16x16"},
      { rel: 'icon', type: 'image/png', href: '/images/ring_logo__32.png', size: "32x32"},
      { rel: 'apple-touch-icon', href: '/images/ring_logo_32.jpeg'},
    ]
  },

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/index.js',
    '@/plugins/routerOptions.js',
    '@/plugins/firebase.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // nuxt.config.js
  svg: {
    vueSvgLoader: {
        // vue-svg-loader options
    },
    svgSpriteLoader: {
        // svg-sprite-loader options
    },
    fileLoader: {
        // file-loader options
    }
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
    'nuxt-gsap-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/dotenv',
  ],

  googleFonts: {
    families: {
      'Noto+Serif+JP': true,
      'Noto+Sans+JP': true,
      'DM+Serif+Display': true,
      'Zen+Antique': true,
      'Zen+Antique+Soft': true,
      'Zen+Old+Mincho': true,
    },
    display: 'block',
    download: true,
    inject: true,
    overwriting: true,
  },

  gsap: {
    extraPlugins: {
      /**
       * After activation, plugins are automatically
       * registered and available globally
       */
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },

  styleResources: {
    sass: [
      './assets/style/variables.sass',
      './assets/style/common.sass',
    ],
    scss: [],
    less: [],
    stylus: [],
    hoistUseStatements: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.VUE_APP_API_KEY,
          authDomain: process.env.VUE_APP_AUTH_DOMAIN,
          projectId: process.env.VUE_APP_PROJECT_ID,
          storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
          messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
          appId: process.env.VUE_APP_ID,
          measurementId: process.env.VUE_MEASUREMENT_ID,
        },
        services: {
          // auth: {
          //   persistence: 'local', // default
          //   initialize: {
          //     onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          //     onAuthStateChangedAction: 'onAuthStateChangedAction',
          //     subscribeManually: false
          //   },
          //   ssr: false, // default
          //   emulatorPort: 3000,
          //   emulatorHost: 'http://localhost',
          // },
          auth: true,
          firestore: true,
          storage: true
        }
      }
    ],
    '@nuxtjs/axios',
  ],

  axios: {
    // proxy: true
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  // vuetify: {
  //   customVariables: ['~/assets/variables.scss'],
  //   theme: {
  //     dark: true,
  //     themes: {
  //       dark: {
  //         primary: colors.blue.darken2,
  //         accent: colors.grey.darken3,
  //         secondary: colors.amber.darken3,
  //         info: colors.teal.lighten1,
  //         warning: colors.amber.base,
  //         error: colors.deepOrange.accent4,
  //         success: colors.green.accent3
  //       }
  //     }
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader',
        ],
      });
    },
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://locahost:3000',
    apiURL: process.env.API_URL || 'http://localhost:3333',
  },

  privateRuntimeConfig: {
    secret: process.env.SECRET_KEY,
    emailAddress: process.env.EMAIL_KEY,
    password: process.env.EMAIL_PASSWORD,
  },
}
