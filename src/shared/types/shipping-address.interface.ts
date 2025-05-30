export interface IShippingAddress {
	id: string
	firstName: string
	lastName: string
	region: string
	company?: string
	streetAddress: string
	suite?: string
	city: string
	state?: string
	phone: string
	postalCode: string
	instruction?: string
	createdAt: Date
	updatedAt: Date
}
