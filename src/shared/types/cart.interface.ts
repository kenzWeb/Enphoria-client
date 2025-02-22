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
