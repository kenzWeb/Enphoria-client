import {SERVER_URL} from '@/shared/config/private.config'
import {ICartItem} from '@/shared/types/cart.interface'
import styles from './OrderItemCard.module.scss'

interface OrderItemCardProps {
	item: ICartItem
}

export const OrderItemCard = ({item}: OrderItemCardProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img
					src={`${SERVER_URL}${item.img}`}
					alt={item.name}
					className={styles.image}
				/>
			</div>
			<div className={styles.details}>
				<div className={styles.info}>
					<h3 className={styles.name}>{item.name}</h3>
					<p className={styles.color}>Color: {item.color || 'N/A'}</p>
					<p className={styles.size}>Size: {item.size || 'N/A'}</p>
				</div>
				<div className={styles.priceInfo}>
					<span className={styles.price}>${item.price}</span>
					<span className={styles.quantity}>Qty: {item.quantity}</span>
				</div>
			</div>
			<button className={styles.removeButton}>
				<svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
					<path
						d='M13 1L1 13M1 1L13 13'
						stroke='#3C4242'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</button>
		</div>
	)
}
