import {SERVER_URL} from '@/shared/config/private.config'
import {useCartStore} from '@/shared/store/cart.store'
import {ICartItem} from '@/shared/types/cart.interface'
import {BiMinus} from 'react-icons/bi'
import {BsPlus} from 'react-icons/bs'
import {HiOutlineTrash} from 'react-icons/hi2'
import styles from './styles.module.scss'

type Props = {
	data: ICartItem
}

export const ShoppingCartCard = ({data}: Props) => {
	const {removeFromCart, minus, plus} = useCartStore()

	const getVariantKey = (item: ICartItem) =>
		item.variantKey || `${item.id}-${item.size}-${item.color}`

	const handleDelete = () => {
		const key = getVariantKey(data)
		removeFromCart(key)
	}

	return (
		<div className={styles.container}>
			<div className={styles.base} key={getVariantKey(data)}>
				<img
					className={styles.img}
					src={`${SERVER_URL}${data.img}`}
					alt={data.name}
				/>
				<div className={styles.info}>
					<h3 className={styles.title}>{data.name}</h3>
					<div className={styles.details}>
						<div className={styles.colors}>
							<span className={styles.label}>Colors:</span>
							<div className={styles.colorList}>
								<span className={styles.colorItem}>{data.color}</span>
							</div>
						</div>
						<div className={styles.sizes}>
							<span className={styles.label}>Size:</span>
							<div className={styles.sizeList}>
								<span className={styles.sizeItem}>{data.size}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h2 className={styles.price}>${data.price}.00</h2>
			<div className={styles.quantity}>
				<button
					onClick={() => minus(getVariantKey(data))}
					className={styles.minus}
				>
					<BiMinus size={15} />
				</button>
				<span className={styles.count}>{data.quantity}</span>
				<button
					onClick={() => plus(getVariantKey(data))}
					className={styles.plus}
				>
					<BsPlus size={15} />
				</button>
			</div>
			<h2 className={styles.shipping}>free</h2>
			<h2 className={styles.total}>${data.price * data.quantity}.00</h2>
			<button className={styles.delete} onClick={handleDelete}>
				<HiOutlineTrash color='#8A33FD' size={18} />
			</button>
		</div>
	)
}
