import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'

interface AuthStore {
	isAuth: boolean
	setAuth: (isAuth: boolean) => void
	getAuth: () => boolean
}

const initialAuthState = {
	isAuth: false,
}

export const useAuthStore = create<AuthStore>()(
	persist(
		(set, get) => ({
			...initialAuthState,

			setAuth: (isAuth: boolean) => {
				set(() => ({isAuth}))
			},

			getAuth: () => get().isAuth,
		}),
		{
			name: 'auth-storage',
			storage: createJSONStorage(() => localStorage),
		},
	),
)
