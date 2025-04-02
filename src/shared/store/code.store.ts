import {create} from 'zustand'
import {CodeStore, ICodeResponse} from '../types/code.interface'

const initialCodeState: ICodeResponse = {
	id: '',
	code: '',
	value: 0,
	createdAt: '',
	updatedAt: '',
	isUsed: false,
}

export const useCodeStore = create<CodeStore>()((set) => ({
	...initialCodeState,
	setCode: (codeData: ICodeResponse) => set({...codeData, isUsed: true}),
	reset: () => set({...initialCodeState, isUsed: false}),
}))
