import { BillingFields } from '@/entitles/billing'
import { Button } from '@/shared/shad-cn/ui/Button'
import { Form } from '@/shared/shad-cn/ui/Form'
import { IBillingForm } from '@/shared/types/billing.interface'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './BillingForm.module.scss'

export const BillingForm = () => {
	const [isPending, setIsPending] = useState(false)

	const form = useForm<IBillingForm>({
		defaultValues: {
			firstName: '',
			lastName: '',
			countryRegion: '',
			company: '',
			streetAddress: '',
			apartmentSuite: '',
			city: '',
			postalCode: '',
			phone: '',
			saveInfo: false,
		},
	})

	const onSubmit = (data: IBillingForm) => {
		setIsPending(true)
		console.log(data)

		setIsPending(false)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
				<BillingFields form={form} isPending={isPending} />
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
