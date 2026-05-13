import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/style.css'

// datepicker
import { VueDatePicker } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import { defineRule, configure } from 'vee-validate';
import { required, max } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n';
import ja from '@vee-validate/i18n/dist/locale/ja.json'

// vee-validate設定
defineRule('required', required)
defineRule('max', max)
configure({
  // メッセージを日本語へ
  generateMessage: localize('ja', {
    messages: ja.messages,
  }),
})
setLocale('ja')

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('VueDatePicker', VueDatePicker);

app.mount('#app')
