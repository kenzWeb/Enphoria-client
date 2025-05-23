import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'
import {CartStore, ICartItem} from '../types/cart.interface'

const initialCartState = {
	cart: [],
}

export const useCartStore = create<CartStore>()(
	persist(
		(set, get) => ({
			...initialCartState,
			addToCart: (product: ICartItem) => {
				const key = `${product.id}-${product.size}-${product.color}`
				const existing = get().cart.find((item) => item.variantKey === key)
				if (existing) {
					set((state: CartStore) => ({
						cart: state.cart.map((item) =>
							item.variantKey === key
								? {...item, quantity: item.quantity + product.quantity}
								: item,
						),
					}))
				} else {
					set((state: CartStore) => ({
						cart: [...state.cart, {...product, variantKey: key}],
					}))
				}
			},
			removeFromCart: (key: string) => {
				set((state: CartStore) => ({
					cart: state.cart.filter((item) => item.variantKey !== key),
				}))
			},
			getCartSummary: () => {
				const cart = get().cart
				const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
				const totalPrice = cart.reduce(
					(sum, item) => sum + item.price * item.quantity,
					0,
				)
				return {totalItems, totalPrice}
			},
			plus: (key: string) => {
				set((state: CartStore) => ({
					cart: state.cart.map((item) =>
						item.variantKey === key
							? {...item, quantity: item.quantity + 1}
							: item,
					),
				}))
			},
			minus: (key: string) => {
				set((state: CartStore) => ({
					cart: state.cart.map((item) =>
						item.variantKey === key
							? {...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1}
							: item,
					),
				}))
			},
			reset: () => {
				set(() => ({
					cart: [],
				}))
			},
		}),
		{
			name: 'cart-storage',
			storage: createJSONStorage(() => localStorage),
		},
	),
)
