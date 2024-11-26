import {IUser} from './user.interface'

export interface IShippingAddress {
	id?: number
	streetAddress?: string
	apartment?: string
	city?: string
	state?: string
	postalCode?: string
	createdAt?: Date
	updatedAt?: Date
	userId?: number
	user?: IUser
}
