// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue'
import '@rds/asuo-theme'
import '~/assets/styles.scss'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet', // Fontawesome CDN
    href:
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  })
  head.link.push({
    rel: 'stylesheet', // Material Icons CDN
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
  })
  head.meta.push({
    name: 'keywords',
    content: 'Manguito, Peachfaced Lovebird, pet, parrot, lovebird, blog',
  })
}
