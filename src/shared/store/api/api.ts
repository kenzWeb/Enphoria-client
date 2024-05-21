import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_URLS} from '../../constants/constants'

export const api = createApi({
	reducerPath: 'api',

	baseQuery: fetchBaseQuery({baseUrl: API_URLS}),
	endpoints: () => ({}),
})
