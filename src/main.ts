import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/styles/main.scss'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import { defineRule, configure } from 'vee-validate';
import { required } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n';
import ja from '@vee-validate/i18n/dist/locale/ja.json'
import './style.css'

// vee-validate設定
defineRule('required', required)
configure({
  // メッセージを日本語へ
  generateMessage: localize('ja', {
    messages: ja.messages,
  }),
})
setLocale('ja')

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light', // 'system' | 'light' | 'dark'
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
