import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useCommonStore = defineStore('store', () => {
    
  /** エラーメッセージ */
  const errorMessage: Ref<string[]> = ref([])

  /**
   * メッセージを追加
   * @param message 追加するメッセージ
   */
  const addMessage = (message: string) => {
    errorMessage.value = [...errorMessage.value, message]
  }

  /**
   * メッセージを初期化
   */
  const flushMessage = () => {
    errorMessage.value = []
  }

  return {
    errorMessage,
    setMessage: addMessage,
    flushMessage,
  }
})
