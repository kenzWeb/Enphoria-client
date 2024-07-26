import favoriteSlice from '@/shared/store/slices/favoriteSlice'
import {combineReducers} from '@reduxjs/toolkit'
import {api} from '../../shared/store/api/api'

export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	favorite: favoriteSlice,
})
