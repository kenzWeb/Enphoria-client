import {IBase, IFavorite} from '@/shared/types/types'
import {createSlice} from '@reduxjs/toolkit'

const initialState: IFavorite = {
	favorite: JSON.parse(localStorage.getItem('favorite') || '[]'),
}

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addToFavorite: (state, action: {payload: IBase}) => {
			const isExist = state.favorite.some(
				(item) => item?.id === action.payload.id,
			)

			if (isExist) {
				state.favorite = state.favorite.filter(
					(item) => item?.id !== action.payload.id,
				)
			} else {
				state.favorite.push(action.payload)
			}
			localStorage.setItem('favorite', JSON.stringify(state.favorite))
		},
		removeFromFavorite: (state, action: {payload: IBase}) => {
			state.favorite = state.favorite.filter(
				(item) => item?.id !== action.payload.id,
			)
			localStorage.setItem('favorite', JSON.stringify(state.favorite))
		},
	},
})

export const {addToFavorite, removeFromFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer
