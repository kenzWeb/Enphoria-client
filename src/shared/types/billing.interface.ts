export interface IBillingForm {
	firstName: string
	lastName: string
	countryRegion: string
	company?: string
	streetAddress: string
	apartmentSuite?: string
	city: string
	postalCode: string
	phone: string
	saveInfo?: boolean
}

export interface IBillingResponse {
	isValid: boolean
	message: string
	billing: {
		id: string
		firstName: string
		lastName: string
		countryRegion: string
		company?: string
		streetAddress: string
		apartmentSuite?: string
		city: string
		postalCode: string
		phone: string
		createdAt: string
		updatedAt: string
		userId: string
	}
}
