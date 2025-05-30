import {PUBLIC_URL} from '@/shared/config/url.config'
import {useCreateShipping} from '@/shared/hooks/queries/shipping/useCreateShipping'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

interface IAddressFormData {
	firstName: string
	lastName: string
	region: string
	company: string
	streetAddress: string
	suite: string
	city: string
	state: string
	phone: string
	postalCode: string
	instruction: string
}

export const useAddAddressForm = () => {
	const navigate = useNavigate()
	const {createShipping, isCreating, error, isSuccess} = useCreateShipping()

	const [formData, setFormData] = useState<IAddressFormData>({
		firstName: '',
		lastName: '',
		region: '',
		company: '',
		streetAddress: '',
		suite: '',
		city: '',
		state: '',
		phone: '',
		postalCode: '',
		instruction: '',
	})

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const {name, value} = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		createShipping(formData, {
			onSuccess: () => {
				navigate(PUBLIC_URL.account('profile'))
			},
		})
	}

	const handleCancel = () => {
		navigate(PUBLIC_URL.account('profile'))
	}

	return {
		formData,
		handleInputChange,
		handleSubmit,
		handleCancel,
		isCreating,
		error,
		isSuccess,
	}
}
