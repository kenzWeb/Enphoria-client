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
