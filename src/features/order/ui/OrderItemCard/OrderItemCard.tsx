import {SERVER_URL} from '@/shared/config/private.config'
import {OrderItemCardProps} from '../../types'
import styles from './OrderItemCard.module.scss'

export const OrderItemCard = ({item}: OrderItemCardProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img
					src={`${SERVER_URL}${item.product.images[0]}`}
					alt={item.product.name}
					className={styles.image}
				/>
			</div>
			<div className={styles.details}>
				<div className={styles.info}>
					<h3 className={styles.name}>{item.product.name}</h3>
					<p className={styles.brand}>Brand: {item.product.brand}</p>
					<p className={styles.description}>{item.product.description}</p>
				</div>
				<div className={styles.priceInfo}>
					<span className={styles.price}>${item.price}</span>
					<span className={styles.quantity}>Qty: {item.quantity}</span>
				</div>
			</div>
		</div>
	)
}
