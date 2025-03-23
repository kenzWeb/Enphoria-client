import {IUser} from './user.interface'

export interface IAuthForm {
	name: string
	email: string
	password: string
}

export interface IAuthResponse {
	user: IUser
	accessToken: string
}

export interface ICheckAuth {
	authenticated: boolean
}
