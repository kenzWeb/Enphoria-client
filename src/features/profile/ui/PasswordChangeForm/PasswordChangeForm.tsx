import { useChangePassword } from '@/shared/hooks/api/useChangePassword'
import { Button } from '@/shared/shad-cn/ui/Button'
import { createPasswordFormHandlers, createPasswordValidation } from '../../model'
import { IPasswordChangeFormProps } from '../../types'
import styles from './PasswordChangeForm.module.scss'

export const PasswordChangeForm = ({onSuccess}: IPasswordChangeFormProps) => {
	const {onSubmit, form, isPending} = useChangePassword()

	const {
		formState: {errors},
		register,
		watch,
		reset,
	} = form

	const watchedValues = watch()
	const {isFormValid} = createPasswordValidation(watchedValues)

	const {handleSubmit, handleCancel} = createPasswordFormHandlers({
		form,
		onSubmit,
		onSuccess,
		reset,
	})

	return (
		<div className={styles.fields}>
			<div className={styles.field}>
				<input
					{...register('oldPassword', {
						required: 'Current password is required',
					})}
					type='password'
					placeholder='Current Password'
					className={styles.input}
					disabled={isPending}
				/>
				{errors.oldPassword && (
					<span className={styles.error}>{errors.oldPassword.message}</span>
				)}
			</div>

			<div className={styles.field}>
				<input
					{...register('newPassword', {
						required: 'New password is required',
						minLength: {
							value: 6,
							message: 'Password must be at least 6 characters long',
						},
					})}
					type='password'
					placeholder='New Password'
					className={styles.input}
					disabled={isPending}
				/>
				{errors.newPassword && (
					<span className={styles.error}>{errors.newPassword.message}</span>
				)}
			</div>

			<div className={styles.field}>
				<input
					{...register('confirmPassword', {
						required: 'Please confirm your password',
						validate: (value) =>
							value === watchedValues.newPassword || 'Passwords do not match',
					})}
					type='password'
					placeholder='Confirm New Password'
					className={styles.input}
					disabled={isPending}
				/>
				{errors.confirmPassword && (
					<span className={styles.error}>{errors.confirmPassword.message}</span>
				)}
			</div>

			<div className={styles.buttonGroup}>
				<Button
					variant='secondary'
					size='default'
					className={styles.cancelButton}
					onClick={handleCancel}
					type='button'
					disabled={isPending}
				>
					Cancel
				</Button>
				<Button
					variant='primary'
					size='default'
					className={styles.saveButton}
					onClick={handleSubmit}
					type='button'
					disabled={isPending || !isFormValid}
				>
					{isPending ? 'Saving...' : 'Save'}
				</Button>
			</div>
		</div>
	)
}
