// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, {transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig:{
    public:{
      apiBaseUrl: process.env.API_BASE_URL
    }
  },
  build:{
    transpile:['vuetify']
  },
  modules:[
    (_options, nuxt) =>{
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({autoImport: true}))
      })
    }
  ],
  vite:{
    vue:{
      template:{
        transformAssetUrls
      }
    }
  }
})
