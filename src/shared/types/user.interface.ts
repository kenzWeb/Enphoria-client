import {IOrder} from './order.interface'
import {IProduct} from './product.interface'
import {IShippingAddress} from './shipping-address.interface'

export interface IUser {
	id: number
	name: string
	email: string
	password: string
	picture: string
	createdAt: Date
	updatedAt: Date
	favorites: IProduct[]
	orders: IOrder[]
	shippingAddress: IShippingAddress[]
}

export interface IUserUpdate extends Pick<IUser, 'name' | 'email'> {
	picture?: string
}

export interface IUserChangePassword {
	oldPassword: string
	newPassword: string
}

export interface IPasswordChangeForm extends IUserChangePassword {
	confirmPassword: string
}
