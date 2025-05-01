import {useCartStore} from '@/shared/store/cart.store'
import {useCodeStore} from '@/shared/store/code.store'

interface OrderCalculation {
	totalPrice: number
	discountAmount: number
	priceAfterDiscount: number
	shippingCost: number
	grandTotal: number
	itemsCount: number
}

export const useOrderCalculation = (): OrderCalculation => {
	const {totalPrice, totalItems} = useCartStore().getCartSummary()
	const codeData = useCodeStore()

	const discountAmount =
		codeData && codeData.value ? (totalPrice * codeData.value) / 100 : 0
	const priceAfterDiscount = totalPrice - discountAmount
	const shippingCost = 5
	const grandTotal = priceAfterDiscount + shippingCost

	return {
		totalPrice,
		discountAmount,
		priceAfterDiscount,
		shippingCost,
		grandTotal,
		itemsCount: totalItems,
	}
}
