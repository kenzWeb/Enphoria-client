import { useCodeStore } from '@/shared/store/code.store'

const CodeInformation = () => {
  // Вариант 1: получить все состояние
  const codeData = useCodeStore()
  
  // Вариант 2: получить только нужные поля через селектор
  const code = useCodeStore(state => state.code)
  const value = useCodeStore(state => state.value)
  
  // Вариант 3: получить и методы, и данные
  const { id, code: promoCode, value: discount, setCode, reset } = useCodeStore()
  
  return (
    <div>
      <h3>Ваш промокод: {code}</h3>
      <p>Скидка: {value}%</p>
      <button onClick={reset}>Сбросить промокод</button>
    </div>
  )
}
