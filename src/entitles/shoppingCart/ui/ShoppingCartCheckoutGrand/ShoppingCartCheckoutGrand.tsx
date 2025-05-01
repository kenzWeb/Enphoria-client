import {useOrderCalculation} from '@/shared/hooks/useOrderCalculation'
import styles from './ShoppingCartCheckoutGrand.module.scss'

export const ShoppingCartCheckoutGrand = () => {
	const {grandTotal} = useOrderCalculation()

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Grand Total</h2>
			<span className={styles.element}>${Math.round(grandTotal)}.00</span>
		</div>
	)
}
