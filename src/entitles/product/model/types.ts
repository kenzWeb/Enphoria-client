export interface IToggleItem {
	id?: string
	name?: string
	value?: string
}

export interface IProductToggleProps {
	title: string
	items?: IToggleItem[]
	isLink: boolean
	variant: 'size' | 'color'
	onSelect?: (value: string) => void
}

export interface IProductActions {
	price: number | undefined
	onAddToCart?: () => void
}