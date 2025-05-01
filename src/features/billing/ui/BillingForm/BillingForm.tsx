import {BillingFields} from '@/entitles/billing'
import {useBillingForm} from '@/shared/hooks/api/useBillingForm'
import {Button} from '@/shared/shad-cn/ui/Button'
import {Checkbox} from '@/shared/shad-cn/ui/Checkbox'
import {Form, FormControl, FormField, FormItem} from '@/shared/shad-cn/ui/Form'
import styles from './BillingForm.module.scss'

export const BillingForm = () => {
	const {form, onSubmit, isPending} = useBillingForm()

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
				<BillingFields form={form} isPending={isPending} />
				<FormField
					control={form.control}
					name='saveInfo'
					render={({field}) => (
						<FormItem className={styles.checkboxContainer}>
							<FormControl>
								<Checkbox
									id='save'
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
							<label htmlFor='save' className={styles.checkbox}>
								Save my billing information for future purchases
							</label>
						</FormItem>
					)}
				/>
				<Button
					type='submit'
					disabled={isPending}
					variant='sign'
					className={styles.submitButton}
				>
					Continue to delivery
				</Button>
			</form>
		</Form>
	)
}
