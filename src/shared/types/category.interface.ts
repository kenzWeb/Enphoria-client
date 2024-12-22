import {IProduct} from './product.interface'

export interface ICategory {
	id: number
	name: string
	products: IProduct[]
}

export interface ICategoryInput extends Pick<ICategory, 'name'> {}
