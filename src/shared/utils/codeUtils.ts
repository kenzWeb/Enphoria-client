import { useCodeStore } from '@/shared/store/code.store'

// Получение текущего состояния
export const getCurrentPromoCode = () => {
  const state = useCodeStore.getState()
  return state.code
}

// Использование методов
export const resetPromoCode = () => {
  useCodeStore.getState().reset()
}

// Подписка на изменения (например, для логирования)
export const subscribeToCodeChanges = (callback: (code: string) => void) => {
  return useCodeStore.subscribe(
    state => state.code,
    (code) => callback(code)
  )
}
