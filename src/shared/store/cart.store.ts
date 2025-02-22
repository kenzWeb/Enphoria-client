import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { CartStore, ICartItem } from '../types/cart.interface'

const initialCartState = {
	items: {
		id: '',
		name: '',
		size: '',
		color: '',
		price: 0,
		img: '',
		quantity: 0,
	},
	cart: [],
}

export const useCartStore = create<CartStore>()(
	persist(
		(set, get) => ({
			...initialCartState,
			addToCart: (product: ICartItem) => {
				const variantKey = `${product.id}-${product.size}-${product.color}`
				const existing = get().cart.find(
					(item) => `${item.id}-${item.size}-${item.color}` === variantKey,
				)
				if (existing) {
					set((state: CartStore) => ({
						cart: state.cart.map((item) =>
							`${item.id}-${item.size}-${item.color}` === variantKey
								? {...item, quantity: item.quantity + product.quantity}
								: item,
						),
					}))
				} else {
					set((state: CartStore) => ({
						cart: [...state.cart, {...product, variantKey}],
					}))
				}
			},
			removeFromCart: (variantKey: string) => {
				set((state: CartStore) => ({
					cart: state.cart.filter((item) => item.variantKey !== variantKey),
				}))
			},
			plus: (variantKey: string) => {
				set((state: CartStore) => ({
					cart: state.cart.map((item) =>
						item.variantKey === variantKey
							? {...item, quantity: item.quantity + 1}
							: item,
					),
				}))
			},
			minus: (variantKey: string) => {
				set((state: CartStore) => ({
					cart: state.cart.map((item) =>
						item.variantKey === variantKey
							? {...item, quantity: item.quantity <= 1 ? 1 : item.quantity - 1}
							: item,
					),
				}))
			},
		}),

		{
			name: 'cart-storage',
			storage: createJSONStorage(() => localStorage),
		},
	),
)
