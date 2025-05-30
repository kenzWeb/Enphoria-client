import {IApiError} from '@/shared/types/api.error'

export const getApiErrorMessage = (error: unknown): string => {
	if (error && typeof error === 'object' && 'response' in error) {
		const apiError = error as IApiError

		if (apiError.response?.data?.message) {
			return apiError.response.data.message
		}

		if (apiError.message) {
			return apiError.message
		}
	}

	if (error instanceof Error) {
		return error.message
	}

	if (typeof error === 'string') {
		return error
	}

	return 'Something went wrong'
}

export const getApiErrorStatus = (error: unknown): number | undefined => {
	if (error && typeof error === 'object' && 'response' in error) {
		const apiError = error as IApiError
		return apiError.response?.status || apiError.status
	}

	return undefined
}

export const isApiErrorWithStatus = (
	error: unknown,
	status: number,
): boolean => {
	const errorStatus = getApiErrorStatus(error)
	return errorStatus === status
}

export const isUnauthorizedError = (error: unknown): boolean => {
	return isApiErrorWithStatus(error, 401)
}

export const isForbiddenError = (error: unknown): boolean => {
	return isApiErrorWithStatus(error, 403)
}

export const isNotFoundError = (error: unknown): boolean => {
	return isApiErrorWithStatus(error, 404)
}

export const isValidationError = (error: unknown): boolean => {
	return isApiErrorWithStatus(error, 422)
}
