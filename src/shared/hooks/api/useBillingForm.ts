import {useForm} from 'react-hook-form'

export function useBillingForm() {
	const navigate = useNavigate()

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
		},
	})

	// const {mutate, isPending} = useMutation({
	// 	mutationKey: ['auth user'],
	// 	mutationFn: (data: IBillingForm) =>
	// 		authService.main(isReg ? 'register' : 'login', data),
	// 	onSuccess() {
	// 		toast.success('Successfully logged in')
	// 		form.reset()
	// 		navigate(PUBLIC_URL.home())
	// 	},
	// 	onError(error) {
	// 		if (error instanceof Error) {
	// 			toast.error(error.message)
	// 		} else {
	// 			toast.error('Something went wrong')
	// 		}
	// 	},
	// })

	// const onSubmit: SubmitHandler<IAuthForm> = (data) => {
	// 	mutate(data)
	// }

	return {form}
}
