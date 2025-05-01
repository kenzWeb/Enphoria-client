import {useOrderCalculation} from '@/shared/hooks/useOrderCalculation'
import {useCartStore} from '@/shared/store/cart.store'
import styles from './OrderSummaryShip.module.scss'

export const OrderSummaryShip = () => {
	const {totalPrice, discountAmount, shippingCost, grandTotal} =
		useOrderCalculation()
	const items = useCartStore((state) => state.cart)

	return (
		<div className={styles.wrapper}>
			<div>
				<div className={styles.container}>
					<h2>
						Subtotal <span>( {items.length} items )</span>
					</h2>
					<h3>${totalPrice}.00</h3>
				</div>
				<div className={styles.container}>
					<h2>Savings</h2>
					<h3>
						{discountAmount > 0 ? `-$${discountAmount.toFixed(2)}` : '$0.00'}
					</h3>
				</div>
			</div>
			<div className={styles.container}>
				<h2>Shipping</h2>
				<h3>${shippingCost}.00</h3>
			</div>
			<div className={styles.container}>
				<h2>Total</h2>
				<h3>${Math.round(grandTotal)}.00</h3>
			</div>
		</div>
	)
}
