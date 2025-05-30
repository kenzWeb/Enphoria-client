import {IPasswordChangeForm} from '@/shared/types/user.interface'
import {getApiErrorMessage} from '@/shared/utils/api-error'
import {UseFormReturn} from 'react-hook-form'
import toast from 'react-hot-toast'
import {IPasswordFormHandlers, IPasswordValidation} from '../types'

export const createPasswordValidation = (
	watchedValues: IPasswordChangeForm,
): IPasswordValidation => {
	const isFormValid =
		watchedValues.oldPassword.length > 0 &&
		watchedValues.newPassword.length >= 6 &&
		watchedValues.confirmPassword.length > 0 &&
		watchedValues.newPassword === watchedValues.confirmPassword

	const validatePasswords = (newPassword: string, confirmPassword: string) => {
		if (newPassword !== confirmPassword) {
			return {
				isValid: false,
				message: 'Passwords do not match',
			}
		}
		return {isValid: true}
	}

	const validateMinLength = (password: string) => {
		if (password.length < 6) {
			return {
				isValid: false,
				message: 'Password must be at least 6 characters long',
			}
		}
		return {isValid: true}
	}

	return {
		isFormValid,
		validatePasswords,
		validateMinLength,
	}
}

export const showPasswordError = (message: string) => {
	toast.error(message, {
		duration: 3000,
		position: 'top-right',
		style: {
			background: '#f44336',
			color: '#fff',
			borderRadius: '8px',
			padding: '12px 16px',
			fontSize: '14px',
		},
	})
}

export const createPasswordFormHandlers = ({
	form,
	onSubmit,
	onSuccess,
	reset,
}: {
	form: UseFormReturn<IPasswordChangeForm>
	onSubmit: (data: {
		oldPassword: string
		newPassword: string
	}) => Promise<unknown>
	onSuccess?: () => void
	reset: () => void
}): IPasswordFormHandlers => {
	const handleSubmit = async () => {
		const formData = form.getValues()
		const {validatePasswords, validateMinLength} =
			createPasswordValidation(formData)

		const passwordValidation = validatePasswords(
			formData.newPassword,
			formData.confirmPassword,
		)
		if (!passwordValidation.isValid) {
			showPasswordError(passwordValidation.message!)
			return
		}

		const lengthValidation = validateMinLength(formData.newPassword)
		if (!lengthValidation.isValid) {
			showPasswordError(lengthValidation.message!)
			return
		}

		try {
			await onSubmit({
				oldPassword: formData.oldPassword,
				newPassword: formData.newPassword,
			})

			reset()
			onSuccess?.()
		} catch (error) {
			// Используем getApiErrorMessage для правильного извлечения сообщения из IApiError
			const errorMessage = getApiErrorMessage(error)
			showPasswordError(errorMessage)
		}
	}

	const handleCancel = () => {
		reset()
	}

	return {
		handleSubmit,
		handleCancel,
	}
}
