import {PasswordChangeForm} from '@/features/profile'
import {useState} from 'react'
import {createPasswordFieldHandlers} from '../../model'
import {IPasswordChangeFieldProps} from '../../types'
import styles from './PasswordChangeField.module.scss'

export const PasswordChangeField = ({
	className,
}: IPasswordChangeFieldProps = {}) => {
	const [isDisabled, setIsDisabled] = useState<boolean>(true)

	const {handleChange, handleCancel} = createPasswordFieldHandlers({
		setIsDisabled,
	})

	const handleSuccess = () => {
		handleCancel()
	}

	return (
		<div className={`${styles.container} ${className || ''}`}>
			<div className={styles.inputGroup}>
				<h2 className={styles.label}>Password</h2>
				{isDisabled ? (
					<input
						type='text'
						value='••••••••'
						className={styles.input}
						disabled
						readOnly
					/>
				) : (
					<PasswordChangeForm onSuccess={handleSuccess} />
				)}
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
