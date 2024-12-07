import {SERVER_URL} from '@/shared/config/private.config'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = createApi({
	reducerPath: 'api',

	baseQuery: fetchBaseQuery({baseUrl: SERVER_URL}),
	endpoints: () => ({}),
})
