export interface IBase {
	id?: number
	name?: string
	gender?: string
	type?: string
	brand?: string
	table?: string
	color?: string
	img?: string
	price?: number
}

export interface IFavorite {
	favorite: IBase[]
}
