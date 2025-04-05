import {Checkbox} from '@/shared/shad-cn/ui/Checkbox'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/shad-cn/ui/Form'
import {Input} from '@/shared/shad-cn/ui/Input'
import {IBillingForm} from '@/shared/types/billing.interface'
import {UseFormReturn} from 'react-hook-form'
import styles from './BillingFields.module.scss'

interface BillingFieldsProps {
	form: UseFormReturn<IBillingForm, unknown, undefined>
	isPending?: boolean
}

export const BillingFields = ({
	form,
	isPending = false,
}: BillingFieldsProps) => {
	return (
		<div className={styles.fieldsContainer}>
			<div className={styles.formRow}>
				<FormField
					control={form.control}
					name='firstName'
					rules={{
						required: 'First Name is required',
					}}
					render={({field}) => (
						<FormItem className={styles.formItem}>
							<FormLabel className={styles.label}>First Name*</FormLabel>
							<FormControl>
								<Input
									className={styles.input}
									placeholder='First Name'
									disabled={isPending}
									{...field}
								/>
							</FormControl>
							<FormMessage className={styles.message} />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='lastName'
					rules={{
						required: 'Last Name is required',
					}}
					render={({field}) => (
						<FormItem className={styles.formItem}>
							<FormLabel className={styles.label}>Last Name*</FormLabel>
							<FormControl>
								<Input
									className={styles.input}
									placeholder='Last Name'
									disabled={isPending}
									{...field}
								/>
							</FormControl>
							<FormMessage className={styles.message} />
						</FormItem>
					)}
				/>
			</div>

			<div className={styles.formRow}>
				<FormField
					control={form.control}
					name='countryRegion'
					rules={{
						required: 'Country/Region is required',
					}}
					render={({field}) => (
						<FormItem className={styles.formItem}>
							<FormLabel className={styles.label}>Country / Region*</FormLabel>
							<FormControl>
								<Input
									className={styles.input}
									placeholder='Country / Region'
									disabled={isPending}
									{...field}
								/>
							</FormControl>
							<FormMessage className={styles.message} />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='company'
					render={({field}) => (
						<FormItem className={styles.formItem}>
							<FormLabel className={styles.label}>Company Name</FormLabel>
							<FormControl>
								<Input
									className={styles.input}
									placeholder='Company (optional)'
									disabled={isPending}
									{...field}
								/>
							</FormControl>
							<FormMessage className={styles.message} />
						</FormItem>
					)}
				/>
			</div>

			<FormField
				control={form.control}
				name='streetAddress'
				rules={{
					required: 'Street Address is required',
				}}
				render={({field}) => (
					<FormItem>
						<FormLabel className={styles.label}>Street Address*</FormLabel>
						<FormControl>
							<Input
								className={styles.input}
								placeholder='House number and street name'
								disabled={isPending}
								{...field}
							/>
						</FormControl>
						<FormMessage className={styles.message} />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name='apartmentSuite'
				render={({field}) => (
					<FormItem>
						<FormLabel className={styles.label}>Apt, suite, unit</FormLabel>
						<FormControl>
							<Input
								className={styles.input}
								placeholder='apartment, suite, unit, etc. (optional)'
								disabled={isPending}
								{...field}
							/>
						</FormControl>
						<FormMessage className={styles.message} />
					</FormItem>
				)}
			/>

			<div className={styles.formRow}>
				<FormField
					control={form.control}
					name='city'
					rules={{
						required: 'City is required',
					}}
					render={({field}) => (
						<FormItem className={styles.formItem}>
							<FormLabel className={styles.label}>City*</FormLabel>
							<FormControl>
								<Input
									className={styles.input}
									placeholder='Town / City'
									disabled={isPending}
									{...field}
								/>
							</FormControl>
							<FormMessage className={styles.message} />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='postalCode'
					rules={{
						required: 'Postal Code is required',
					}}
					render={({field}) => (
						<FormItem className={styles.formItem}>
							<FormLabel className={styles.label}>Postal Code*</FormLabel>
							<FormControl>
								<Input
									className={styles.input}
									placeholder='Postal Code'
									disabled={isPending}
									{...field}
								/>
							</FormControl>
							<FormMessage className={styles.message} />
						</FormItem>
					)}
				/>
			</div>

			<FormField
				control={form.control}
				name='phone'
				rules={{
					required: 'Phone is required',
				}}
				render={({field}) => (
					<FormItem>
						<FormLabel className={styles.label}>Phone*</FormLabel>
						<FormControl>
							<Input
								className={styles.input}
								placeholder='Phone'
								disabled={isPending}
								{...field}
							/>
						</FormControl>
						<FormMessage className={styles.message} />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name='saveInfo'
				render={({field}) => (
					<FormItem className={styles.checkboxItem}>
						<div className={styles.checkboxWrapper}>
							<FormControl>
								<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange}
									className={styles.checkbox}
								/>
							</FormControl>
							<FormLabel className={styles.checkboxLabel}>
								Save my information for a faster checkout
							</FormLabel>
						</div>
					</FormItem>
				)}
			/>
		</div>
	)
}
