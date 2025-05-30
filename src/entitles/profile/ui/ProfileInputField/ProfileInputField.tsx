import {useUpdateProfile} from '@/shared/hooks/api/useUpdateProfile'
import {IUserUpdate} from '@/shared/types/user.interface'
import {useEffect, useRef, useState} from 'react'
import styles from './ProfileInputField.module.scss'

type ProfileInputFieldProps = {
	value?: string
	title?: string
	fieldName: 'name' | 'email'
}

export const ProfileInputField = ({
	value,
	title,
	fieldName,
}: ProfileInputFieldProps) => {
	const [isDisabled, setIsDisabled] = useState<boolean>(true)
	const ref = useRef<HTMLInputElement>(null)

	const {onSubmit, form, isPending} = useUpdateProfile()

	const fieldValue = form.watch(fieldName)

	useEffect(() => {
		if (value && !fieldValue) {
			form.setValue(fieldName, value)
		}
	}, [value, fieldName, form, fieldValue])

	const handleChange = () => {
		setIsDisabled(false)

		if (isDisabled && ref.current) {
			setTimeout(() => {
				ref.current?.focus()
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

	return (
		<div className={styles.container}>
			<div className={styles.inputGroup}>
				<h2 className={styles.label}>{title}</h2>
				<input
					className={styles.input}
					placeholder={value}
					value={fieldValue || ''}
					ref={ref}
					disabled={isDisabled || isPending}
					onChange={(e) => form.setValue(fieldName, e.target.value)}
				/>
			</div>
			<div>
				{isDisabled ? (
					<h2 onClick={handleChange} className={styles.button}>
						Change
					</h2>
				) : (
					<div className={styles.buttonsContainer}>
						<button
							type='button'
							onClick={handleSubmit}
							className={styles.button}
							disabled={isPending}
						>
							{isPending ? 'Saving...' : 'Save'}
						</button>

						<button
							type='button'
							onClick={handleCancel}
							className={styles.button}
						>
							Cancel
						</button>
					</div>
				)}
			</div>
		</div>
	)
}
