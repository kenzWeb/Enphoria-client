import {IProduct} from './product.interface'

export interface ISize {
	id: number
	name: string
	products: IProduct[]
}

export interface ISizeInput extends Pick<ISize, 'name'> {}
