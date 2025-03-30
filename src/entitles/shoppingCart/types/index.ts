import {ICodeForm} from '@/shared/types/code.interface'
import {UseFormReturn} from 'react-hook-form'

export interface IShoppingCartCodeForm {
	form: UseFormReturn<ICodeForm, undefined>
	onSubmit: (values: ICodeForm) => void
	isPending: boolean
}
