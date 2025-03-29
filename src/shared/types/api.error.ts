import {AxiosError, InternalAxiosRequestConfig} from 'axios'

export interface IApiErrorResponse {
	message: string
	statusCode: number
}

export interface IApiError extends Partial<AxiosError<IApiErrorResponse>> {
	message: string
	name?: string
	stack?: string
	config?: InternalAxiosRequestConfig
	code?: string
	status?: number
}
