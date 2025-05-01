import {SERVER_URL} from '@/shared/config/private.config'
import {IOrderSummaryItem} from '../types'
import styles from './OrderSummaryItem.module.scss'

export const OrderSummaryItem = ({data}: IOrderSummaryItem) => {
	return (
		<div className={styles.container}>
			<img
				className={styles.img}
				src={`${SERVER_URL}${data.img}`}
				alt={data.name}
			/>

			<div>
				<h2 className={styles.title}>
					{data.name} <span className={styles.primary}>x {data.quantity}</span>
				</h2>
				<h2 className={styles.title}>
					Color<span className={styles.primary}>: {data.color}</span>
				</h2>
			</div>

			<div className={styles.priceContainer}>
				<h3 className={styles.secondary}>${data.price}.00</h3>
			</div>
		</div>
	)
}
