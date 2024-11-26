import {ICategory} from './category.interface'
import {IColor} from './color.interface'

export interface IProduct {
	id: string
	name: string
	description: string
	gender: EnumGender
	price: number
	images: string[]
	category: ICategory
	color: IColor
}

export interface IProductInput
	extends Omit<IProduct, 'id' | 'category' | 'color'> {
	categoryId: string
	styleId: string
}

enum EnumGender {
	MALE,
	FEMALE,
}
