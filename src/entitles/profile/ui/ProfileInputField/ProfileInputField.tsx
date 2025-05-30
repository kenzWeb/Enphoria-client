import {useUpdateProfile} from '@/shared/hooks/api/useUpdateProfile'
import {useEffect, useRef, useState} from 'react'
import {createProfileFieldHandlers, syncFieldValue} from '../../model'
import {IProfileInputFieldProps} from '../../types'
import styles from './ProfileInputField.module.scss'

export const ProfileInputField = ({
	value,
	title,
	fieldName,
}: IProfileInputFieldProps) => {
	const [isDisabled, setIsDisabled] = useState<boolean>(true)
	const inputRef = useRef<HTMLInputElement>(null)

	const {onSubmit, form, isPending} = useUpdateProfile()

	const fieldValue = form.watch(fieldName)

	useEffect(() => {
		syncFieldValue({
			value,
			fieldName,
			form,
			fieldValue,
		})
	}, [value, fieldName, form, fieldValue])

	const {handleChange, handleCancel, handleSubmit} = createProfileFieldHandlers(
		{
			fieldName,
			value,
			form,
			onSubmit,
			isPending,
			setIsDisabled,
			inputRef,
		},
	)

	return (
		<div className={styles.container}>
			<div className={styles.inputGroup}>
				<h2 className={styles.label}>{title}</h2>
				<input
					className={styles.input}
					placeholder={value}
					value={fieldValue || ''}
					ref={inputRef}
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
