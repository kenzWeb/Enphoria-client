import {IPasswordChangeForm} from '@/shared/types/user.interface'
import {UseFormReturn} from 'react-hook-form'

export interface IPasswordChangeFormProps {
	onSuccess?: () => void
}

export interface IUseChangePassword {
	onSubmit: (data: {
		oldPassword: string
		newPassword: string
	}) => Promise<unknown>
	form: UseFormReturn<IPasswordChangeForm>
	isPending: boolean
}

export interface IPasswordValidation {
	isFormValid: boolean
	validatePasswords: (
		newPassword: string,
		confirmPassword: string,
	) => {isValid: boolean; message?: string}
	validateMinLength: (password: string) => {isValid: boolean; message?: string}
}

export interface IPasswordFormHandlers {
	handleSubmit: () => Promise<void>
	handleCancel: () => void
}
