import {useCodeStore} from '@/shared/store/code.store'

export const getCurrentPromoCode = () => {
	const state = useCodeStore.getState()
	return state.code
}

export const resetPromoCode = () => {
	useCodeStore.getState().reset()
}

export const subscribeToCodeChanges = (callback: (code: string) => void) => {
	return useCodeStore.subscribe(
		(state) => state.code,
		(code) => callback(code),
	)
}
