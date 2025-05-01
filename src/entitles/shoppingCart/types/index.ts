import {ICodeForm, ICodeResponse} from '@/shared/types/code.interface'
import {UseFormReturn} from 'react-hook-form'

export interface IShoppingCartCodeForm {
	form: UseFormReturn<ICodeForm, undefined>
	onSubmit: (values: ICodeForm) => void
	isPending: boolean
}

export interface IShoppingCartCheckout {
	totalPrice: number
	codeData?: ICodeResponse
}


export interface IShoppingCartCheckoutTopProps {
	totalPrice: number
}