import {billingService} from '@/shared/services/billing.service'
import { IApiError } from '@/shared/types/api.error'
import {IBillingForm} from '@/shared/types/billing.interface'
import {useMutation} from '@tanstack/react-query'
import {SubmitHandler, useForm} from 'react-hook-form'
import toast from 'react-hot-toast'

export function useBillingForm(isSave?: boolean) {
	const form = useForm<IBillingForm>({
		mode: 'onChange',
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

	const {mutate, isPending} = useMutation({
		mutationKey: ['check billing'],
		mutationFn: (data: IBillingForm) =>
			billingService.checkBilling(data, data.saveInfo || isSave),
		onSuccess() {
			toast.success('Billing information is valid')
			form.reset()
		},
		onError(error: IApiError) {
			if (error.response?.data?.message) {
				toast.error(error.response.data.message)
			} else {
				toast.error('Something went wrong')
			}
		},
	})

	const onSubmit: SubmitHandler<IBillingForm> = (data) => {
		mutate(data)
	}

	return {form, isPending, onSubmit}
}
