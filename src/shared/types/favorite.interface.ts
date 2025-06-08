import {IColor} from './color.interface'
import {ISize} from './size.interface'

export interface IFavorite {
	id: string
	name: string
	brand: string
	price: number
	description: string
	images: string[]
	gender: string
	type: string
	createdAt: string
	updatedAt: string
	categoryId: string
	styleId: string
	userId: string
	productColors: {
		id: string
		productId: string
		colorId: string
		userId: string | null
		color: IColor
	}[]
	productSizes: {
		id: string
		productId: string
		sizeId: string
		userId: string | null
		size: ISize
	}[]

}