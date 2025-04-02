import {useEffect} from 'react'
import {IShoppingCartCheckout} from '../../types'
import styles from './ShoppingCartCheckoutGrand.module.scss'

export const ShoppingCartCheckoutGrand = ({
	totalPrice,
	codeData,
}: IShoppingCartCheckout) => {
	useEffect(() => {
		if (codeData) {
			console.log('Code data:', codeData)
		}
	}, [codeData])

	const discountAmount =
		codeData && codeData.value ? (totalPrice * codeData.value) / 100 : 0
	const priceAfterDiscount = totalPrice - discountAmount

	const grandTotal = priceAfterDiscount + 5

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Grand Total</h2>
			<span className={styles.element}>${Math.round(grandTotal)}.00</span>
		</div>
	)
}
