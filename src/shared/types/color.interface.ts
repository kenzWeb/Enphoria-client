import {IProduct} from './product.interface'

export interface IColor {
	id: number
	name: string
	value: string
	products: IProduct[]
}

export interface IColorInput extends Pick<IColor, 'name' | 'value'> {}
