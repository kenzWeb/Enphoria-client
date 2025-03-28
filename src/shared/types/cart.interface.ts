import {IProduct} from './product.interface'
import {IUser} from './user.interface'

export interface ICartItem {
	id: string
	name: string
	size: string
	color: string
	price: number
	img: string
	quantity: number
	variantKey?: string
}

export interface CartStore {
	cart: ICartItem[]
	addToCart: (product: ICartItem) => void
	removeFromCart: (id: string) => void
	plus: (id: string) => void
	minus: (id: string) => void
}

export interface IHandleAddToCart {
	selectedSize: string
	selectedColor: string
	product: IProduct | undefined
	user: IUser | undefined
	addToCart: (item: {
		id: string
		name: string
		size: string
		color: string
		price: number
		img: string
		quantity: number
	}) => void
}
