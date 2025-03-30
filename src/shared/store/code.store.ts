import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {CodeStore, ICodeResponse} from '../types/code.interface'

const initialCodeState: ICodeResponse = {
	id: '',
	code: '',
	value: 0,
	createdAt: '',
	updatedAt: '',
}

export const useCodeStore = create<CodeStore>()(
	persist(
		(set) => ({
			...initialCodeState,
			setCode: (codeData: ICodeResponse) => set({...codeData}),
			reset: () => set({...initialCodeState}),
		}),
		{
			name: 'code-storage',
		},
	),
)
