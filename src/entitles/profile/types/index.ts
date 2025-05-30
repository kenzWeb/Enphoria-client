import {IShippingAddress} from '@/shared/types/shipping-address.interface'
import {IUserUpdate} from '@/shared/types/user.interface'
import {UseFormReturn} from 'react-hook-form'

export type ProfileFieldName = 'name' | 'email'

export interface IProfileInputFieldProps {
	value?: string
	title?: string
	fieldName: ProfileFieldName
}

export interface IProfileFieldState {
	isDisabled: boolean
	setIsDisabled: (disabled: boolean) => void
}

export interface IUseUpdateProfile {
	onSubmit: (data: Partial<IUserUpdate>) => void
	form: UseFormReturn<IUserUpdate>
	isPending: boolean
}

export interface IProfileFieldHandlers {
	handleChange: () => void
	handleCancel: () => void
	handleSubmit: () => void
}

export interface IProfileFormData extends Partial<IUserUpdate> {
	[key: string]: string | undefined
}

export interface IPasswordChangeFieldProps {
	className?: string
}

export interface IPasswordFieldState {
	isDisabled: boolean
	setIsDisabled: (disabled: boolean) => void
}

export interface IPasswordFieldHandlers {
	handleChange: () => void
	handleCancel: () => void
}

export interface IProfileAddressCard {
	address: IShippingAddress
}
