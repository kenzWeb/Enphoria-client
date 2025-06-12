import {useAddAddressForm} from '@/features/profile/hooks/useAddAddressForm'
import {Button} from '@/shared/shad-cn/ui/Button'
import styles from './AddressForm.module.scss'

export const AddressForm = () => {
	const {formData, handleInputChange, handleSubmit, handleCancel, isCreating} =
		useAddAddressForm()

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.row}>
				<div className={styles.field}>
					<label className={styles.label}>First Name *</label>
					<input
						type='text'
						name='firstName'
						value={formData.firstName}
						onChange={handleInputChange}
						className={styles.input}
						required
					/>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>Last Name *</label>
					<input
						type='text'
						name='lastName'
						value={formData.lastName}
						onChange={handleInputChange}
						className={styles.input}
						required
					/>
				</div>
			</div>

			<div className={styles.row}>
				<div className={styles.field}>
					<label className={styles.label}>Region *</label>
					<input
						type='text'
						name='region'
						value={formData.region}
						onChange={handleInputChange}
						className={styles.input}
						required
					/>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>Company</label>
					<input
						type='text'
						name='company'
						value={formData.company}
						onChange={handleInputChange}
						className={styles.input}
					/>
				</div>
			</div>

			<div className={styles.field}>
				<label className={styles.label}>Street Address *</label>
				<input
					type='text'
					name='streetAddress'
					value={formData.streetAddress}
					onChange={handleInputChange}
					className={styles.input}
					required
				/>
			</div>

			<div className={styles.row}>
				<div className={styles.field}>
					<label className={styles.label}>Suite/Apartment</label>
					<input
						type='text'
						name='suite'
						value={formData.suite}
						onChange={handleInputChange}
						className={styles.input}
					/>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>City *</label>
					<input
						type='text'
						name='city'
						value={formData.city}
						onChange={handleInputChange}
						className={styles.input}
						required
					/>
				</div>
			</div>

			<div className={styles.row}>
				<div className={styles.field}>
					<label className={styles.label}>State</label>
					<input
						type='text'
						name='state'
						value={formData.state}
						onChange={handleInputChange}
						className={styles.input}
					/>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>Postal Code *</label>
					<input
						type='text'
						name='postalCode'
						value={formData.postalCode}
						onChange={handleInputChange}
						className={styles.input}
						required
					/>
				</div>
			</div>

			<div className={styles.field}>
				<label className={styles.label}>Phone *</label>
				<input
					type='tel'
					name='phone'
					value={formData.phone}
					onChange={handleInputChange}
					className={styles.input}
					required
				/>
			</div>

			<div className={styles.field}>
				<label className={styles.label}>Delivery Instruction</label>
				<textarea
					name='instruction'
					value={formData.instruction}
					onChange={handleInputChange}
					className={styles.textarea}
					rows={4}
					placeholder='Any specific delivery instructions...'
				/>
			</div>

			<div className={styles.actions}>
				<Button
					variant='outline'
					size='md'
					type='button'
					onClick={handleCancel}
					className={styles.cancelButton}
					disabled={isCreating}
				>
					Cancel
				</Button>
				<Button
					variant='violet'
					size='md'
					type='submit'
					className={styles.submitButton}
					disabled={isCreating}
				>
					{isCreating ? 'Saving...' : 'Save Address'}
				</Button>
			</div>
		</form>
	)
}
