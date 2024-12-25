import {IProduct} from '@/shared/types/product.interface'

export interface ICatalog {
	products: IProduct[]
	size?: number
	category?: boolean
	variant?: 'shop' | 'home'
}
