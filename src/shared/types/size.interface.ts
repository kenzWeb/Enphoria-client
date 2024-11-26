import { IProduct } from './product.interface'

export interface ISize {
	id: number
	name: string
	value: string
	createdAt: Date
	updatedAt: Date
	products: IProduct[]
}

export interface ISizeInput extends Pick<ISize, 'name' | 'value'> {}
