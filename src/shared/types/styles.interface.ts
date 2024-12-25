export interface IStyles {
	id: string
	name: string
	createdAt: string
	updatedAt: string
}

export interface IStylesInput extends Pick<IStyles, 'name'> {}
