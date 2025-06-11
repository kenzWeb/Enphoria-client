import Cookies from 'js-cookie'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken',
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
	const cookieOptions: Cookies.CookieAttributes = {
		sameSite: 'strict',
		expires: 1,
	}

	if (process.env.NODE_ENV === 'production' && process.env.APP_DOMAIN) {
		cookieOptions.domain = process.env.APP_DOMAIN
	}

	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, cookieOptions)
}

export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN)
}
