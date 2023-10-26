// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-appwrite'],
  appwrite: {
    endpoint: 'https://cloud.appwrite.io/v1',
    project: '65377c2ccd4d591ee36b'
  }
})
