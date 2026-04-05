import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { VueDatePicker } from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

import { defineRule, configure } from 'vee-validate';
import { required } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n';
import ja from '@vee-validate/i18n/dist/locale/ja.json'

// ルールを登録
defineRule('required', required)
configure({
  generateMessage: localize('ja', {
    messages: ja.messages,
  }), // 日本語を設定
})
setLocale('ja')

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('VueDatePicker', VueDatePicker)

app.mount('#app')
