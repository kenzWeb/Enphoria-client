import {IUserUpdate} from '@/shared/types/user.interface'
import {UseFormReturn} from 'react-hook-form'
import {
	IPasswordFieldHandlers,
	IProfileFieldHandlers,
	ProfileFieldName,
} from '../types'

export const createProfileFieldHandlers = ({
	fieldName,
	value,
	form,
	onSubmit,
	setIsDisabled,
	inputRef,
}: {
	fieldName: ProfileFieldName
	value?: string
	form: UseFormReturn<IUserUpdate>
	onSubmit: (data: Partial<IUserUpdate>) => void
	isPending: boolean
	setIsDisabled: (disabled: boolean) => void
	inputRef: React.RefObject<HTMLInputElement>
}): IProfileFieldHandlers => {
	const handleChange = () => {
		setIsDisabled(false)

		if (inputRef.current) {
			setTimeout(() => {
				inputRef.current?.focus()
			}, 0)
		}
	}

	const handleCancel = () => {
		setIsDisabled(true)
		form.setValue(fieldName, value || '')
	}

	const handleSubmit = () => {
		const data = {
			[fieldName]: form.getValues(fieldName),
		} as Partial<IUserUpdate>
		onSubmit(data)
		setIsDisabled(true)
	}

	return {
		handleChange,
		handleCancel,
		handleSubmit,
	}
}

export const createPasswordFieldHandlers = ({
	setIsDisabled,
}: {
	setIsDisabled: (disabled: boolean) => void
}): IPasswordFieldHandlers => {
	const handleChange = () => {
		setIsDisabled(false)
	}

	const handleCancel = () => {
		setIsDisabled(true)
	}

	return {
		handleChange,
		handleCancel,
	}
}

export const syncFieldValue = ({
	value,
	fieldName,
	form,
	fieldValue,
}: {
	value?: string
	fieldName: ProfileFieldName
	form: UseFormReturn<IUserUpdate>
	fieldValue: string
}) => {
	if (value && !fieldValue) {
		form.setValue(fieldName, value)
	}
}

export const createUpdateData = (
	fieldName: ProfileFieldName,
	value: string,
): Partial<IUserUpdate> => {
	return {
		[fieldName]: value,
	} as Partial<IUserUpdate>
}
