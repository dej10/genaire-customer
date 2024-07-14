/** Module Options */
import process from 'node:process'
import headScripts from './commons/head-scripts'

const lodashOptions = {
  prefix: 'lodash',
  prefixSkip: false
}
export default defineNuxtConfig({
  pages: true,

  app: {
    head: {
      bodyAttrs: {
        class: 'body',
      },
    },
    script: headScripts() as any
  },

  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/webflow.css',
    '@/assets/css/genaire-restake.webflow.css',
    // '~/assets/css/others/main.css'
  ],

  // vite: {
  //   server: {
  //     hmr: {
  //       clientPort: 3002
  //     }
  //   }
  // },

  devServer: {
    port: 3002
  },

  runtimeConfig: {
    public: {
      appENV: import.meta.env.APP_ENV,
      baseURL: import.meta.env.BASE_URL
    }
  },

  modules: [
    // '@nuxtjs/tailwindcss',
    ['nuxt-lodash', lodashOptions],
    '@nuxtjs/google-fonts'
  ],

  routeRules: {
    '/nitro/**': { proxy: '/api/**' }
  },

  components: [
    '~/components/shimmers',
    '~/components/modals',
    '~/components/partials',
    '~/components/widgets',
    '~/components'
  ],

  googleFonts: {
    families: {
      Poppins: {
        wght: [300, 400, 600, 700, 800, 900],
      },
    },
    subsets: ['latin'],
    display: 'swap',
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false,
  },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind/main.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    viewer: false,
    quiet: true
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  }

})
